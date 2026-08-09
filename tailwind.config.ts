import type { Config } from "tailwindcss";

export default {
  darkMode: "media",
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
