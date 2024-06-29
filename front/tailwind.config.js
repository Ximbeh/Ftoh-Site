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
        'formula-wide': ['Formula-Wide', 'sans-serif'],
        titillium: ['Titillium', 'sans-serif'],
        'titillium-bold': ['Titillium-Bold', 'sans-serif'],
        'titillium-italic': ['Titillium-Italic', 'sans-serif']
      },

      backgroundImage:{
        'grade-pattern':"url(https://www.formula1.com/etc/designs/fom-website/images/patterns/plus-x2.png)"
      },
      backgroundSize:{
        '2': '8px'
      },

      minHeight:{
        '4': '16px'
      }

      
    },
  },
  plugins: [],
}

