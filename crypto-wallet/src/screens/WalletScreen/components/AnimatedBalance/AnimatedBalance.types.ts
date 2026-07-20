import type { SkFont } from '@shopify/react-native-skia';
import type { SharedValue } from 'react-native-reanimated';
import type { Gain } from '@/interfaces/wallet.interface';

export interface BalanceSharedValues {
  time: SharedValue<number>;
  morph: SharedValue<number>;
  cycling: SharedValue<number>;
  settle: SharedValue<number>;
  digits: SharedValue<string>;
}

export interface AnimatedBalanceProps extends BalanceSharedValues {
  gain: Gain;
}

export interface BalanceFonts {
  amount: SkFont;
  label: SkFont;
  gain: SkFont;
}

export interface MorphDigitProps extends BalanceSharedValues {
  index: number;
  x: number;
  y: number;
  font: SkFont;
  baseColor: string;
}
