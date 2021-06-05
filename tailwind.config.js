module.exports = {

  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Bebas: ['Bebas Neue']
      },
    },
    gridTemplateColumns: {
     'cards': 'repeat(auto-fit, minmax(290px, 1fr))',
     'whyus': 'repeat(auto-fit, minmax(250px, 1fr))',
    },
    extend: {
      zIndex: {
       '-10': '-10',
      }
    },
  },
  variants: {
    extend: {
      inset: ['group-hover'],
    }
  },
  plugins: [],
}
