/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#151f28',
        secondary : '#ffba0a'
      },
      maxWidth: {
        'max-container': '1550px'
      }
    },
  },
  plugins: [],
}

