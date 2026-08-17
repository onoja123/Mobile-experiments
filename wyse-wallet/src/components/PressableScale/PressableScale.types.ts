import { PressableProps, ViewStyle } from 'react-native';

export interface PressableScaleProps extends PressableProps {
  scaleTo?: number;
  wrapperStyle?: ViewStyle;
}
