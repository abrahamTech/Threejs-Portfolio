/*This file has
  1.-Primary, Secondary andTertiary Colors
    ORIGINAL: secondary: "#aaa6c3"
  2.-Box Shadows
  3.-Screens
  4.-Background Images
    ORIGINAL "hero-pattern": "url('/src/assets/herobg.png')"*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#dba6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "red-secondary": "#bd0000",
        "violet-orig": "915eff"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/black.jpg')",
      },
    },
  },
  plugins: [],
};
