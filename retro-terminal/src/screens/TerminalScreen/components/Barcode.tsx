import React, { memo } from 'react';
import { View } from 'react-native';

import { palette } from '@/theme';
import { createSeededRandom, randomItem } from '@/utils/seededRandom';

type BarcodeProps = { seed: number; width: number; height: number };

export const Barcode = memo(function Barcode({ seed, width, height }: BarcodeProps) {
  const random = createSeededRandom(seed * 193 + 11);
  const bars: React.ReactNode[] = [];
  let x = 0;
  while (x < width) {
    const barWidth = randomItem(random, [2, 2, 3, 5, 8]);
    const barHeight = height * randomItem(random, [0.4, 0.6, 0.8, 1]);
    bars.push(
      random() < 0.72 ? (
        <View
          key={x}
          style={{
            width: barWidth,
            height: barHeight,
            backgroundColor: palette.ink,
            marginTop: random() < 0.5 ? 0 : height - barHeight,
          }}
        />
      ) : (
        <View key={x} style={{ width: barWidth, height }} />
      ),
    );
    x += barWidth + 1;
  }
  return (
    <View style={{ flexDirection: 'row', gap: 1, height, overflow: 'hidden' }}>{bars}</View>
  );
});
