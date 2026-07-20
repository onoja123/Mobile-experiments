import type { TextStyle } from "react-native";

export const typography = {
  screenTitle: { fontSize: 17, fontWeight: "800", letterSpacing: 0.3 },
  cardHolder: { fontSize: 12, fontWeight: "700", letterSpacing: 4 },
  cardNumber: { fontSize: 10, fontWeight: "600", letterSpacing: 3 },
  rowTitle: { fontSize: 14, fontWeight: "700" },
  rowMeta: { fontSize: 11 },
  letterIcon: { fontSize: 19, fontWeight: "800" },
} as const satisfies Record<string, TextStyle>;
