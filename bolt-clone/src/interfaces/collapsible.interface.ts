import type { ReactNode } from 'react';
import type { SharedValue } from 'react-native-reanimated';

export interface CollapsibleProps {
  fullHeight: number;
  progress: SharedValue<number>;
  children: ReactNode;
}
