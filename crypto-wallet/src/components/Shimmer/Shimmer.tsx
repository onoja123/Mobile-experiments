import React from 'react';
import {
  Canvas,
  LinearGradient,
  RoundedRect,
  useClock,
  vec,
} from '@shopify/react-native-skia';
import { useDerivedValue } from 'react-native-reanimated';
import { colors } from '@/theme';
import type { ShimmerProps } from './Shimmer.types';

const SWEEP_MS = 1300;

export function Shimmer({ width, height, radius = 8 }: ShimmerProps) {
  const clock = useClock();

  const start = useDerivedValue(() => {
    const t = (clock.value % SWEEP_MS) / SWEEP_MS;
    return vec(-width + t * width * 2.4, 0);
  });
  const end = useDerivedValue(() => vec(start.value.x + width, height * 0.6));

  return (
    <Canvas style={{ width, height }}>
      <RoundedRect x={0} y={0} width={width} height={height} r={radius}>
        <LinearGradient
          start={start}
          end={end}
          colors={[colors.shimmerBase, colors.shimmerHighlight, colors.shimmerBase]}
        />
      </RoundedRect>
    </Canvas>
  );
}
