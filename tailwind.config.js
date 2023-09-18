/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans"],
      },
      fontSize:{
        xxs:'0.6rem'
      }
    },
  },
  plugins: [],
};
