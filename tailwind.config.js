/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        transparentNav: '#e8e5e4',
      },
      fontSize:{
        bigger: '8xl',
      },
    },
  },
  plugins: [],
}

