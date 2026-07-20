import React, { memo } from 'react';
import { Text, View } from 'react-native';

import { fonts, palette } from '@/theme';
import { createSeededRandom, randomInt } from '@/utils/seededRandom';

import { HalftoneDots } from './HalftoneDots';

const CROSS_LETTERS = ['K', 'W', 'U', 'F', 'J', 'G', 'S', 'O', 'Y', 'E'] as const;
const CELL_SPACING = 21;
const BOARD_SIZE = 168;

export const LetterCross = memo(function LetterCross({ tick }: { tick: number }) {
  const random = createSeededRandom(tick * 269 + 3);
  const letter = CROSS_LETTERS[tick % CROSS_LETTERS.length];
  const col = randomInt(random, 1, 6);
  const row = randomInt(random, 1, 6);
  const cells: React.ReactNode[] = [];
  for (let i = 0; i < 8; i++) {
    cells.push(
      <Text key={`c${i}`} style={[crossLetterText, { left: col * CELL_SPACING - 2, top: i * CELL_SPACING - 3 }]}>
        {letter}
      </Text>,
      <Text
        key={`r${i}`}
        style={[crossLetterText, { left: i * CELL_SPACING - 2, top: row * CELL_SPACING - 3, fontSize: 22 }]}
      >
        {letter}
      </Text>,
    );
  }
  return (
    <View style={{ width: BOARD_SIZE, height: BOARD_SIZE }}>
      <HalftoneDots />
      <View style={{ position: 'absolute', inset: 0 }}>{cells}</View>
    </View>
  );
});

const crossLetterText = {
  position: 'absolute' as const,
  fontFamily: fonts.mono,
  fontSize: 19,
  fontWeight: '600' as const,
  color: palette.cream,
};
