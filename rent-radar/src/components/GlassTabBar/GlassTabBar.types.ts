import { SharedValue } from 'react-native-reanimated';

import { AppTab } from '@/enums/appTab.enum';

export interface GlassTabBarProps {
  activeTab: AppTab;
  onTabPress: (tab: AppTab) => void;
  collapsed?: boolean;
}

export interface TabBarItemProps {
  tab: AppTab;
  index: number;
  fastEdge: SharedValue<number>;
  slowEdge: SharedValue<number>;
  collapseProgress: SharedValue<number>;
  onPress: () => void;
}

export interface TabBarIconProps {
  tab: AppTab;
  color: string;
  filled?: boolean;
}
