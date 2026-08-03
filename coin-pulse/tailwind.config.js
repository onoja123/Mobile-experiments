/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['BricolageGrotesque_400Regular'],
        semi: ['BricolageGrotesque_600SemiBold'],
        strong: ['BricolageGrotesque_700Bold'],
      },
      colors: {
        paper: '#F0EEEB',
        ink: '#111111',
        smoke: '#9A9A9A',
        mist: '#ECEAE7',
        success: '#23A55A',
        danger: '#E5304C',
        violet: '#A855F7',
      },
    },
  },
  plugins: [],
};
