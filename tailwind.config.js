const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',

  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        body: ['GT Pressura Mono', ...defaultTheme.fontFamily.sans],
        heading: ['GT Pressura Mono', ...defaultTheme.fontFamily.sans],
        subheading: ['GT Sectra', ...defaultTheme.fontFamily.serif]
      },

      colors: {
        light: '#FFFCF9 ',
        dark: '#202020',
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1'
      },

      spacing: {
        28: '7rem'
      },

      letterSpacing: {
        tighter: '-.04em'
      },

      lineHeight: {
        tight: 1.2
      },

      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
      }
    }
  },

  varants: {
    extend: {}
  },

  plugins: [require('@tailwindcss/forms')]
};
