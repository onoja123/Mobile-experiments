import React from 'react';
import { Text, View } from 'react-native';

import { GridBackground } from '@/components/GridBackground';
import { fonts, palette } from '@/theme';
import { SceneScreenProps } from '@/types';
import {
  createSeededRandom,
  randomDigits,
  randomInt,
  randomUppercaseLetters,
} from '@/utils/seededRandom';

import { CipherRows } from './components/CipherRows';
import { GalaxyField } from './components/GalaxyField';
import { LetterCross } from './components/LetterCross';
import { PatternBlock } from './components/PatternBlock';
import { makeDottedCipherRow } from './makeDottedCipherRow';

const GALAXY_MIN_HEIGHT = 260;
const GALAXY_TOP_CONTENT_HEIGHT = 545;

export function EnvironScreen({ tick, width, height }: SceneScreenProps) {
  const random = createSeededRandom(tick * 15485863 + 6);
  const fullRowCount = randomInt(random, 0, 3);
  const dottedRowCount = 4 - Math.min(fullRowCount, 2);
  const fullRows = Array.from({ length: fullRowCount }, () =>
    randomUppercaseLetters(random, 18),
  );
  const dottedRows = Array.from({ length: dottedRowCount }, () => makeDottedCipherRow(random));
  const serialLine = `${randomDigits(random, 8)} | ${randomDigits(random, 8)}`;
  return (
    <View style={{ width, height, backgroundColor: palette.void }}>
      <GridBackground width={width} height={height} step={28} color={palette.gridLineOnVoid} />
      <Text
        style={{
          fontFamily: fonts.mono,
          fontSize: 23,
          fontWeight: '700',
          letterSpacing: 2,
          color: palette.cream,
          paddingHorizontal: 16,
          paddingTop: 10,
        }}
      >
        ENVIRON CTR | DR-5 |
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          marginTop: 14,
        }}
      >
        <PatternBlock tick={tick} />
        <LetterCross tick={tick} />
      </View>
      <CipherRows fullRows={fullRows} dottedRows={dottedRows} />
      <Text
        style={{
          fontFamily: fonts.mono,
          fontSize: 25,
          fontWeight: '700',
          letterSpacing: 1,
          color: palette.cream,
          paddingHorizontal: 16,
          marginTop: 8,
        }}
      >
        {serialLine}
      </Text>
      <View style={{ marginTop: 14 }}>
        <GalaxyField
          tick={tick}
          width={width}
          height={Math.max(GALAXY_MIN_HEIGHT, height - GALAXY_TOP_CONTENT_HEIGHT)}
        />
      </View>
    </View>
  );
}
