import { useState } from 'react';
import { Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  NativeCompactTabBar,
  type NativeCompactTabBarItem,
} from 'expo-native-compact-tabs';

import Icon from '@/components/Icon';
import { colors } from '@/theme';
import { tabBarController } from '../tabBarController';

const ITEMS: NativeCompactTabBarItem[] = [
  { key: 'wallet', label: 'Wallet', icon: require('../../../../assets/tab-icons/wallet.png') },
  { key: 'coins', label: 'Coins', icon: require('../../../../assets/tab-icons/coins.png') },
  { key: 'cash', label: 'Cash', icon: require('../../../../assets/tab-icons/cash.png') },
];

export default function BottomDock() {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState(0);
  const compact = tabBarController.useCompact();

  return (
    <>
      <Pressable
        className="absolute h-12 w-12 items-center justify-center rounded-2xl bg-accent"
        style={{ right: 20, bottom: insets.bottom + 96 }}
      >
        <Icon name="plus" size={20} color={colors.onAccent} strokeWidth={2.2} />
      </Pressable>
      <NativeCompactTabBar
        items={ITEMS}
        selectedIndex={selected}
        compact={compact}
        tintColor={colors.accentInk}
        inactiveTintColor={colors.smoke}
        onTabSelected={({ nativeEvent }) => {
          tabBarController.expand();
          setSelected(nativeEvent.index);
        }}
        style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 78 }}
      />
    </>
  );
}
