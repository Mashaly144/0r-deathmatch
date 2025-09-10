import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#844edc',
        lightWhite: '#a6a5a6',
        cardbg: '#0c0c0e',
        border: '#ffffff14',
      },
      fontFamily: 'Tajawal',
      fontSize: { 9: '9px', 11: '11px', 13: '13px' },
      screens: {
        '2k': '2560px',
        '4k': '3840px',
        '3xl': '1680px',
      },
      backgroundImage: {
        'lobby-2':
          'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.05) 0%, rgba(153, 153, 153, 0.05) 100%)',
        'lobby-1':
          'radial-gradient(69.19% 36.84% at 50% 80.26%, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)',
      },
    },
    boxShadow: {
      violetGlow: '0 0 15px #753ada',
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide::-webkit-scrollbar': { display: 'none' },
        '.scrollbar-hide': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
