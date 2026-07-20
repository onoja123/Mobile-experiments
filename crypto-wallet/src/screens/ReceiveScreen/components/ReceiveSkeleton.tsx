import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import Animated, { FadeOut } from 'react-native-reanimated';
import { Shimmer } from '@/components/Shimmer';

const SCREEN_PADDING = 40;
const ACTION_GAP = 12;

export function ReceiveSkeleton() {
  const { width } = useWindowDimensions();
  const cardWidth = width - SCREEN_PADDING;
  const actionWidth = (cardWidth - ACTION_GAP) / 2;

  return (
    <Animated.View exiting={FadeOut.duration(220)}>
      <View className="items-center self-stretch rounded-[24px] bg-white px-5 pb-5 pt-6">
        <Shimmer width={122} height={30} radius={15} />
        <View className="mt-5">
          <Shimmer width={204} height={204} radius={16} />
        </View>
        <View className="mt-5 items-center gap-2">
          <Shimmer width={168} height={16} radius={7} />
          <Shimmer width={110} height={12} radius={6} />
        </View>
      </View>

      <View className="mt-4 flex-row" style={{ gap: ACTION_GAP }}>
        <Shimmer width={actionWidth} height={52} radius={20} />
        <Shimmer width={actionWidth} height={52} radius={20} />
      </View>

      <View className="mt-4">
        <Shimmer width={cardWidth} height={64} radius={22} />
      </View>

      <View className="mt-6 gap-3">
        <Shimmer width={128} height={13} radius={6} />
        <Shimmer width={cardWidth} height={190} radius={24} />
      </View>
    </Animated.View>
  );
}
