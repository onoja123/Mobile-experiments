/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        paper: '#F5F4F2',
        ink: '#111111',
        smoke: '#9A9A9A',
        mist: '#ECEAE7',
      },
    },
  },
  plugins: [],
};
