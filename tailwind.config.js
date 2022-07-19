/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBar: "#0f273d",
        primary: "#0A1A29",
        textBase: "#8f9091",
      },

    },
    
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
