import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { StarRatingProps } from "./StarRating.types";

const MAX_STARS = 5;
const STAR_PATH =
  "M10 1.6 L12.4 6.9 L18.2 7.5 L13.9 11.4 L15.1 17.1 L10 14.2 L4.9 17.1 L6.1 11.4 L1.8 7.5 L7.6 6.9 Z";

export function StarRating({ count, filledColor, emptyColor, size = 17 }: StarRatingProps) {
  return (
    <View className="flex-row" style={{ gap: 5 }}>
      {Array.from({ length: MAX_STARS }).map((_, index) => (
        <Svg key={index} width={size} height={size} viewBox="0 0 20 19">
          {index < count ? (
            <Path d={STAR_PATH} fill={filledColor} />
          ) : (
            <Path d={STAR_PATH} fill="none" stroke={emptyColor} strokeWidth={1.4} />
          )}
        </Svg>
      ))}
    </View>
  );
}
