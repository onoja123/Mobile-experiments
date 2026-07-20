import React, { memo } from 'react';
import { View } from 'react-native';

import { palette } from '@/theme';
import { createSeededRandom, randomInt } from '@/utils/seededRandom';

const COLUMN_COUNT = 15;

type CircuitBoardProps = {
  seed: number;
  width: number;
  height: number;
  density: number;
};

export const CircuitBoard = memo(function CircuitBoard({
  seed,
  width,
  height,
  density,
}: CircuitBoardProps) {
  const random = createSeededRandom(seed * 62233 + 8);
  const cell = width / COLUMN_COUNT;
  const rows = Math.floor(height / cell);
  const nodes: React.ReactNode[] = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < COLUMN_COUNT; x++) {
      const value = random();
      const px = x * cell + random() * 6;
      const py = y * cell + random() * 6;
      if (value < 0.055 * density) {
        nodes.push(
          <View
            key={`f${x}-${y}`}
            style={{
              position: 'absolute',
              left: px,
              top: py,
              width: 11,
              height: 11,
              backgroundColor: palette.ink,
            }}
          />,
        );
        if (random() < 0.4) {
          const length = cell * randomInt(random, 1, 3);
          nodes.push(
            <View
              key={`l${x}-${y}`}
              style={{
                position: 'absolute',
                left: px + 5,
                top: py + 11,
                width: 1.2,
                height: length,
                backgroundColor: palette.ink,
              }}
            />,
          );
        }
      } else if (value < 0.1 * density) {
        nodes.push(
          <View
            key={`o${x}-${y}`}
            style={{
              position: 'absolute',
              left: px,
              top: py,
              width: 11,
              height: 11,
              borderWidth: 1.4,
              borderColor: palette.ink,
            }}
          />,
        );
      } else if (value < 0.13 * density) {
        nodes.push(
          <View
            key={`b${x}-${y}`}
            style={{
              position: 'absolute',
              left: px,
              top: py,
              width: 17,
              height: 17,
              backgroundColor: palette.ink,
            }}
          />,
        );
      } else if (value < 0.2 * density) {
        nodes.push(
          <View
            key={`d${x}-${y}`}
            style={{
              position: 'absolute',
              left: px + 4,
              top: py + 4,
              width: 2,
              height: 2,
              backgroundColor: palette.ink,
            }}
          />,
        );
      } else if (value < 0.24 * density) {
        nodes.push(
          <View
            key={`v${x}-${y}`}
            style={{
              position: 'absolute',
              left: px + 5,
              top: py,
              width: 1.2,
              height: cell * 0.9,
              backgroundColor: palette.ink,
            }}
          />,
        );
      } else if (value < 0.27 * density) {
        nodes.push(
          <View
            key={`h${x}-${y}`}
            style={{
              position: 'absolute',
              left: px,
              top: py + 5,
              width: cell * 0.8,
              height: 1.2,
              backgroundColor: palette.ink,
              opacity: 0.8,
            }}
          />,
        );
      }
    }
  }
  return (
    <View pointerEvents="none" style={{ position: 'absolute', inset: 0 }}>
      {nodes}
    </View>
  );
});
