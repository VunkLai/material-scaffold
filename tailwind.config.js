/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.tsx", "./src/**/*.svg"],
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
      primary: {
        light: colors.sky[300],
        main: colors.sky[500],
        dark: colors.sky[700],
      },
    },
    extend: {
      container: {
        center: true,
      },
      keyframes: {
        rotate360: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        rotate360: "rotate360 240s infinite linear",
      },
    },
  },
  corePlugins: {
    // the Tailwind CSS preflight styless vs. Material UI's preflight
    preflight: true,
  },
  plugins: [],
};
