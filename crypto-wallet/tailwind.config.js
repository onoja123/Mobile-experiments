/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        screen: '#EFF1F3',
        ink: '#0B0B0F',
        subtle: '#9AA0A9',
        cents: '#C3C7CD',
        gain: '#17A34A',
        gainSoft: '#DFF3E5',
        loss: '#E5484D',
        band: '#050506',
        chip: '#EEF0F3',
        accent: '#5A45FF',
        accentSoft: '#EDEAFF',
        outline: '#E4E7EC',
        disabled: '#E7E9EE',
      },
    },
  },
  plugins: [],
};
