import type { ReactNode, RefObject } from 'react';
import type { View } from 'react-native';

export type BookmarkCardProps = {
  title: string;
  icon: ReactNode;
  onClose: () => void;
  children: ReactNode;
  cardRef?: RefObject<View | null>;
};
