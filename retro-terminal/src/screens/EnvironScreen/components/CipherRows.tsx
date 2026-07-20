import React from 'react';
import { Text, View } from 'react-native';

import { fonts, palette } from '@/theme';

type CipherRowsProps = { fullRows: string[]; dottedRows: string[] };

export function CipherRows({ fullRows, dottedRows }: CipherRowsProps) {
  return (
    <View style={{ paddingHorizontal: 16, marginTop: 18, gap: 2 }}>
      {fullRows.map((row, i) => (
        <Text
          key={`f${i}`}
          style={{
            fontFamily: fonts.mono,
            fontSize: 21,
            fontWeight: '600',
            letterSpacing: 2.5,
            color: palette.cream,
          }}
        >
          {row}
        </Text>
      ))}
      {dottedRows.map((row, i) => (
        <Text
          key={`d${i}`}
          style={{
            fontFamily: fonts.mono,
            fontSize: 15,
            lineHeight: 24,
            letterSpacing: 5,
            color: palette.cream,
          }}
        >
          {row}
        </Text>
      ))}
    </View>
  );
}
