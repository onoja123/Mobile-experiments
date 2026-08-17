import type { ReactNode, RefObject } from 'react';
import type { View } from 'react-native';

export type BottomSheetProps = {
  visible: boolean;
  onDismiss: () => void;
  /** Android needs an explicit BlurTargetView to blur; iOS ignores it. */
  blurTarget?: RefObject<View | null>;
  children: ReactNode;
};
