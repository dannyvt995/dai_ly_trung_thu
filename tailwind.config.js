/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'container-custom': '1140px'
      },
      boxShadow: {
        'contact': '0 5px 10px rgba(0, 0, 0, .2)',
        'circle-cake': '1px 1px 6px #4e4e4e'
      },
      backgroundImage: {
        'breadCrumb': 'url(/subbanner.jpg)'
      }
    },
  },
  plugins: [],
};
