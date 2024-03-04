import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        md: "1rem",
      },
      colors: {
        theme: {
          // black: "#1c1b1b",
          gray: {
            DEFAULT: "#565656",
            dark: "#565656",
          },
          offwhite: "#FEF8E7",
        },
      },
    },
  },
  plugins: [],
};
export default config;
