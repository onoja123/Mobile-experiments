import type { SharedValue } from 'react-native-reanimated';
import type { Gain } from '@/interfaces/wallet.interface';

export interface WalletRefreshController {
  spinner: SharedValue<number>;
  morph: SharedValue<number>;
  cycling: SharedValue<number>;
  settle: SharedValue<number>;
  shift: SharedValue<number>;
  time: SharedValue<number>;
  digits: SharedValue<string>;
  balance: number;
  gain: Gain;
  refreshing: boolean;
  refresh: () => void;
}
