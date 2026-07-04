/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        // Brand colors
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        cream: "var(--cream)",
        sage: "var(--sage)",
        "sage-deep": "var(--sage-deep)",
        rose: "var(--rose)",
        "rose-deep": "var(--rose-deep)",
        panel: "var(--panel)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-33.33%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        scroll: "scroll 30s linear infinite",
      },
    },
  },
  plugins: [],
};
