/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{html,js}"],
  prefix: "tw-",
  theme: {
    screens: {
      // 'xxs': '320px',
      'xs': '425px',
      // 'md': '768px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "primary": "#333",
        "subtitle": "rgb(228 228 231)",
        "link": "#3bedb7",
      }
    },
  },
  plugins: [],
}

