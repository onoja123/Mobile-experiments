import React from 'react';
import { Text as SkiaText } from '@shopify/react-native-skia';
import { useDerivedValue } from 'react-native-reanimated';
import { colors } from '@/theme';
import { seededRandom } from '@/utils/random';
import { DIGIT_COUNT } from '@/constants/balanceDigits';
import type { MorphDigitProps } from './AnimatedBalance.types';

export function MorphDigit({
  index,
  x,
  y,
  font,
  baseColor,
  time,
  morph,
  cycling,
  settle,
  digits,
}: MorphDigitProps) {
  const lockAt = (index + 1) / (DIGIT_COUNT + 1);

  const char = useDerivedValue(() => {
    const target = digits.value[index] ?? '0';
    if (cycling.value < 0.5 || settle.value >= lockAt) return target;
    const tick = Math.floor(time.value / (72 + index * 12));
    return String(Math.floor(seededRandom(tick * 12.9898 + index * 78.233) * 10));
  });

  const color = useDerivedValue(() => {
    if (cycling.value < 0.5 || settle.value >= lockAt) return baseColor;
    const tick = Math.floor(time.value / (110 + index * 9));
    const r = seededRandom(tick * 7.31 + index * 31.7 + 5.0);
    if (r < 0.08) return colors.accentPurple;
    if (r < 0.16) return colors.accentPink;
    if (r < 0.28) return colors.accentGrey;
    return baseColor;
  });

  const transform = useDerivedValue(() => {
    const m = morph.value;
    const t = time.value;
    return [
      { translateY: Math.sin(t / 92 + index * 1.9) * 6 * m },
      { translateX: Math.sin(t / 68 + index * 2.6) * 2.5 * m },
    ];
  });

  return (
    <SkiaText
      x={x}
      y={y}
      text={char}
      font={font}
      color={color}
      transform={transform}
    />
  );
}
