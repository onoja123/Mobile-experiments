import React, { useEffect } from 'react';
import { Pressable, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { springs } from '@/constants/animation';
import { TAB_BAR_SLOT_GAP, TAB_BAR_SLOT_SIZE } from '@/constants/layout';
import { AppTab } from '@/enums';
import { colors } from '@/theme';
import type { FeatherIconName } from '@/types';

import { TabBarProps } from './TabBar.types';

const TAB_ITEMS: { key: AppTab; icon: FeatherIconName }[] = [
  { key: AppTab.Explore, icon: 'compass' },
  { key: AppTab.Messages, icon: 'mail' },
  { key: AppTab.Saved, icon: 'bookmark' },
];

const SLOT_STRIDE = TAB_BAR_SLOT_SIZE + TAB_BAR_SLOT_GAP;

export default function TabBar({
  active,
  unread,
  onChange,
  cardProgress,
}: TabBarProps) {
  const insets = useSafeAreaInsets();
  const index = TAB_ITEMS.findIndex((item) => item.key === active);
  const slide = useSharedValue(index * SLOT_STRIDE);

  useEffect(() => {
    slide.value = withSpring(index * SLOT_STRIDE, springs.tabIndicator);
  }, [index]);

  const hideStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      cardProgress.value,
      [0, 0.45],
      [1, 0],
      Extrapolation.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          cardProgress.value,
          [0, 1],
          [0, 110],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  const ringStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: slide.value }],
  }));

  return (
    <Animated.View
      style={[
        hideStyle,
        { bottom: insets.bottom + 10, height: 64, gap: TAB_BAR_SLOT_GAP },
      ]}
      className="absolute flex-row items-center self-center rounded-full bg-pill/95 px-4"
    >
      <Animated.View
        style={[
          ringStyle,
          {
            width: TAB_BAR_SLOT_SIZE,
            height: TAB_BAR_SLOT_SIZE,
            left: 16,
            top: 8,
          },
        ]}
        className="absolute rounded-full border border-white/25"
      />
      {TAB_ITEMS.map((item) => (
        <Pressable
          key={item.key}
          onPress={() => onChange(item.key)}
          className="h-12 w-12 items-center justify-center"
        >
          <Feather
            name={item.icon}
            size={21}
            color={item.key === active ? colors.white : colors.whiteTranslucent}
          />
          {item.key === AppTab.Messages && !!unread && active !== AppTab.Messages && (
            <View className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-coral" />
          )}
        </Pressable>
      ))}
    </Animated.View>
  );
}
