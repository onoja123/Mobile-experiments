import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import IconCircleButton from '@/components/IconCircleButton';
import { HERO_HEIGHT, TAB_BAR_CLEARANCE } from '@/constants/layout';
import { colors, typography } from '@/theme';
import type { Destination } from '@/types';

import ReviewCard from './ReviewCard';

type DestinationDetailSheetProps = {
  destination: Destination;
  progress: SharedValue<number>;
};

export default function DestinationDetailSheet({
  destination,
  progress,
}: DestinationDetailSheetProps) {
  const insets = useSafeAreaInsets();

  const revealStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      progress.value,
      [0.5, 0.95],
      [0, 1],
      Extrapolation.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0.5, 1],
          [64, 0],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  const priceStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      progress.value,
      [0.78, 1],
      [0, 1],
      Extrapolation.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0.78, 1],
          [14, 0],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  return (
    <Animated.View
      style={[
        revealStyle,
        { position: 'absolute', top: HERO_HEIGHT, bottom: 0, left: 0, right: 0 },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 26,
          paddingBottom: insets.bottom + TAB_BAR_CLEARANCE,
        }}
      >
        <View className="flex-row items-center justify-between px-6">
          <Animated.View style={priceStyle}>
            <Text className="font-extrabold text-ink" style={typography.price}>
              {destination.price}
            </Text>
          </Animated.View>
          <View className="flex-row gap-3">
            <IconCircleButton
              name="bookmark"
              color={colors.slate}
              className="border border-black/10 bg-white"
            />
            <IconCircleButton
              name="share"
              color={colors.slate}
              className="border border-black/10 bg-white"
            />
          </View>
        </View>

        <Text
          className="mt-5 px-6 font-sans text-muted"
          style={typography.paragraph}
        >
          {destination.description}
        </Text>

        <Text
          className="mt-8 px-6 font-bold text-ink"
          style={typography.sectionTitle}
        >
          What do other explorers say
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4"
          contentContainerStyle={{ paddingHorizontal: 24, gap: 14 }}
        >
          {destination.reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </ScrollView>
      </ScrollView>
    </Animated.View>
  );
}
