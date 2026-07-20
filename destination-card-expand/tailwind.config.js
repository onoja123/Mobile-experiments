const { palette, radii } = require('./src/theme/tokens');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: palette,
      borderRadius: {
        card: `${radii.card}px`,
        sheet: `${radii.sheet}px`,
      },
      fontFamily: {
        sans: ['NunitoSans_400Regular'],
        semibold: ['NunitoSans_600SemiBold'],
        bold: ['NunitoSans_700Bold'],
        extrabold: ['NunitoSans_800ExtraBold'],
      },
    },
  },
  plugins: [],
};
