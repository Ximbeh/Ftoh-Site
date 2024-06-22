/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        formula: ['Formula', 'sans-serif'],
        'formula-bold': ['Formula-Bold', 'sans-serif'],
        'formula-wide': ['Formula-Wide', 'sans-serif']
      }
    },
  },
  plugins: [],
}

