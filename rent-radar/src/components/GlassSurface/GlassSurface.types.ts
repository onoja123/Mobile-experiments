import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { AnimatedStyle } from 'react-native-reanimated';

export interface GlassSurfaceProps {
  /** Fixed surface tint; omit to follow the system color scheme. */
  tint?: 'light' | 'dark';
  style?: StyleProp<AnimatedStyle<ViewStyle>>;
  children: ReactNode;
}
