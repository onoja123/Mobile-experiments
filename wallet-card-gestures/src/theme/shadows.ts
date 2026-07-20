import type { ViewStyle } from "react-native";

import { colors } from "./colors";

export const shadows = {
  card: {
    shadowColor: colors.shadow,
    shadowOpacity: 0.14,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  fab: {
    shadowColor: colors.accent,
    shadowOpacity: 0.4,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
} as const satisfies Record<string, ViewStyle>;
