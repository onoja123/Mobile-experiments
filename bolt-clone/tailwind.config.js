const { palette } = require('./src/theme/palette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ink: palette.ink,
        muted: palette.muted,
        subtle: palette.subtle,
        faint: palette.faint,
        steel: palette.steel,
        ghost: palette.ghost,
        charcoal: palette.charcoal,
        field: palette.field,
        surface: palette.surface,
        'surface-deep': palette.surfaceDeep,
        hairline: palette.hairline,
        divider: palette.divider,
        'divider-soft': palette.dividerSoft,
        grabber: palette.grabber,
        'grabber-soft': palette.grabberSoft,
        edge: palette.edge,
        outline: palette.outline,
        mint: palette.mint,
        brand: palette.brand,
        'brand-soft': palette.brandSoft,
        'brand-deep': palette.brandDeep,
        danger: palette.danger,
      },
    },
  },
  plugins: [],
};
