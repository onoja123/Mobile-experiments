import React from 'react';
import { View } from 'react-native';

import { palette } from '@/theme';

import { BlockLetterProps } from './BlockLetter.types';
import { getBlockLetterBars } from './blockLetterBars';

export function BlockLetter({
  char,
  width,
  height,
  thickness,
  color = palette.ink,
}: BlockLetterProps) {
  return (
    <View style={{ width, height }}>
      {getBlockLetterBars(char, width, height, thickness).map(([left, top, barWidth, barHeight], i) => (
        <View
          key={i}
          style={{
            position: 'absolute',
            left,
            top,
            width: barWidth,
            height: barHeight,
            backgroundColor: color,
          }}
        />
      ))}
    </View>
  );
}
