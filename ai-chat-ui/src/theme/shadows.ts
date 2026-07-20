import { ViewStyle } from "react-native";

export const shadows = {
  input: {
    shadowColor: "#252A3D",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 8,
  } satisfies ViewStyle,

  bubble: {
    shadowColor: "#252A3D",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  } satisfies ViewStyle,

  drawerContent: {
    shadowColor: "#1B1E2A",
    shadowOffset: { width: -8, height: 0 },
    shadowOpacity: 0.06,
    shadowRadius: 24,
    elevation: 12,
  } satisfies ViewStyle,
} as const;
