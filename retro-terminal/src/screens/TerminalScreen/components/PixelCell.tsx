import React from 'react';
import { View } from 'react-native';

import { PixelCellKind } from '@/enums';
import { palette } from '@/theme';

type PixelCellProps = { kind: PixelCellKind; size?: number };

export function PixelCell({ kind, size = 11 }: PixelCellProps) {
  if (kind === PixelCellKind.Dot)
    return (
      <View style={{ width: 3, height: 3, backgroundColor: palette.ink, margin: (size - 3) / 2 }} />
    );
  return (
    <View
      style={{
        width: size,
        height: size,
        margin: 1.5,
        backgroundColor: kind === PixelCellKind.Filled ? palette.ink : 'transparent',
        borderWidth: kind === PixelCellKind.Outlined ? 1.5 : 0,
        borderColor: palette.ink,
      }}
    />
  );
}
