import Svg, { Circle, Path } from "react-native-svg";

import { colors } from "@/theme";
import type { IconProps } from "@/types";

export function PersonIcon({ size = 18, color = colors.ink }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={8.3} r={3.4} stroke={color} strokeWidth={1.6} />
      <Path
        d="M5.2 19.6c.9-3.1 3.6-4.8 6.8-4.8s5.9 1.7 6.8 4.8"
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    </Svg>
  );
}
