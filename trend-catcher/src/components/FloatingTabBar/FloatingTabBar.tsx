import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TAB_BAR_BOTTOM_OFFSET } from '@/constants/layout';
import { AppTab } from '@/enums/appTab.enum';
import { FloatingTabBarProps } from './FloatingTabBar.types';
import TabBarIcon from './TabBarIcon';

const TABS = Object.values(AppTab);

export default function FloatingTabBar({ activeTab, onTabPress }: FloatingTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="absolute left-6 right-6 flex-row items-center justify-between rounded-full bg-white px-3 py-2 shadow-lg"
      style={{ bottom: insets.bottom + TAB_BAR_BOTTOM_OFFSET, elevation: 8 }}
    >
      {TABS.map((tab) => {
        const active = tab === activeTab;
        return (
          <Pressable
            key={tab}
            className="flex-1 items-center py-1.5"
            onPress={() => onTabPress(tab)}
          >
            <TabBarIcon tab={tab} active={active} />
            <Text className={`mt-1 text-[10px] ${active ? 'text-ink' : 'text-smoke'}`}>{tab}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
