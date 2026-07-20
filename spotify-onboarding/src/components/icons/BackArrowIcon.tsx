import Svg, { Path } from "react-native-svg";

import { colors } from "@/theme";

type BackArrowIconProps = {
  size?: number;
  color?: string;
};

export function BackArrowIcon({
  size = 22,
  color = colors.ink,
}: BackArrowIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 12H5m0 0l6-6m-6 6l6 6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
