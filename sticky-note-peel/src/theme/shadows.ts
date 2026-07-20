import { colors } from './colors';

export const shadows = {
  composeButton: {
    shadowColor: colors.black,
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  dockButton: {
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  liftedNote: {
    shadowColor: colors.black,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 16 },
  },
} as const;
