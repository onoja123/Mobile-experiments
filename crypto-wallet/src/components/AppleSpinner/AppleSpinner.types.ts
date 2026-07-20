import type { ViewStyle } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';

export interface AppleSpinnerProps {
  visibility: SharedValue<number>;
  size?: number;
  style?: ViewStyle;
}
