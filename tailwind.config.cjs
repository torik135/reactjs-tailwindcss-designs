/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        'layered-steps': "url('/src/assets/svg/layered-steps-haikei.svg')",
        'layered-waves': "url('/src/assets/svg/layered-waves-haikei.svg')",
      },
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, .7)',
        dimBlue: 'rgba(9, 151, 124, .1)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    }
  },
  plugins: [],
}
