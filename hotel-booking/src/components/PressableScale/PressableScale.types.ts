import { ReactNode } from 'react';
import { PressableProps, StyleProp, ViewStyle } from 'react-native';
import { AnimatedStyle } from 'react-native-reanimated';

export type PressableScaleProps = PressableProps & {
  children: ReactNode;
  className?: string;
  style?: StyleProp<AnimatedStyle<ViewStyle>>;
  scaleTo?: number;
};
