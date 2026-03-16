/** @type {import('tailwindcss').Config} */
import { bracketuiPlugin } from "@thirdbracket/bracketui";

const config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // Path to Bracketui component library
    "../../packages/bracketui/src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ["var(--font-anton)", "sans-serif"],
        satisfy: ["var(--font-satisfy)", "cursive"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [bracketuiPlugin],
};

export default config;
