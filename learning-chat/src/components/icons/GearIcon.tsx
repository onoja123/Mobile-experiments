import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { colors } from "@/theme";

type GearIconProps = {
  size?: number;
  color?: string;
};

export function GearIcon({ size = 22, color = colors.gearIcon }: GearIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={3.2} stroke={color} strokeWidth={1.6} />
      <Path
        d="M12 2.8 L13.6 5.2 A7.2 7.2 0 0 1 16.6 6.4 L19.4 5.8 L20.9 8.4 L19 10.6 A7.4 7.4 0 0 1 19 13.4 L20.9 15.6 L19.4 18.2 L16.6 17.6 A7.2 7.2 0 0 1 13.6 18.8 L12 21.2 L10.4 18.8 A7.2 7.2 0 0 1 7.4 17.6 L4.6 18.2 L3.1 15.6 L5 13.4 A7.4 7.4 0 0 1 5 10.6 L3.1 8.4 L4.6 5.8 L7.4 6.4 A7.2 7.2 0 0 1 10.4 5.2 Z"
        stroke={color}
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
