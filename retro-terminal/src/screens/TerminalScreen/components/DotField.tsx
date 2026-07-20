import React, { memo } from 'react';
import { Text, View } from 'react-native';

import { BlockLetter } from '@/components/BlockLetter';
import { SevenSegmentRow } from '@/components/SevenSegmentDisplay';
import { randomCharFrom } from '@/helpers/randomCharFrom';
import { fonts, palette } from '@/theme';
import {
  createSeededRandom,
  randomItem,
  randomUppercaseLetters,
} from '@/utils/seededRandom';

import { ShadeBlock } from './ShadeBlock';

type DotFieldProps = {
  seed: number;
  variant: 0 | 1;
  width: number;
  height: number;
};

export const DotField = memo(function DotField({ seed, variant, width, height }: DotFieldProps) {
  const random = createSeededRandom(seed * 48271 + variant * 97);
  const rows = Math.floor((height - 60) / 19);
  const dotLines: React.ReactNode[] = [];
  for (let y = 0; y < rows; y++) {
    let line = '';
    for (let x = 0; x < 24; x++) {
      const value = random();
      line += value < 0.035 ? randomItem(random, ['0', 'i', '1']) : '.';
    }
    dotLines.push(
      <Text
        key={y}
        style={{
          fontFamily: fonts.mono,
          fontSize: 13,
          lineHeight: 19,
          letterSpacing: 3,
          color: palette.ink,
        }}
      >
        {line}
      </Text>,
    );
  }
  const columnLines: string[] = [];
  for (let y = 0; y < 14; y++) columnLines.push(randomUppercaseLetters(random, 11));
  const displayRandom = createSeededRandom(seed * 7 + variant);
  return (
    <View style={{ paddingHorizontal: 14, flex: 1 }}>
      {variant === 0 && <ShadeBlock seed={seed} rows={2} cols={16} />}
      <View>{dotLines}</View>
      <View style={{ position: 'absolute', right: 12, top: variant === 0 ? 24 : 40 }}>
        {columnLines.map((line, i) => (
          <Text
            key={i}
            style={{
              fontFamily: fonts.mono,
              fontSize: 15,
              lineHeight: 18.5,
              letterSpacing: 1,
              color: palette.ink,
              fontWeight: '600',
            }}
          >
            {line}
          </Text>
        ))}
      </View>
      {variant === 1 && (
        <View style={{ position: 'absolute', left: 14, bottom: 40 }}>
          <ShadeBlock seed={seed + 3} rows={20} cols={16} />
          <View style={{ position: 'absolute', left: 8, top: 24 }}>
            <BlockLetter
              char={randomItem(displayRandom, ['T', 'B', 'E', 'L'])}
              width={width * 0.24}
              height={width * 0.42}
              thickness={width * 0.065}
            />
          </View>
        </View>
      )}
      <View
        style={{ position: 'absolute', right: 16, bottom: 30, alignItems: 'flex-end', gap: 10 }}
      >
        <SevenSegmentRow
          text={`${randomCharFrom(displayRandom, '0011')}${randomCharFrom(displayRandom, '013456')}`}
          size={64}
        />
        <SevenSegmentRow
          text={`${randomCharFrom(displayRandom, '/\\|-')}${randomCharFrom(displayRandom, '034589')}`}
          size={64}
        />
      </View>
    </View>
  );
});
