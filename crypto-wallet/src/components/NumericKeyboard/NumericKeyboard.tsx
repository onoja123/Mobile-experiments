import React from 'react';
import { View } from 'react-native';
import { KeypadKeyButton } from './KeypadKeyButton';
import type { KeypadKey, NumericKeyboardProps } from './NumericKeyboard.types';

const KEY_ROWS: KeypadKey[][] = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['.', '0', 'del'],
];

export function NumericKeyboard({ onKey, onClearAll }: NumericKeyboardProps) {
  return (
    <View className="gap-1 px-4">
      {KEY_ROWS.map((row) => (
        <View key={row.join('')} className="flex-row gap-1">
          {row.map((key) => (
            <KeypadKeyButton key={key} label={key} onKey={onKey} onClearAll={onClearAll} />
          ))}
        </View>
      ))}
    </View>
  );
}
