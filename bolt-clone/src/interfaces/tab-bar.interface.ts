import type { ReactNode } from 'react';
import type { TabKey } from '@/enums';

export interface TabBarProps {
  active: TabKey;
  onSelect: (tab: TabKey) => void;
}

export interface TabItemProps {
  label: string;
  icon: (color: string) => ReactNode;
  active: boolean;
  onPress: () => void;
}
