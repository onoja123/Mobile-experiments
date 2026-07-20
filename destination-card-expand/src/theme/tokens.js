// CommonJS so tailwind.config.js can consume the same design tokens
const palette = {
  cream: '#FAF9F6',
  ink: '#1F2024',
  muted: '#ABB0BC',
  pill: '#26272B',
  slate: '#3A3D45',
  steel: '#5B5E66',
  online: '#34C77B',
  coral: '#FF6B57',
  mist: '#F3F6F9',
  fog: '#D4D7DE',
  sky: '#59AEF6',
  skyFaded: '#BCE0FA',
  white: '#FFFFFF',
  black: '#000000',
  whiteTranslucent: 'rgba(255,255,255,0.55)',
  scrim: 'rgba(30,30,30,0.28)',
};

const radii = {
  card: 30,
  sheet: 32,
};

module.exports = { palette, radii };
