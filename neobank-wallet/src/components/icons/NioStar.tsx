import Svg, { Path } from "react-native-svg";

import { colors } from "@/theme";
import type { IconProps } from "@/types";

export function NioStar({ size = 24, color = colors.white }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 1.5C12.92 7.42 16.58 11.08 22.5 12C16.58 12.92 12.92 16.58 12 22.5C11.08 16.58 7.42 12.92 1.5 12C7.42 11.08 11.08 7.42 12 1.5Z"
        fill={color}
      />
    </Svg>
  );
}
