import React, { useState } from 'react';
import { View } from 'react-native';

import Animated, {
  FadeIn,
  FadeOut,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import TabBar from '@/components/TabBar';
import { durations } from '@/constants/animation';
import { CHATS } from '@/data/chats';
import { AppTab } from '@/enums';
import { getTotalUnreadCount } from '@/helpers/getTotalUnreadCount';
import ExploreScreen from '@/screens/explore/ExploreScreen';
import MessagesScreen from '@/screens/messages/MessagesScreen';

const UNREAD_COUNT = getTotalUnreadCount(CHATS);

export default function TabNavigator() {
  const [tab, setTab] = useState<AppTab>(AppTab.Explore);
  const cardProgress = useSharedValue(0);
  const exploreFade = useSharedValue(1);

  const switchTab = (next: AppTab) => {
    if (next === tab || next === AppTab.Saved) return;
    setTab(next);
    exploreFade.value = withTiming(next === AppTab.Explore ? 1 : 0, {
      duration: durations.tabCrossfade,
    });
  };

  const exploreStyle = useAnimatedStyle(() => ({
    opacity: exploreFade.value,
    transform: [{ scale: interpolate(exploreFade.value, [0, 1], [0.97, 1]) }],
  }));

  return (
    <View className="flex-1 bg-cream">
      <Animated.View
        style={exploreStyle}
        className="flex-1"
        pointerEvents={tab === AppTab.Explore ? 'auto' : 'none'}
      >
        <ExploreScreen progress={cardProgress} />
      </Animated.View>

      {tab === AppTab.Messages && (
        <Animated.View
          entering={FadeIn.duration(durations.messagesEnter)}
          exiting={FadeOut.duration(durations.messagesExit)}
          className="absolute inset-0"
        >
          <MessagesScreen />
        </Animated.View>
      )}

      <TabBar
        active={tab}
        unread={UNREAD_COUNT}
        onChange={switchTab}
        cardProgress={cardProgress}
      />
    </View>
  );
}
