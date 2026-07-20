import Svg, { Circle, Path } from "react-native-svg";

import { colors } from "@/theme";

type LocationIconProps = {
  size: number;
  color?: string;
  discColor?: string;
};

export function LocationIcon({
  size,
  color = colors.white,
  discColor,
}: LocationIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {discColor ? <Circle cx={12} cy={12} r={12} fill={discColor} /> : null}
      <Path
        d="M12 4.8c-2.98 0-5.4 2.42-5.4 5.4 0 4.05 5.4 10 5.4 10s5.4-5.95 5.4-10c0-2.98-2.42-5.4-5.4-5.4zm0 7.33a1.93 1.93 0 110-3.86 1.93 1.93 0 010 3.86z"
        fill={color}
        scale={discColor ? 0.8 : 1}
        translateX={discColor ? 2.4 : 0}
        translateY={discColor ? 2.4 : 0}
      />
    </Svg>
  );
}
