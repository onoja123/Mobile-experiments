import React, { memo } from 'react';
import { View } from 'react-native';

import { palette } from '@/theme';
import { createSeededRandom } from '@/utils/seededRandom';

type ShadeBlockProps = { seed: number; rows: number; cols: number };

export const ShadeBlock = memo(function ShadeBlock({ seed, rows, cols }: ShadeBlockProps) {
  const random = createSeededRandom(seed * 613 + 1);
  return (
    <View>
      {Array.from({ length: rows }, (_, y) => (
        <View key={y} style={{ flexDirection: 'row' }}>
          {Array.from({ length: cols }, (_, x) => (
            <View
              key={x}
              style={{
                width: 9,
                height: 9,
                margin: 1,
                backgroundColor: random() < 0.85 ? palette.inkSoft : 'transparent',
              }}
            />
          ))}
        </View>
      ))}
    </View>
  );
});
