/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // <-- ADD THIS LINE to scan for HTML files directly in the root
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

