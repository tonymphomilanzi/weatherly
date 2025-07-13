/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Urbanist', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
