import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  type SharedValue,
} from 'react-native-reanimated';
import { PressableScale } from '@/components/PressableScale';
import type { RelatedIpo } from '@/interfaces/ipo.interface';
import { colors, liftIn } from '@/theme';
import { CompanyLogo } from './CompanyLogo';

const CARD_WIDTH = 192;
const GAP = 12;
const SNAP = CARD_WIDTH + GAP;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    borderRadius: 22,
    backgroundColor: colors.card,
    padding: 16,
  },
});

type RelatedIpoCardProps = {
  ipo: RelatedIpo;
  index: number;
  scrollX: SharedValue<number>;
  baseDelay: number;
};

function RelatedIpoCard({ ipo, index, scrollX, baseDelay }: RelatedIpoCardProps) {
  const scaleStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          scrollX.value,
          [(index - 1) * SNAP, index * SNAP, (index + 1) * SNAP],
          [1, 0.955, 0.91],
          'clamp',
        ),
      },
    ],
  }));

  return (
    <Animated.View entering={liftIn(baseDelay + index * 80)} style={scaleStyle}>
      <PressableScale scaleTo={0.97} haptic="tap" style={styles.card} accessibilityLabel={ipo.company}>
        <View className="flex-row items-center">
          <CompanyLogo size={40} gradient={ipo.gradient} monogram={ipo.monogram} />
          <View className="ml-3 flex-1">
            <Text className="text-[14px] font-bold text-ink" numberOfLines={1}>
              {ipo.company}
            </Text>
            <Text className="mt-0.5 text-[11px] text-subtle">{ipo.industry}</Text>
          </View>
        </View>
        <View className="mt-4 flex-row items-center justify-between">
          <View className="flex-row items-center gap-1 rounded-full bg-chip px-2.5 py-1">
            <Feather name="clock" size={11} color={colors.subtle} />
            <Text className="text-[11px] font-semibold text-ink">{ipo.daysLeft}d left</Text>
          </View>
          <View className="items-end">
            <Text className="text-[10px] text-cents">Raise</Text>
            <Text className="text-[12px] font-bold text-ink">{ipo.raise}</Text>
          </View>
        </View>
      </PressableScale>
    </Animated.View>
  );
}

type RelatedIpoCarouselProps = {
  ipos: RelatedIpo[];
  baseDelay?: number;
};

export function RelatedIpoCarousel({ ipos, baseDelay = 0 }: RelatedIpoCarouselProps) {
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={SNAP}
      decelerationRate="fast"
      onScroll={onScroll}
      scrollEventThrottle={16}
      contentContainerStyle={{ paddingHorizontal: 20, gap: GAP }}
    >
      {ipos.map((ipo, index) => (
        <RelatedIpoCard
          key={ipo.id}
          ipo={ipo}
          index={index}
          scrollX={scrollX}
          baseDelay={baseDelay}
        />
      ))}
    </Animated.ScrollView>
  );
}
