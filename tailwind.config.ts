import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue-dark": "#1E6F9F",
        "blue": "#4EA8DE",
        "purple-dark": "#5E60CE",
        "purple": "#8D8DEA",
        "gray-100": "#F2F2F2",
        "gray-200": "#D9D9D9",
        "gray-700": "#0D0D0D",
        "gray-600": "#1A1A1A",
        "gray-500": "#262626",
        "gray-400": "#333333",
        "gray-300": "#808080 ",
      }
    },
  },
  plugins: [],
};
export default config;
