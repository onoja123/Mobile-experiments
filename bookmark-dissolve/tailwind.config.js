/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        canvas: '#F5F4F2',
        ink: '#1C1B1A',
        'ink-muted': '#8E8B87',
        'mymind-orange': '#FF5A1F',
        'mymind-text': '#C7C3CF',
        'play-purple': '#B9A2F7',
        'play-gray': '#96959B',
        'arc-blue': '#4E4BEC',
        'arc-navy': '#2724A8',
      },
      borderRadius: {
        card: '22px',
      },
    },
  },
  plugins: [],
};
