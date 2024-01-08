/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.tsx"],
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
    },
  },
  corePlugins: {
    // the Tailwind CSS preflight styless vs. Material UI's preflight
    preflight: true,
  },
  plugins: [],
};
