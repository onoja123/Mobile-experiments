import type { ReactNode } from 'react';

export type BottomSheetProps = {
  visible: boolean;
  onDismiss: () => void;
  children: ReactNode;
};
