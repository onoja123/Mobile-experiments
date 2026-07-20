import React from "react";
import Svg, { Defs, Path, Pattern, Rect } from "react-native-svg";

import { colors } from "@/theme";

export function HatchPattern() {
  return (
    <Svg width="100%" height="100%" style={{ borderRadius: 20 }}>
      <Defs>
        <Pattern id="hatch" patternUnits="userSpaceOnUse" width={9} height={9}>
          <Path
            d="M-2.25 2.25 L2.25 -2.25 M-2.25 11.25 L11.25 -2.25 M6.75 11.25 L11.25 6.75"
            stroke={colors.hatch}
            strokeWidth={3.2}
          />
        </Pattern>
      </Defs>
      <Rect width="100%" height="100%" rx={20} fill="url(#hatch)" />
    </Svg>
  );
}
