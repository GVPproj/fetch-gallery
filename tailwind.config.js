/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        
        '28': '28deg',
        '30': '30deg'
      }
    }
  },
  plugins: [],
}

