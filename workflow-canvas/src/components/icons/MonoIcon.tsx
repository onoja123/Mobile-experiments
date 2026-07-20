import React from "react";
import Svg, { Path } from "react-native-svg";

import { colors } from "@/theme";

import type { IconProps } from "./icons.types";

export function MonoIcon({
  d,
  size = 24,
  color = colors.ink,
}: IconProps & { d: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d={d} fill={color} />
    </Svg>
  );
}
