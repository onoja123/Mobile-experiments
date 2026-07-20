import React, { useMemo } from 'react';
import {
  Canvas,
  Circle,
  LinearGradient,
  Text as SkiaText,
  matchFont,
  vec,
} from '@shopify/react-native-skia';
import { skiaFontFamily } from '@/theme';
import type { GradientAvatarProps } from './GradientAvatar.types';

export function GradientAvatar({ size, gradient, label }: GradientAvatarProps) {
  const initial = label.charAt(0).toUpperCase();
  const fontSize = size * 0.38;

  const font = useMemo(
    () =>
      matchFont({
        fontFamily: skiaFontFamily,
        fontSize,
        fontStyle: 'normal',
        fontWeight: '600',
      }),
    [fontSize],
  );

  const textX = (size - font.measureText(initial).width) / 2;
  const textY = size / 2 + fontSize * 0.36;

  return (
    <Canvas style={{ width: size, height: size }}>
      <Circle c={vec(size / 2, size / 2)} r={size / 2}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(size, size)}
          colors={[...gradient]}
        />
      </Circle>
      <SkiaText x={textX} y={textY} text={initial} font={font} color="#FFFFFF" />
    </Canvas>
  );
}
