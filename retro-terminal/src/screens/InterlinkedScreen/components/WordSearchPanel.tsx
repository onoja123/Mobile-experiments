import React, { memo } from 'react';
import { Text, View } from 'react-native';

import { fonts, palette } from '@/theme';
import { createSeededRandom, randomInt, randomLowercaseLetters } from '@/utils/seededRandom';

const SEARCH_WORD = 'SEARCH';
const PHASE_COUNT = 10;
const VISIBLE_FROM_PHASE = 2;
const SOLID_PHASE = 5;
const GRID_ROW_COUNT = 9;

export const WordSearchPanel = memo(function WordSearchPanel({
  tick,
  width,
}: {
  tick: number;
  width: number;
}) {
  const phase = tick % PHASE_COUNT;
  if (phase < VISIBLE_FROM_PHASE) return null;
  const size = width - 130;
  const panelStyle = {
    alignSelf: 'center' as const,
    marginTop: 26,
    width: size + 60,
    height: size,
    backgroundColor: palette.ink,
    borderRadius: 16,
    padding: 18,
    overflow: 'hidden' as const,
  };
  if (phase === SOLID_PHASE) return <View style={panelStyle} />;

  if (phase < SOLID_PHASE) {
    const start = (tick * 3) % SEARCH_WORD.length;
    const typed = (SEARCH_WORD + SEARCH_WORD).slice(start, start + 5);
    const dottedRows = Array.from({ length: GRID_ROW_COUNT }, (_, y) => (
      <Text
        key={y}
        style={{
          fontFamily: fonts.mono,
          fontSize: 11,
          lineHeight: 19,
          letterSpacing: 9,
          color: palette.olive,
          textAlign: 'center',
        }}
      >
        {'.'.repeat(12)}
      </Text>
    ));
    return (
      <View style={panelStyle}>
        {dottedRows.slice(0, 4)}
        <Text
          style={{
            fontFamily: fonts.mono,
            fontSize: 19,
            fontWeight: '700',
            letterSpacing: 6,
            color: palette.cream,
            textAlign: 'center',
            lineHeight: 19,
          }}
        >
          {typed}
        </Text>
        {dottedRows.slice(4)}
      </View>
    );
  }

  const random = createSeededRandom(tick * 4547 + 1);
  const hiddenWords: Record<number, { col: number; word: string }> = {
    3: { col: randomInt(random, 0, 4), word: 'CELLS' },
    7: { col: randomInt(random, 0, 3), word: 'LINKED' },
    8: { col: randomInt(random, 0, 4), word: 'INTER' },
  };
  return (
    <View style={panelStyle}>
      {Array.from({ length: GRID_ROW_COUNT }, (_, y) => {
        let row = randomLowercaseLetters(random, 9);
        const hidden = hiddenWords[y];
        if (hidden)
          row = row.slice(0, hidden.col) + hidden.word + row.slice(hidden.col + hidden.word.length);
        return (
          <Text
            key={y}
            style={{
              fontFamily: fonts.mono,
              fontSize: 17,
              lineHeight: 19.5,
              letterSpacing: 7,
              fontWeight: '600',
              color: palette.cream,
              textAlign: 'center',
            }}
          >
            {row.slice(0, 9)}
          </Text>
        );
      })}
    </View>
  );
});
