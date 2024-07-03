/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
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
      },

      maxWidth:{
        '1/2': '50%'
      },

      zIndex:{
        'm1': -1,
        '1': 1,
      },

      backgroundColor: theme=>({
        ...theme('colors'),
        'grayTotal': '#15151e'
      })
      
    },
  },
  plugins: [],
}
)

