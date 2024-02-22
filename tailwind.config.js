/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "tw-",
  theme: {
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

