import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3aada8",
        "primary-light": "#e8f5f4",
        surface: "#ffffff",
        "surface-alt": "#f8fafa",
        "on-surface": "#1a2b2b",
        "on-surface-variant": "#666666",
        "text-muted": "#999999",
        border: "#e5eaea",
      },
      fontFamily: {
        headline: ["Noto Sans JP", "sans-serif"],
        body: ["Noto Sans JP", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
