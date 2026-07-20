import { AppTab } from '@/enums/appTab.enum';

export type FloatingTabBarProps = {
  activeTab: AppTab;
  onTabPress: (tab: AppTab) => void;
};

export type TabBarIconProps = {
  tab: AppTab;
  active: boolean;
};
