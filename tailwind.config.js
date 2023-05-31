/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'ping-slow': 'ping 5s cubic-bezier(1, 1, 0.2, 1) infinite',

      },
       keyframes: {
         spin: {
           to:{
             transform: 'rotate(-360deg)'
           }
         }
        }
    },
  },
  plugins: [],
}
