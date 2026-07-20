import React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "@/theme";

type SquiggleFlourishProps = {
  width?: number;
  height?: number;
};

export function SquiggleFlourish({ width = 220, height = 70 }: SquiggleFlourishProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 220 70" fill="none">
      <Path
        d="M-8 52 C 34 6, 76 74, 118 34 C 138 15, 158 26, 149 40 C 141 52, 122 42, 138 26 C 156 8, 196 18, 226 44"
        stroke={colors.squiggleStroke}
        strokeWidth={1.4}
      />
    </Svg>
  );
}
