import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#07110D",
          900: "#0D1A15",
          850: "#172A21",
          800: "#1C2F25"
        },
        primary: {
          DEFAULT: "#52B788",
          soft: "#95D5B2",
          400: "#52B788",
          500: "#3EA072"
        },
        sage: {
          200: "#cde4d2",
          300: "#b6d4bf",
          400: "#84A98C",
          500: "#6B8F73"
        },
        mint: {
          200: "#B7F3D2",
          300: "#B7F3D2",
          400: "#95D5B2"
        }
      },
      boxShadow: {
        glow: "0 24px 80px rgba(6, 17, 12, 0.45)",
        panel: "0 30px 120px rgba(3, 12, 8, 0.55)",
        insetSoft: "inset 0 1px 0 rgba(255, 255, 255, 0.08)"
      },
      backgroundImage: {
        haze:
          "radial-gradient(circle at top, rgba(132, 169, 140, 0.18), transparent 44%), radial-gradient(circle at 30% 20%, rgba(82, 183, 136, 0.12), transparent 36%), linear-gradient(180deg, rgba(7, 17, 13, 0.92), rgba(13, 26, 21, 1))"
      }
    }
  },
  plugins: []
};

export default config;
