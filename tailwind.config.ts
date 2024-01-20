import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '7rem',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#F4153A",
          },
        },
        dark: {
          colors: {
            primary: "#951007",
          },
        },
      },
    }),
    require('tw-bootstrap-grid-optimizer'),
  ],
};
export default config;
