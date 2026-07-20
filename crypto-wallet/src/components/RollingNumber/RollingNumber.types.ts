import type { TextStyle } from 'react-native';

export type RollingKeyMode = 'typed' | 'value';

export interface RollingNumberProps {
  text: string;
  fontSize: number;
  color: string;
  fontWeight?: TextStyle['fontWeight'];
  keyMode?: RollingKeyMode;
  accessibilityLabel?: string;
}

export interface RollingCell {
  key: string;
  char: string;
}
