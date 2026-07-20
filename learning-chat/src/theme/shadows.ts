import { colors } from "./colors";

export const shadows = {
  topicCard: {
    shadowColor: colors.cardShadow,
    shadowOpacity: 0.14,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
  },
} as const;
