import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#fbf7ef",
        sand: "#dfc8a7",
        terracotta: "#b85d3d",
        walnut: "#5a3929",
        ink: "#15120f",
        gold: "#b89449"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"]
      },
      boxShadow: {
        luxe: "0 24px 70px rgba(47, 30, 22, 0.14)",
        glow: "0 18px 50px rgba(184, 148, 73, 0.24)"
      },
      backgroundImage: {
        pattern:
          "radial-gradient(circle at 1px 1px, rgba(184,148,73,.18) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
