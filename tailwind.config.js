/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#000000',
        'custom-silver': '#C0C0C0',
      },
    },
  },
  plugins: [],
}