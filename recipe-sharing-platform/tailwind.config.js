/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",       // vite main HTML
    "./public/index.html", // ALX specific requirement
    "./src/**/*.{js,ts,jsx,tsx}", // all components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
