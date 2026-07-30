/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        smoke: '#9A9A9A',
        mist: '#F2F2F4',
        star: '#F4501E',
        pin: '#1B74E4',
      },
    },
  },
  plugins: [],
};
