/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      backgroundImage: {
        'layered-steps': "url('/src/assets/svg/layered-steps-haikei.svg')",
        'layered-waves': "url('/src/assets/svg/layered-waves-haikei.svg')",
      },
    },
  },
  plugins: [],
}
