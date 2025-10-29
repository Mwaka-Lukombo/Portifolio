/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors:{
       "primary-color":"#721011",
       "secundary-color":"#9B1B30",
       "main-black":"#0A0A0A",
       "secondary-black":"#1A1A1A",
       "text-main-color":"#F9F9F9",
       "text-secondary":"#E6E6E6",
       "active-color":"#B31621"
      },
      spacing:{
        "300px":"300px",
        "200px":"200px"
      },
      fontFamily:{
        "poppins":"Poppins",
        "inter":"Inter",
        "open-sans":"Open sans"
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

