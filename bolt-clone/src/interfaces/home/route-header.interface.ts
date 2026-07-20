import type { SharedValue } from 'react-native-reanimated';

export interface RouteHeaderProps {
  progress: SharedValue<number>;
  active: boolean;
  onClose: () => void;
}
