import type { ReactNode } from 'react';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import type { haptics } from '@/services/haptics.service';

export type HapticKind = keyof typeof haptics | 'none';

export interface PressableScaleProps extends Omit<PressableProps, 'children'> {
  scaleTo?: number;
  haptic?: HapticKind;
  lift?: boolean;
  className?: string;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}
