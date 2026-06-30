import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#F5A623",
        gold2: "#E8962D",
        dark: "#0D0D0D",
        dark2: "#141414",
        dark3: "#1A1A1A",
        dark4: "#1E1E1E",
        border: "#2A2A2A",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
