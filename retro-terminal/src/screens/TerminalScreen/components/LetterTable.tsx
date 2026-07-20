import React, { memo } from 'react';
import { Text, View } from 'react-native';

import { fonts, palette } from '@/theme';
import {
  createSeededRandom,
  randomDigits,
  randomInt,
  randomUppercaseLetters,
} from '@/utils/seededRandom';

type LetterTableProps = { seed: number; width: number; height: number };

export const LetterTable = memo(function LetterTable({ seed, width, height }: LetterTableProps) {
  const random = createSeededRandom(seed * 2654435761 + 13);
  const rows = Math.floor((height - 110) / 19);
  const highlightedCells = [
    {
      row: randomInt(random, 10, 14),
      col: randomInt(random, 12, 15),
      char: randomUppercaseLetters(random, 1),
    },
    {
      row: randomInt(random, 16, 20),
      col: randomInt(random, 10, 13),
      char: randomUppercaseLetters(random, 1),
    },
  ];
  const lines: string[] = [];
  for (let y = 0; y < rows; y++) {
    let line = '';
    for (let x = 0; x < 17; x++) {
      const value = random();
      line +=
        value < 0.62
          ? randomUppercaseLetters(random, 1)
          : value < 0.9
            ? '.'
            : randomDigits(random, 1);
    }
    lines.push(line);
  }
  const diagonalLength = height * 0.75;
  return (
    <View style={{ paddingHorizontal: 14 }}>
      {lines.map((line, y) => (
        <View key={y} style={{ flexDirection: 'row' }}>
          {line.split('').map((char, x) => {
            const highlighted = highlightedCells.some((cell) => cell.row === y && cell.col === x);
            return (
              <Text
                key={x}
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 15,
                  lineHeight: 19,
                  width: (width - 28) / 17,
                  textAlign: 'center',
                  color: highlighted ? palette.paper : palette.ink,
                  backgroundColor: highlighted ? palette.ink : 'transparent',
                  fontWeight: '600',
                }}
              >
                {highlighted ? randomUppercaseLetters(createSeededRandom(seed + x + y), 1) : char}
              </Text>
            );
          })}
        </View>
      ))}
      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          left: width * 0.28,
          top: -height * 0.05,
          width: 1,
          height: diagonalLength,
          backgroundColor: palette.ink,
          transform: [{ rotate: '-22deg' }],
        }}
      />
      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          right: width * 0.28,
          top: -height * 0.05,
          width: 1,
          height: diagonalLength,
          backgroundColor: palette.ink,
          transform: [{ rotate: '22deg' }],
        }}
      />
    </View>
  );
});
