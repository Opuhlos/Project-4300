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
        background: "#FFF9F0",
        astra: "#FFECBD",
        orange: "#FFBF5F",
        darkerOrange: "#FFA216",
        dark: "#191A23",
        darkLighten: "#362a26",
      }
    }
  },
  plugins: [],
};
export default config;
