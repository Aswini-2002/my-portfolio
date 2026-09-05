import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";

const GREETING = {
  role: "assistant",
  content:
    "Hi! I'm Aswini's AI assistant. Ask me about their experience, skills or projects.",
};

/**
 * Floating chat widget scoped to answering questions about Aswini
 * (background, skills, experience, projects). Talks to /api/chat, a
 * Vercel serverless function backed by Gemini.
 */
const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, open]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages
            .filter((m) => m !== GREETING)
            .map(({ role, content }) => ({ role, content })),
        }),
      });

      let data = null;
      try {
        data = await res.json();
      } catch {
        // Non-JSON response (e.g. the API route isn't available in this
        // environment) — fall through to the generic error below.
      }

      if (!res.ok || !data) {
        throw new Error(data?.error || "The assistant is temporarily unavailable. Please try again.");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-line bg-ink shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <div>
                <p className="font-sans font-medium uppercase tracking-tighter text-sm text-paper">
                  Ask about Aswini
                </p>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widish text-muted">
                  Experience &middot; Skills &middot; Projects
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-faint transition-colors hover:text-paper"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-accent text-ink"
                        : "border border-line bg-surface text-paper"
                    }`}
                  >
                    {m.content}
                  </p>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl border border-line bg-surface px-4 py-2.5 text-muted">
                    <Loader2 size={14} className="animate-spin" />
                    <span className="font-mono text-[11px] uppercase tracking-widish">
                      Thinking
                    </span>
                  </div>
                </div>
              )}

              {error && (
                <p className="font-mono text-[11px] uppercase tracking-widish text-red-400">
                  {error}
                </p>
              )}
            </div>

            {/* Input */}
            <form onSubmit={sendMessage} className="flex items-center gap-2 border-t border-line p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Aswini's work..."
                disabled={isLoading}
                className="flex-1 rounded-pill border border-line bg-surface px-4 py-2.5 text-sm text-paper outline-none placeholder:text-faint focus:border-accent"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-paper text-ink transition-colors hover:bg-accent disabled:opacity-40"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close chat" : "Open chat"}
        className="flex h-14 w-14 items-center justify-center rounded-pill border border-line bg-paper text-ink shadow-lg"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
