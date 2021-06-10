module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Bebas: ['Bebas Neue']
      },
      zIndex: {
        '-10': '-10',
      }
    },
    minWidth: {
      '400': '270px',

    },
    gridTemplateColumns: {
      'cards': 'repeat(auto-fit, minmax(290px, 1fr))',
      'whyus': 'repeat(auto-fit, minmax(250px, 1fr))',
    },

  },
  variants: {
    extend: {
      inset: ['group-hover'],
    }
  },
  plugins: [],
}
