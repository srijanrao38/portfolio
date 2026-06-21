import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          surface: "var(--bg-surface)",
          card: "var(--bg-card)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          dim: "var(--accent-dim)",
          glow: "var(--accent-glow)",
        },
        border: "var(--border)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Courier New", "monospace"],
        body: ["var(--font-instrument-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "pulse-slow": "dotPulse 8s ease-in-out infinite",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
