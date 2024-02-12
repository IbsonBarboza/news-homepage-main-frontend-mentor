/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        SoftOrange: 'hsl(35, 77%, 62%)',
        SoftRed: 'hsl(5, 85%, 63%)',
        GrayishBlue: 'hsl(233, 8%, 79%)',
        DarkGrayishBlue: 'hsl(236, 13%, 42%)',
        VeryDarkBlue: 'hsl(240, 100%, 5%)',
      },

      fontFamily: {
        Inter: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}
