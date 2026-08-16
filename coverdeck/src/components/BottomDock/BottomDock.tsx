import {
  NativeCompactTabBar,
  type NativeCompactTabBarItem,
} from 'expo-native-compact-tabs';

import { tabBarController } from '@/tabBarController';
import { colors } from '@/theme';

import type { BottomDockProps } from './BottomDock.types';

const ITEMS: NativeCompactTabBarItem[] = [
  { key: 'deck', label: 'Deck', icon: require('../../../assets/tab-icons/deck.png') },
  { key: 'browse', label: 'Browse', icon: require('../../../assets/tab-icons/browse.png') },
  { key: 'library', label: 'Library', icon: require('../../../assets/tab-icons/library.png') },
];

export default function BottomDock({ selected, onSelect }: BottomDockProps) {
  const compact = tabBarController.useCompact();

  return (
    <NativeCompactTabBar
      items={ITEMS}
      selectedIndex={selected}
      compact={compact}
      tintColor={colors.accent}
      inactiveTintColor={colors.secondaryLabel}
      onTabSelected={({ nativeEvent }) => {
        tabBarController.expand();
        const key = ITEMS[nativeEvent.index]?.key;
        if (key && nativeEvent.index === selected) {
          tabBarController.scrollToTop(key, true);
        }
        onSelect(nativeEvent.index);
      }}
      style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 78 }}
    />
  );
}
