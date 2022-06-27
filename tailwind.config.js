/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "12pro":"35rem"
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '400px'},
        // => @media (max-width: 639px) { ... }
      },
      backgroundImage: {
        '3': 'url("./img/12.jpg")',
        'wallet': 'url("./img/wallet.png")',
        'import': 'url("./img/import.png")',

      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      colors: {
        'green' : '#30955C',
        'highlight' : '#BDDDCB',
      },
    },
  },
  plugins: [],
}
