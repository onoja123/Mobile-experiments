import React from 'react';
import { View } from 'react-native';

import { palette } from '@/theme';

import { SevenSegmentCharacter } from './SevenSegmentCharacter';
import { SevenSegmentRowProps } from './SevenSegmentDisplay.types';

export function SevenSegmentRow({
  text,
  size,
  gap = 0.28,
  color = palette.ink,
}: SevenSegmentRowProps) {
  return (
    <View style={{ flexDirection: 'row', gap: size * gap }}>
      {text.split('').map((char, i) =>
        char === ' ' ? (
          <View key={i} style={{ width: size * 0.64 }} />
        ) : (
          <SevenSegmentCharacter key={i} char={char} size={size} color={color} />
        ),
      )}
    </View>
  );
}
