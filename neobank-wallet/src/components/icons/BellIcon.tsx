import Svg, { Path } from "react-native-svg";

import { colors } from "@/theme";
import type { IconProps } from "@/types";

export function BellIcon({ size = 18, color = colors.ink }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 3.5c-3.15 0-5.25 2.4-5.25 5.4 0 4.15-1.55 5.45-2.2 6.25-.22.28 0 .85.42.85h14.06c.42 0 .64-.57.42-.85-.65-.8-2.2-2.1-2.2-6.25 0-3-2.1-5.4-5.25-5.4Z"
        stroke={color}
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <Path d="M10.1 19.2a2 2 0 0 0 3.8 0" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
    </Svg>
  );
}
