/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000"
      },
      screens: {
        xs: "420px"
      }
    },
  },
  plugins: [],
}

