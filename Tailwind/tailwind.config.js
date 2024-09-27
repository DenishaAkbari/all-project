/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./dist/index.html','./dist/page/*'],
  theme: {
    fontFamily: {
       'sans': ['"Outfit"'],
       'serif': ['ui-serif', 'Georgia'],
       'mono': ['ui-monospace', 'SFMono-Regular'],
       'display': ['Oswald'],
       'body': [' font-family: "Outfit", sans-serif'],
    },
    colors: colors,
    extend: {},
  },
  plugins: [],
}