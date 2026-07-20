import React, { useMemo } from 'react';
import {
  Canvas,
  LinearGradient,
  RoundedRect,
  Text as SkiaText,
  matchFont,
  vec,
} from '@shopify/react-native-skia';
import { skiaFontFamily } from '@/theme';
import type { GradientPair } from '@/types/gradient.types';

type CompanyLogoProps = {
  size: number;
  gradient: GradientPair;
  monogram: string;
};

export function CompanyLogo({ size, gradient, monogram }: CompanyLogoProps) {
  const fontSize = size * 0.42;
  const radius = size * 0.3;

  const font = useMemo(
    () =>
      matchFont({
        fontFamily: skiaFontFamily,
        fontSize,
        fontStyle: 'normal',
        fontWeight: '700',
      }),
    [fontSize],
  );

  const textX = (size - font.measureText(monogram).width) / 2;
  const textY = size / 2 + fontSize * 0.36;

  return (
    <Canvas style={{ width: size, height: size }}>
      <RoundedRect x={0} y={0} width={size} height={size} r={radius}>
        <LinearGradient start={vec(0, 0)} end={vec(size, size)} colors={[...gradient]} />
      </RoundedRect>
      <RoundedRect
        x={size * 0.06}
        y={size * 0.06}
        width={size * 0.88}
        height={size * 0.88}
        r={radius * 0.82}
        style="stroke"
        strokeWidth={1}
        color="rgba(255,255,255,0.35)"
      />
      <SkiaText x={textX} y={textY} text={monogram} font={font} color="#FFFFFF" />
    </Canvas>
  );
}
