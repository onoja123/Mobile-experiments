import React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "@/theme";

type HeartPulseIllustrationProps = {
  size?: number;
};

export function HeartPulseIllustration({ size = 116 }: HeartPulseIllustrationProps) {
  return (
    <Svg width={size} height={size * 0.92} viewBox="0 0 100 92" fill="none">
      <Path
        d="M50 86 C 22 62, 5 44.5, 5 27.5 C 5 13, 16.5 4.5, 28.5 4.5 C 38 4.5, 46 10.5, 50 18.5 C 54 10.5, 62 4.5, 71.5 4.5 C 83.5 4.5, 95 13, 95 27.5 C 95 44.5, 78 62, 50 86 Z"
        fill={colors.heartFill}
        opacity={0.85}
      />
      <Path
        d="M8 44 H 33 L 39 32 L 47 56 L 55 36 L 60 44 H 92"
        stroke={colors.pulseStroke}
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
