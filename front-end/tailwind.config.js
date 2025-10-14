/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        "black-main":"#141414",
        "main-color":"#7d1c2a",
        "main-hover":'#5c0410'
      },
      spacing:{
        "300px":"300px",
        "200px":"200px"
      }
    },
  },
  plugins: [],
}

