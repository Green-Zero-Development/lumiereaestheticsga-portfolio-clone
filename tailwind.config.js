/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}'
    ],
theme: {
  screens: {
      'xs': '400px',
      'sm': '516px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1440px',
      '3xl': '1441px',
      '4xl': '2000px',
  },
  extend: {},
},
plugins: [],
}