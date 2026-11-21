import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

/**
 * Dev-only: serves api/*.js through Vite's dev server so `npm run dev`
 * can talk to /api/chat locally, without needing `vercel dev` (which needs
 * symlink permissions on Windows). Production on Vercel is unaffected —
 * it runs api/ as real serverless functions.
 */
function localApiPlugin() {
  return {
    name: 'local-api',
    apply: 'serve',
    configureServer(server) {
      // Make .env values (e.g. GEMINI_API_KEY) visible to the handlers.
      const env = loadEnv(server.config.mode, process.cwd(), '')
      for (const [key, value] of Object.entries(env)) {
        if (process.env[key] === undefined) process.env[key] = value
      }

      server.middlewares.use(async (req, res, next) => {
        const match = req.url && req.url.match(/^\/api\/([\w-]+)(?:\?.*)?$/)
        if (!match) return next()

        try {
          // Parse the JSON body the way Vercel does.
          const chunks = []
          for await (const chunk of req) chunks.push(chunk)
          const raw = Buffer.concat(chunks).toString('utf8')
          req.body = raw ? JSON.parse(raw) : {}

          res.status = (code) => {
            res.statusCode = code
            return res
          }
          res.json = (data) => {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(data))
          }

          // ssrLoadModule so edits to api/ and src/data are picked up live.
          const mod = await server.ssrLoadModule(`/api/${match[1]}.js`)
          await mod.default(req, res)
        } catch (err) {
          console.error('[local-api] handler error:', err)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Local API error' }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localApiPlugin()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    port: Number(process.env.PORT) || 5173,
  },
});
