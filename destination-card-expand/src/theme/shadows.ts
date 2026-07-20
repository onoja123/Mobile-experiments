import { colors } from './colors';

export const shadows = {
  searchBar: {
    shadowColor: colors.black,
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
} as const;
