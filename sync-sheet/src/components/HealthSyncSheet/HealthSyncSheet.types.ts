import type { RefObject } from 'react';
import type { View } from 'react-native';

export type HealthSyncSheetProps = {
  visible: boolean;
  onDismiss: () => void;
  blurTarget?: RefObject<View | null>;
};
