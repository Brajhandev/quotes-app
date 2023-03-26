/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        digitalNumbers: 'DigitalNumbers-Regular',
        fredoka: 'Fredoka'
      },
      colors: {
        letters: '#25063F'
      },
      backgroundImage: {
        bg1: "url('../src/assets/fondo1.jpg')",
        bg2: "url('../src/assets/fondo2.jpg')",
        bg3: "url('../src/assets/fondo3.jpg')",
        bg4: "url('../src/assets/fondo4.jpg')"
      }
    },
  },
  plugins: [],
}
