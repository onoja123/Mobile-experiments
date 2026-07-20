import React from "react";
import Svg, { Circle, Path, Polyline } from "react-native-svg";

import { CardVariant } from "@/enums";
import { cardPatternDot, cardPatternStrokes } from "@/theme";

import type { CreditCardPatternProps } from "./CreditCard.types";

export default function CreditCardPattern({
  variant,
  width: w,
  height: h,
}: CreditCardPatternProps) {
  const strokes = cardPatternStrokes[variant];

  if (variant === CardVariant.Purple) {
    return (
      <Svg
        width={w}
        height={h}
        style={{ position: "absolute" }}
        pointerEvents="none"
      >
        <Path
          d={`M${w * 0.05},${h * 0.9} L${w * 0.5},${h * 0.18} L${w * 0.95},${h * 0.9}`}
          stroke={strokes[0]}
          strokeWidth={1}
          fill="none"
        />
        <Path
          d={`M${w * 0.18},${h * 1.05} L${w * 0.5},${h * 0.52} L${w * 0.82},${h * 1.05}`}
          stroke={strokes[1]}
          strokeWidth={1}
          fill="none"
        />
        <Path
          d={`M${w * 0.3},${h * 0.05} L${w * 0.72},${h * 0.62}`}
          stroke={strokes[2]}
          strokeWidth={1}
        />
      </Svg>
    );
  }

  if (variant === CardVariant.White) {
    return (
      <Svg
        width={w}
        height={h}
        style={{ position: "absolute" }}
        pointerEvents="none"
      >
        <Circle
          cx={w * 0.38}
          cy={h * 0.5}
          r={h * 0.62}
          stroke={strokes[0]}
          strokeWidth={1}
          fill="none"
        />
        <Circle
          cx={w * 0.6}
          cy={h * 0.42}
          r={h * 0.4}
          stroke={strokes[1]}
          strokeWidth={1}
          fill="none"
        />
      </Svg>
    );
  }

  return (
    <Svg
      width={w}
      height={h}
      style={{ position: "absolute" }}
      pointerEvents="none"
    >
      <Polyline
        points={`${w * 0.12},0 ${w * 0.3},${h * 0.28} ${w * 0.24},${h * 0.62} ${w * 0.46},${h}`}
        stroke={strokes[0]}
        strokeWidth={1}
        fill="none"
      />
      <Polyline
        points={`${w * 0.55},0 ${w * 0.5},${h * 0.34} ${w * 0.72},${h * 0.55} ${w * 0.66},${h}`}
        stroke={strokes[1]}
        strokeWidth={1}
        fill="none"
      />
      <Polyline
        points={`0,${h * 0.45} ${w * 0.3},${h * 0.28} ${w * 0.5},${h * 0.34} ${w * 0.72},${h * 0.55} ${w},${h * 0.48}`}
        stroke={strokes[2]}
        strokeWidth={1}
        fill="none"
      />
      <Circle cx={w * 0.3} cy={h * 0.28} r={2.5} fill={cardPatternDot} />
      <Circle cx={w * 0.72} cy={h * 0.55} r={2.5} fill={cardPatternDot} />
    </Svg>
  );
}
