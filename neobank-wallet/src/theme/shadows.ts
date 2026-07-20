import type { ViewStyle } from "react-native";

import { colors } from "./colors";

export const cardShadow: ViewStyle = {
  shadowColor: colors.black,
  shadowOpacity: 0.16,
  shadowRadius: 20,
  shadowOffset: { width: 0, height: 10 },
  elevation: 12,
};

export const buttonShadow: ViewStyle = {
  shadowColor: colors.black,
  shadowOpacity: 0.06,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 3 },
  elevation: 3,
};
