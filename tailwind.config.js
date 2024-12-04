/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./js/*js"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      colors: {
        primary: "#432361",
      },
    },
  },
  plugins: [],
};
