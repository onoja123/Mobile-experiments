import React, { memo } from 'react';
import { View } from 'react-native';

import { PixelCellKind } from '@/enums';
import { createSeededRandom } from '@/utils/seededRandom';

import { PIXEL_CELL_SIZE } from '../constants';
import { PixelCell } from './PixelCell';

type NoiseBlobProps = { seed: number; big: boolean };

export const NoiseBlob = memo(function NoiseBlob({ seed, big }: NoiseBlobProps) {
  const random = createSeededRandom(seed * 7919 + (big ? 17 : 3));
  const cols = big ? 17 : 9;
  const rows = big ? 26 : 12;
  const grid: React.ReactNode[] = [];
  for (let y = 0; y < rows; y++) {
    const cells: React.ReactNode[] = [];
    for (let x = 0; x < cols; x++) {
      const dx = (x - cols / 2 + 0.5) / (cols / 2);
      const dy = (y - rows / 2 + 0.5) / (rows / 2);
      const distance = Math.hypot(dx, dy);
      const fillChance = Math.max(0, 1 - distance * distance);
      const value = random();
      let node: React.ReactNode = (
        <View style={{ width: PIXEL_CELL_SIZE, height: PIXEL_CELL_SIZE }} />
      );
      if (value < fillChance * 0.55) node = <PixelCell kind={PixelCellKind.Filled} />;
      else if (value < fillChance * 0.8) node = <PixelCell kind={PixelCellKind.Outlined} />;
      else if (value < fillChance * 0.95) node = <PixelCell kind={PixelCellKind.Dot} />;
      cells.push(<View key={x}>{node}</View>);
    }
    grid.push(
      <View key={y} style={{ flexDirection: 'row' }}>
        {cells}
      </View>,
    );
  }
  return <View style={{ alignSelf: 'center', marginTop: big ? 30 : 110 }}>{grid}</View>;
});
