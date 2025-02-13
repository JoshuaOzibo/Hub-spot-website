/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '599px',
      'md': '650px',
      'lg': '1200px',
    },
    extend: {},
  },
  plugins: [],
}