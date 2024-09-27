/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./dist/index.html','./dist/page/*'],
  theme: {
    fontFamily: {
       'sans': ['"Outfit"'],
       'serif': ['ui-serif', 'Georgia'],
       'mono': ['ui-monospace', 'SFMono-Regular'],
       'display': ["Open Sans"],
       'body': [' font-family: "Playfair Display", serif;'],
    },
    colors: colors,
    extend: {},
  },
  plugins: [],
}
