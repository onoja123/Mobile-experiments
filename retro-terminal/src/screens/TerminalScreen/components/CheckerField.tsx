import React, { memo } from 'react';
import { Text, View } from 'react-native';

import { PixelCellKind } from '@/enums';
import { fonts, palette } from '@/theme';
import { createSeededRandom, randomDigits, randomInt, randomItem } from '@/utils/seededRandom';

import { PIXEL_CELL_SIZE } from '../constants';
import { PixelCell } from './PixelCell';

const VERTICAL_LABEL_LETTERS = ['U', 'L', 'R', 'H', 'S', 'M', 'N', 'Q', 'Z'];

type CheckerFieldProps = {
  seed: number;
  hole: boolean;
  width: number;
  height: number;
};

export const CheckerField = memo(function CheckerField({
  seed,
  hole,
  width,
  height,
}: CheckerFieldProps) {
  const random = createSeededRandom(seed * 104729 + (hole ? 31 : 7));
  const cols = Math.floor((width - 24) / PIXEL_CELL_SIZE);
  const rows = Math.floor((height - 40) / PIXEL_CELL_SIZE);
  const grid: React.ReactNode[] = [];
  for (let y = 0; y < rows; y++) {
    const cells: React.ReactNode[] = [];
    for (let x = 0; x < cols; x++) {
      const dx = (x - cols / 2 + 0.5) / (cols / 2.6);
      const dy = (y - rows / 2 + 0.5) / (rows / 2.4);
      const inHole = hole && dx * dx + dy * dy < 0.62;
      const value = random();
      let node: React.ReactNode = (
        <View style={{ width: PIXEL_CELL_SIZE, height: PIXEL_CELL_SIZE }} />
      );
      if (!inHole) {
        if (value < 0.42) node = <PixelCell kind={PixelCellKind.Filled} />;
        else if (value < 0.72) node = <PixelCell kind={PixelCellKind.Outlined} />;
        else if (value < 0.85) node = <PixelCell kind={PixelCellKind.Dot} />;
      }
      cells.push(<View key={x}>{node}</View>);
    }
    grid.push(
      <View key={y} style={{ flexDirection: 'row' }}>
        {cells}
      </View>,
    );
  }
  const labelRandom = createSeededRandom(seed * 31 + 5);
  return (
    <View style={{ alignSelf: 'center' }}>
      {grid}
      {hole && (
        <View
          style={{
            position: 'absolute',
            inset: 0,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: 2,
          }}
        >
          {Array.from({ length: 7 }, (_, i) => (
            <View
              key={i}
              style={{ width: 19, height: 180, alignItems: 'center', justifyContent: 'center' }}
            >
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  fontWeight: '600',
                  color: palette.ink,
                  width: 180,
                  textAlign: 'center',
                  transform: [{ rotate: '90deg' }],
                }}
              >
                {randomItem(labelRandom, VERTICAL_LABEL_LETTERS) +
                  '.' +
                  randomDigits(labelRandom, randomInt(labelRandom, 4, 6)) +
                  '.'}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
});
