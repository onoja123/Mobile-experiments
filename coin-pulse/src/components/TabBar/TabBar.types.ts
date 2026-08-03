import { AppTab } from '@/enums/appTab.enum';

export type TabBarProps = {
  activeTab: AppTab;
  onTabPress: (tab: AppTab) => void;
};

export type TabBarIconProps = {
  tab: AppTab;
  active: boolean;
};

export type TabBarItemProps = {
  tab: AppTab;
  active: boolean;
  onPress: () => void;
};
