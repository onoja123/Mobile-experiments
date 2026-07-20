import type { SharedValue } from 'react-native-reanimated';

export interface HomeSheetContentProps {
  collapseProgress: SharedValue<number>;
  onSearchPress: () => void;
}
