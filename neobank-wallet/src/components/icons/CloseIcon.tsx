import Svg, { Path } from "react-native-svg";

import { colors } from "@/theme";
import type { IconProps } from "@/types";

export function CloseIcon({ size = 16, color = colors.ink }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M6 6L18 18M18 6L6 18" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}
