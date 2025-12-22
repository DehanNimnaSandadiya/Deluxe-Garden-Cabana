import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        coconut: {
          DEFAULT: "#F7F4EE"
        },
        sand: {
          light: "#E9DBC8",
          DEFAULT: "#D9C3A3"
        },
        palm: {
          dark: "#103828"
        },
        sunset: {
          muted: "#C99A5B"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        subtle: "0 18px 45px rgba(15, 23, 42, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;


