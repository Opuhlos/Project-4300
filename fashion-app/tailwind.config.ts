import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fff9f0",
        lightorange: "#FFBF5F",
        darkerorange: "#ffa216",
        dark: "#191a23",
        ourgrey: "#f3f3f3",
        taggrey: "#3C3C43"
      }
    }
  },
  plugins: [],
};
export default config;
