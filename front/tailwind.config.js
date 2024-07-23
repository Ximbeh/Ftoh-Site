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
        'grade-pattern':"url(https://www.formula1.com/etc/designs/fom-website/images/patterns/plus-x2.png)",
        'grade-pattern-gray': "url(https://www.formula1.com/assets/racing/static/images/plus-white-x2.avif)",
        'image-schedule': "url(https://media.formula1.com/content/dam/fom-website/races/2024/race-listing/Hungary.jpg)",
        'image-header-race': "url(https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Saudi_Arabia)"
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
        'grayTotal': '#15151e',
        'fórmula1': '#ef4444',
        'fórmula2': '#3b82f6'
      }),
      borderColor: theme=>({
        ...theme('colors'),
        'grayTotal': '#15151e',
         'fórmula1': '#ef4444',
        'fórmula2': '#3b82f6'
      }),

      gridTemplateColumns:{
        'news': '70% 30%'
      }
      
    },
  },
  plugins: [],
}
)

