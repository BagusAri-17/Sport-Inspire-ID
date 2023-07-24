/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      boxShadow: {
        'cards': '0px 24px 96px 0px rgba(255, 0, 0, 0.02)'
      },

      colors: {
        'primary': '#ff0000',
        'secondary': '#ffffff',
        'textColor': '#34364a',
        'textColor2': '#343434'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          sm: '16px',
          md: '64px',
          lg: '128px',
        }
      },
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}