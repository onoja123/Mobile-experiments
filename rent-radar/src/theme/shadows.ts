import { colors } from './colors';

export const shadows = {
  iconGlow: {
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
} as const;
