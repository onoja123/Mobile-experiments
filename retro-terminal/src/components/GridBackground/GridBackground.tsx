import React, { memo } from 'react';
import { View } from 'react-native';

import { palette } from '@/theme';

import { GridBackgroundProps } from './GridBackground.types';

export const GridBackground = memo(function GridBackground({
  width,
  height,
  step = 26,
  color = palette.gridLineSubtle,
}: GridBackgroundProps) {
  const cols = Math.ceil(width / step);
  const rows = Math.ceil(height / step);
  return (
    <View pointerEvents="none" style={{ position: 'absolute', inset: 0 }}>
      {Array.from({ length: cols }, (_, i) => (
        <View
          key={`v${i}`}
          style={{
            position: 'absolute',
            left: i * step,
            top: 0,
            width: 1,
            height,
            backgroundColor: color,
          }}
        />
      ))}
      {Array.from({ length: rows }, (_, i) => (
        <View
          key={`h${i}`}
          style={{
            position: 'absolute',
            top: i * step,
            left: 0,
            width,
            height: 1,
            backgroundColor: color,
          }}
        />
      ))}
    </View>
  );
});
