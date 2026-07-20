import Svg, { Path, Rect } from "react-native-svg";

import { colors } from "@/theme";
import type { IconProps } from "@/types";

export function ScanIcon({ size = 18, color = colors.ink }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 9V6.5A2.5 2.5 0 0 1 6.5 4H9M15 4h2.5A2.5 2.5 0 0 1 20 6.5V9M20 15v2.5a2.5 2.5 0 0 1-2.5 2.5H15M9 20H6.5A2.5 2.5 0 0 1 4 17.5V15"
        stroke={color}
        strokeWidth={1.7}
        strokeLinecap="round"
      />
      <Rect x={9.2} y={9.2} width={5.6} height={5.6} rx={1.6} stroke={color} strokeWidth={1.7} />
    </Svg>
  );
}
