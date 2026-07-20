import { ReactNode } from 'react';
import { PressableProps, StyleProp, ViewStyle } from 'react-native';

export type PressableScaleProps = PressableProps & {
  children: ReactNode;
  className?: string;
  style?: StyleProp<ViewStyle>;
  scaleTo?: number;
};
