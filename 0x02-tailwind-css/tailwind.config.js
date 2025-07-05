/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}", // Look in 'src' for common web file types
    "./public/**/*.html", // If you also have HTML files in a 'public' folder
    // Add any other specific paths where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

