/** @type {import('tailwindcss').Config} */


import daisyui from 'daisyui'


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "background-black":"#0D0E11",
        "gray-black":"#15171D",
        "gray-height":"#1F232E",
        "primary-purple":"#6366F1",
        "secundary-purple":"#885CF6",
        "gray-white":"#EDEFF3"
      }
    },
  },
  plugins: [daisyui],
  daisyui:{
    themes:['dark']
  }
}