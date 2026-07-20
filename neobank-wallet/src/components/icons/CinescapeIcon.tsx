import Svg, { Path } from "react-native-svg";

import { colors } from "@/theme";
import type { IconProps } from "@/types";

export function CinescapeIcon({ size = 15, color = colors.white }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 5.5 8.5 12l6.5 6.5"
        stroke={color}
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
