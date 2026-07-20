import React, { memo } from 'react';
import { Text, View } from 'react-native';

import { fonts, palette } from '@/theme';

const PATTERN_CHARS = ['/', '\\', '|', '—'] as const;

export const PatternBlock = memo(function PatternBlock({ tick }: { tick: number }) {
  const char = PATTERN_CHARS[Math.floor(tick / 2) % PATTERN_CHARS.length];
  const wide = char === '—';
  const cols = wide ? 6 : 10;
  return (
    <View style={{ gap: wide ? 16 : 6 }}>
      {Array.from({ length: 6 }, (_, y) => (
        <Text
          key={y}
          style={{
            fontFamily: fonts.mono,
            fontSize: 21,
            fontWeight: '600',
            letterSpacing: wide ? 2 : 5,
            color: palette.cream,
          }}
        >
          {Array.from({ length: cols }, () => char).join(wide ? ' ' : '')}
        </Text>
      ))}
    </View>
  );
});
