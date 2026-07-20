import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Circle, Defs, Pattern, Rect } from "react-native-svg";

import { colors } from "@/theme";

export function DotGrid() {
  return (
    <Svg style={StyleSheet.absoluteFill} pointerEvents="none">
      <Defs>
        <Pattern
          id="dots"
          patternUnits="userSpaceOnUse"
          width={22}
          height={22}
        >
          <Circle cx={2} cy={2} r={1.1} fill={colors.dot} />
        </Pattern>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#dots)" />
    </Svg>
  );
}
