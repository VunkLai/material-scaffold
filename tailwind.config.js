/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
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
