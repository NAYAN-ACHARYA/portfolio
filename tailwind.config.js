/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',     // for app directory (if using App Router)
    './pages/**/*.{js,ts,jsx,tsx}',   // for pages directory (if using Pages Router)
    './components/**/*.{js,ts,jsx,tsx}', // common for reusable components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
