import type { SharedValue } from 'react-native-reanimated';

import type { AppTab } from '@/enums';

export type TabBarProps = {
  active: AppTab;
  unread?: number;
  onChange: (tab: AppTab) => void;
  cardProgress: SharedValue<number>;
};
