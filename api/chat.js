import { GoogleGenAI } from "@google/genai";
import { buildSystemPrompt } from "../src/data/profile.js";

// Vercel serverless function: POST /api/chat
// Body: { messages: [{ role: "user" | "assistant", content: string }, ...] }
// Returns: { reply: string }

// "gemini-flash-latest" is a Google-maintained alias that always points at
// their current stable fast model, so this doesn't need bumping by hand
// every time a new Gemini version ships.
const MODEL = "gemini-3.1-flash-lite";
const MAX_TURNS = 12; // how many prior messages we keep as context
const MAX_MESSAGE_LENGTH = 800; // chars, per message
const MAX_OUTPUT_TOKENS = 400; // reply length cap

// --- Very small in-memory rate limiter -------------------------------------
// This resets whenever the serverless instance cold-starts, so it's not a
// hard guarantee — but it stops casual abuse/loops from burning through the
// API budget between cold starts. For real traffic volumes, swap this for
// a shared store (e.g. Upstash Redis / Vercel KV) keyed the same way.
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 20;
const hits = new Map(); // ip -> array of timestamps

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS_PER_WINDOW;
}

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  return req.socket?.remoteAddress || "unknown";
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return res
      .status(429)
      .json({ error: "Too many messages — please slow down and try again in a bit." });
  }

  if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is not set");
    return res.status(500).json({ error: "AI assistant is not configured yet." });
  }

  const { messages } = req.body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages array is required" });
  }

  // Sanitize + clamp what we forward to the model. Gemini uses "model"
  // rather than "assistant" for the AI's turns.
  const cleanMessages = messages
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .slice(-MAX_TURNS)
    .map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content.slice(0, MAX_MESSAGE_LENGTH) }],
    }));

  if (cleanMessages.length === 0) {
    return res.status(400).json({ error: "No valid messages provided" });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const response = await ai.models.generateContent({
      model: MODEL,
      contents: cleanMessages,
      config: {
        systemInstruction: buildSystemPrompt(),
        maxOutputTokens: MAX_OUTPUT_TOKENS,
      },
    });

    const reply = (response.text || "").trim();

    if (!reply) {
      throw new Error("Empty response from model");
    }

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Gemini API error:", err);
    return res
      .status(502)
      .json({ error: "The AI assistant is temporarily unavailable. Please try again shortly." });
  }
}
