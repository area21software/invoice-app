/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "ia-purple-300": "hsl(252, 93%, 67%)",
        "ia-purple-100": "hsl(252, 100%, 73%)",
        "ia-red-300": "hsl(0, 80%, 63%)",
        "ia-red-100": "hsl(0, 100%, 80%)",
        "ia-grey-100": "hsl(240, 27%, 98%)",
        "ia-blueGrey-200": "hsl(231, 73%, 93%)",
        "ia-blueGrey-400": "hsl(231, 37%, 63%)",
        "ia-blueGrey-600": "hsl(231, 20%, 61%)",
        "ia-darkGrey-200": "hsl(233, 30%, 21%)",
        "ia-darkGrey-400": "hsl(233, 31%, 17%)",
        "ia-darkGrey-600": "hsl(233, 30%, 11%)",
        "ia-darkGrey-900": "hsl(228, 29%, 7%)",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
