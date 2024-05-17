import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          white: {
            offwhite: "#f2f2f8",
          },
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        rcondensed: ["Roboto Condensed", "sans-serif"],
        teachers: ["Teachers", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
