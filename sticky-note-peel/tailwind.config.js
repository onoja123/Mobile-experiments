/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ink: '#232837',
        surface: '#353B4F',
        note: '#31374F',
      },
      fontFamily: {
        q400: ['Quicksand_400Regular'],
        q500: ['Quicksand_500Medium'],
        q600: ['Quicksand_600SemiBold'],
        q700: ['Quicksand_700Bold'],
      },
    },
  },
  plugins: [],
};
