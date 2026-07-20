import React, { memo } from 'react';
import { View } from 'react-native';

import { palette } from '@/theme';

const GRID_SIZE = 8;
const CELL_SPACING = 21;
const BOARD_SIZE = 168;

export const HalftoneDots = memo(function HalftoneDots() {
  const cells: React.ReactNode[] = [];
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      cells.push(
        <View
          key={`${x}-${y}`}
          style={{
            position: 'absolute',
            left: x * CELL_SPACING,
            top: y * CELL_SPACING,
            width: 17,
            height: 17,
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 3,
            padding: 2,
          }}
        >
          {Array.from({ length: 9 }, (_, i) => (
            <View key={i} style={{ width: 1.6, height: 1.6, backgroundColor: palette.creamDim }} />
          ))}
        </View>,
      );
    }
  }
  return <View style={{ width: BOARD_SIZE, height: BOARD_SIZE }}>{cells}</View>;
});
