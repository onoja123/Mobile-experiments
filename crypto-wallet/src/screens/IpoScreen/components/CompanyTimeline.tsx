import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import type { IpoTimelineEvent } from '@/interfaces/ipo.interface';
import { colors, liftIn } from '@/theme';

const CARD_WIDTH = 148;
const GAP = 24;
const DOT = 12;
const SEGMENT_LENGTH = CARD_WIDTH + GAP - DOT;

const styles = StyleSheet.create({
  segmentClip: {
    width: SEGMENT_LENGTH,
    height: 2,
    overflow: 'hidden',
  },
  segment: {
    height: 2,
    width: '100%',
    backgroundColor: colors.outline,
  },
  card: {
    width: CARD_WIDTH,
    borderRadius: 20,
    backgroundColor: colors.card,
    padding: 14,
  },
});

type SegmentProps = {
  delay: number;
};

function Segment({ delay }: SegmentProps) {
  const grow = useSharedValue(0);

  useEffect(() => {
    grow.value = withDelay(
      delay,
      withTiming(1, { duration: 520, easing: Easing.out(Easing.cubic) }),
    );
  }, [delay, grow]);

  const growStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -(1 - grow.value) * SEGMENT_LENGTH }],
  }));

  return (
    <View style={styles.segmentClip}>
      <Animated.View style={[styles.segment, growStyle]} />
    </View>
  );
}

type CompanyTimelineProps = {
  events: IpoTimelineEvent[];
  baseDelay?: number;
};

export function CompanyTimeline({ events, baseDelay = 0 }: CompanyTimelineProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="px-5 pb-1"
    >
      {events.map((event, index) => {
        const last = index === events.length - 1;
        const delay = baseDelay + index * 140;
        return (
          <View key={event.id} style={{ width: last ? CARD_WIDTH : CARD_WIDTH + GAP }}>
            <View className="flex-row items-center">
              <View
                className="rounded-full"
                style={{
                  width: DOT,
                  height: DOT,
                  borderWidth: 2.5,
                  backgroundColor: last ? colors.accent : colors.card,
                  borderColor: last ? colors.accent : colors.accentPurple,
                }}
              />
              {!last && <Segment delay={delay + 120} />}
            </View>
            <Animated.View entering={liftIn(delay)} className="mt-3" style={styles.card}>
              <Text className="text-[11px] font-semibold text-accent">{event.year}</Text>
              <Text className="mt-1 text-[14px] font-bold text-ink">{event.title}</Text>
              <Text className="mt-1 text-[11.5px] leading-[16px] text-subtle">
                {event.detail}
              </Text>
            </Animated.View>
          </View>
        );
      })}
    </ScrollView>
  );
}
