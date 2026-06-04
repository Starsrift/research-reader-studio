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
          950: "#06110c",
          900: "#0b1711",
          850: "#102119",
          800: "#173126"
        },
        sage: {
          200: "#cde4d2",
          300: "#b6d4bf",
          400: "#7fb28e",
          500: "#5f9170"
        },
        mint: {
          300: "#b8f0cf",
          400: "#8adbb8"
        }
      },
      boxShadow: {
        glow: "0 24px 80px rgba(6, 17, 12, 0.45)",
        panel: "0 30px 120px rgba(3, 12, 8, 0.55)",
        insetSoft: "inset 0 1px 0 rgba(255, 255, 255, 0.08)"
      },
      backgroundImage: {
        haze:
          "radial-gradient(circle at top, rgba(127, 178, 142, 0.18), transparent 44%), radial-gradient(circle at 30% 20%, rgba(111, 210, 162, 0.12), transparent 36%), linear-gradient(180deg, rgba(4, 12, 8, 0.92), rgba(6, 17, 12, 1))"
      }
    }
  },
  plugins: []
};

export default config;
