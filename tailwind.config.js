/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': 'url("./assets/Hero-bg.png")',
      },
      fontFamily: {
        'rubik': ['Rubik']
      },
    },
  },
  plugins: [],
}
