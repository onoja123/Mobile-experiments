import type { ViewStyle } from 'react-native';

import { colors } from './colors';

export const shadows = {
  card: {
    shadowColor: colors.cardShadow,
    shadowOpacity: 0.1,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  floating: {
    shadowColor: colors.cardShadow,
    shadowOpacity: 0.14,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  panel: {
    shadowColor: colors.cardShadow,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
} satisfies Record<string, ViewStyle>;
