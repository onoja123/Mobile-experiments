import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import Animated, { FadeOut } from 'react-native-reanimated';
import { Shimmer } from '@/components/Shimmer';

const SCREEN_PADDING = 40;
const GRID_GAP = 10;

export function IpoSkeleton() {
  const { width } = useWindowDimensions();
  const cardWidth = width - SCREEN_PADDING;
  const gridItem = (cardWidth - GRID_GAP) / 2;

  return (
    <Animated.View exiting={FadeOut.duration(220)} className="px-5">
      <View className="rounded-[28px] bg-white p-[22px]">
        <View className="flex-row items-center">
          <Shimmer width={58} height={58} radius={17} />
          <View className="ml-4 gap-2">
            <Shimmer width={128} height={18} radius={8} />
            <Shimmer width={90} height={12} radius={6} />
          </View>
        </View>
        <View className="mt-6 flex-row">
          <View className="flex-1 gap-2">
            <Shimmer width={84} height={11} radius={5} />
            <Shimmer width={100} height={14} radius={7} />
          </View>
          <View className="flex-1 gap-2">
            <Shimmer width={70} height={11} radius={5} />
            <Shimmer width={88} height={14} radius={7} />
          </View>
        </View>
        <View className="mt-6 flex-row items-center justify-between">
          <View className="gap-2">
            <Shimmer width={130} height={11} radius={5} />
            <Shimmer width={168} height={28} radius={9} />
          </View>
          <Shimmer width={62} height={62} radius={31} />
        </View>
      </View>

      <View className="mt-3 rounded-[24px] bg-white p-5">
        <View className="flex-row items-end justify-between">
          <Shimmer width={96} height={13} radius={6} />
          <Shimmer width={64} height={26} radius={9} />
        </View>
        <View className="mt-4">
          <Shimmer width={cardWidth - 40} height={16} radius={8} />
        </View>
      </View>

      <View className="mt-3 gap-2.5">
        <Shimmer width={cardWidth} height={64} radius={20} />
        <Shimmer width={cardWidth} height={64} radius={20} />
        <Shimmer width={cardWidth} height={64} radius={20} />
      </View>

      <View className="mt-3 flex-row flex-wrap" style={{ gap: GRID_GAP }}>
        <Shimmer width={gridItem} height={92} radius={20} />
        <Shimmer width={gridItem} height={92} radius={20} />
        <Shimmer width={gridItem} height={92} radius={20} />
        <Shimmer width={gridItem} height={92} radius={20} />
      </View>
    </Animated.View>
  );
}
