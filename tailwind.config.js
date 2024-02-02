/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        quantico: ['Quantico','sans serif']
      },
      screens:{
        xxs:'414px'
      }
    },
  },
  plugins: [],
}