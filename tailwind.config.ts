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
        primary: "#5dc5bc",
        secondary: "#e68c64",
        surface: "#faf6f2",
        "on-surface": "#353535",
        "on-surface-variant": "#646464",
        "outline-variant": "#d4cdc8",
        "surface-container-low": "#f5f1ee",
        "surface-container": "#ede8e3",
        "surface-container-highest": "#e0dbd6",
        "primary-container": "#7dd5d0",
        "on-primary": "#ffffff",
        "secondary-container": "#f5c4a8",
        "on-secondary-container": "#7a3d1c",
      },
      fontFamily: {
        headline: ["Noto Sans JP", "sans-serif"],
        body: ["Noto Sans JP", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
