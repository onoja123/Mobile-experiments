import { ReactNode } from 'react';
import { SharedValue } from 'react-native-reanimated';

export type SlideIllustrationProps = {
  index: number;
  progress: SharedValue<number>;
  children: ReactNode;
};

export type PagerDotsProps = {
  count: number;
  progress: SharedValue<number>;
};
