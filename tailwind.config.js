/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "background-color: #fffffc; background-image: linear-gradient(315deg, #fffffc 0%, #beb7a4 74%);",
        secondary: "#aaa6c3",
        tertiary: "#000000",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#aaa6c3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};