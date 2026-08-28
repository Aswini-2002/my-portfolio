/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        paper: "#F8F7F4",
        muted: "rgba(248, 247, 244, 0.62)",
        faint: "rgba(248, 247, 244, 0.38)",
        line: "rgba(248, 247, 244, 0.12)",
        surface: "rgba(248, 247, 244, 0.05)",
        accent: "#8C7CFF",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter: "-0.03em",
        widish: "0.14em",
      },
      borderRadius: {
        pill: "999px",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(3%, 4%) scale(1.06)" },
          "66%": { transform: "translate(-2%, -3%) scale(0.96)" },
        },
        drift2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-4%, 3%) scale(1.1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite",
        drift2: "drift2 22s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        fadeUp: "fadeUp 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};
