import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppTab } from '@/enums/appTab.enum';
import TabBarItem from './TabBarItem';
import { TabBarProps } from './TabBar.types';

const TABS = Object.values(AppTab);

export default function TabBar({ activeTab, onTabPress }: TabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-row items-start bg-white px-3"
      style={{ paddingBottom: insets.bottom }}
    >
      {TABS.map((tab) => (
        <TabBarItem
          key={tab}
          tab={tab}
          active={tab === activeTab}
          onPress={() => onTabPress(tab)}
        />
      ))}
    </View>
  );
}
