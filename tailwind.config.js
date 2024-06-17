/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans:['Karla'],
        serif:['jost','sans']
      },
      colors:{
        primary:'#6d40e4',
        secondary:'#47b725',
        tertiary:'#4c4d4b'
      }
    },
  },
  plugins: [],
}


// content: ["./src/**/*.{js,jsx,ts,tsx}"],
