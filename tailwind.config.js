/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      objectPosition: {
        'custom-top': 'top center',
        'custom-bottom': 'bottom center',
      },
    },
  },
  plugins: [],
}