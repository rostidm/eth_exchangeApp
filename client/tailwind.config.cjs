/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    fontFamily: {
      'pixel': ["'Press Start 2P'"],
      'sans': ["'Space Grotesk'"]
      
    },
   
    colors: {
      'white': '#fff',
      'black': '#000',
      'inv' : '#FF000000'
    },
    maxWidth: {
      'sm': '400px',
    },
    boxShadow: {
      'sh': '0px 0px 60px -15px rgba(255,255,255, 0.9)',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '10px',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [],
}
