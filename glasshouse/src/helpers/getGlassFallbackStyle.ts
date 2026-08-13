import { isLiquidGlassAvailable } from "expo-glass-effect";
import type { ViewStyle } from "react-native";

import { colors } from "@/theme";

export function getGlassFallbackStyle(): ViewStyle | undefined {
  return isLiquidGlassAvailable()
    ? undefined
    : { backgroundColor: colors.glassFallback };
}
