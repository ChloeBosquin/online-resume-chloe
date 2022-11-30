/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#484963',
        'salmon' : '#f69b94'
      },
      backgroundColor: {
        'bg-blue': '#484963',
        'bg-salmon' : '#f69b94'
      },
      fontFamily: {
        'sans-gothic' : 'Gothic A1'
      }
    },
  },
  plugins: [],
}