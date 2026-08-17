/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist_400Regular'],
        medium: ['Geist_500Medium'],
        semi: ['Geist_600SemiBold'],
        heading: ['BricolageGrotesque_600SemiBold'],
        display: ['BricolageGrotesque_700Bold'],
      },
      colors: {
        paper: '#F1F2ED',
        card: '#FFFFFF',
        ink: '#14170F',
        smoke: '#767A6E',
        faint: '#B9BCB2',
        line: '#E4E5DF',
        accent: '#CDF463',
        'accent-ink': '#5F8F14',
        'on-accent': '#161911',
        danger: '#D9482A',
      },
    },
  },
  plugins: [],
};
