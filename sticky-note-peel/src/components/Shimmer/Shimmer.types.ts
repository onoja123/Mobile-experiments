import type { SharedValue } from 'react-native-reanimated';

export type ShimmerProps = {
  progress: SharedValue<number>;
  width: number;
  height: number;
  band?: number;
  color?: string;
  opacity?: number;
  skew?: number;
};
