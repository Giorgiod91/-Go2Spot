import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        glow: {
          "0%": { textShadow: "0 0 4px rgba(127, 90, 240, 0.5)" },
          "100%": { textShadow: "0 0 12px rgba(127, 90, 240, 1)" },
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        heading: ["Poppins", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#7F5AF0",
        secondary: "#22D3EE",
        accent: "#FF49DB",
        neonPurple: "#A78BFA",
        neonBlue: "#60A5FA",
        background: "#27272a",
        text: "#1E293B",
        glassBg: "rgba(255, 255, 255, 0.1)",
        glassBorder: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        myapp: {
          "color-scheme": "light",
          primary: "#7F5AF0",
          "primary-content": "#FFFFFF",
          secondary: "#22D3EE",
          "secondary-content": "#FFFFFF",
          accent: "#FF49DB",
          "accent-content": "#FFFFFF",
          neutral: "#F9FAFB",
          "neutral-content": "#1E293B",
          "base-100": "#F9FAFB",
          "base-content": "#1E293B",
          info: "#3B82F6",
          "info-content": "#FFFFFF",
          success: "#10B981",
          "success-content": "#FFFFFF",
          warning: "#F59E0B",
          "warning-content": "#FFFFFF",
          error: "#EF4444",
          "error-content": "#FFFFFF",
        },
      },

      "light",
      "dark",
      "cupcake",
      "cyberpunk",
      "dracula",
    ],
  },
  plugins: [require("daisyui")],
};

export default config;
