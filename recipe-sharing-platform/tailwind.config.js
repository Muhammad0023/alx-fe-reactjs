/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify all files that should be scanned for Tailwind classes
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  // You can set 'media' or 'class' for dark mode if you want it later
  darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [],
};