/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {

      colors:{
        bg_body: 'hsl(217, 54%, 11%)',
        bg_card: 'hsl(216, 50%, 16%)',
        
      }
    },
  },
  plugins: [],
}

