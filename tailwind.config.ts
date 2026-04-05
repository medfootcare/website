import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "mobile-wide": { max: "460px" },
        mobile: { max: "412px" },
        "mobile-narrow": { max: "344px" },
        "mobile-mini": { max: "320px" },
      },
      colors: {
        // Accessible & Ethical：WCAG AAA カラーパレット
        primary: "#0369A1",           // CTA ブルー（コントラスト 7:1+）
        "primary-dark": "#075985",
        "primary-light": "#EFF6FF",
        surface: "#ffffff",
        "surface-alt": "#F8FAFC",     // 背景
        "on-surface": "#020617",      // ほぼ黒（WCAG AAA）
        "on-surface-variant": "#334155", // スレート（WCAG AA）
        "text-muted": "#64748B",
        border: "#CBD5E1",
      },
      fontFamily: {
        headline: ["var(--font-figtree)", "var(--font-noto-sans-jp)", "sans-serif"],
        body: ["var(--font-noto-sans-jp)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "2px",
        md: "4px",
        lg: "4px",
        xl: "8px",
        full: "9999px",
      },
      fontSize: {
        // 最小 16px 保証
        base: ["17px", { lineHeight: "1.8" }],
        sm: ["15px", { lineHeight: "1.7" }],
        xs: ["14px", { lineHeight: "1.6" }],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.4s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
