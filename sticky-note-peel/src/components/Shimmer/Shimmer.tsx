import React, { useId } from 'react';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

import { colors } from '@/theme';
import type { ShimmerProps } from './Shimmer.types';

export default function Shimmer({
  progress,
  width,
  height,
  band = 84,
  color = colors.white,
  opacity = 0.4,
  skew = 16,
}: ShimmerProps) {
  const gradientId = 'shimmer' + useId().replace(/[^a-zA-Z0-9]/g, '');

  const sweepStyle = useAnimatedStyle(() => {
    const p = progress.value;
    return {
      opacity: interpolate(p, [0, 0.12, 0.88, 1], [0, 1, 1, 0], 'clamp'),
      transform: [
        { translateX: -band + (width + band * 2) * p },
        { skewX: `-${skew}deg` },
      ],
    };
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        { position: 'absolute', top: -height, left: 0, width: band, height: height * 3 },
        sweepStyle,
      ]}
    >
      <Svg width={band} height={height * 3}>
        <Defs>
          <LinearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor={color} stopOpacity={0} />
            <Stop offset="0.5" stopColor={color} stopOpacity={opacity} />
            <Stop offset="1" stopColor={color} stopOpacity={0} />
          </LinearGradient>
        </Defs>
        <Rect width={band} height={height * 3} fill={`url(#${gradientId})`} />
      </Svg>
    </Animated.View>
  );
}
