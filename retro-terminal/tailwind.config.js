/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        paper: '#D9D2BF',
        paperdim: '#CFC8B4',
        ink: '#141210',
        void: '#0A0A0C',
        cream: '#D8D1BD',
        creamdim: '#8F8A79',
      },
    },
  },
  plugins: [],
};
