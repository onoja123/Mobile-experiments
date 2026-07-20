import { colors } from "./colors";

export const shadows = {
  floatingCard: {
    shadowColor: colors.ink,
    shadowOpacity: 0.28,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 12 },
    elevation: 12,
  },
  toast: {
    shadowColor: colors.toastBackground,
    shadowOpacity: 0.3,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  binButton: {
    shadowColor: colors.binShadow,
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
} as const;
