import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { PressableScale } from '@/components/PressableScale';
import type { Ipo } from '@/interfaces/ipo.interface';
import { colors, springs } from '@/theme';

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    backgroundColor: colors.card,
    padding: 20,
  },
  expandable: {
    overflow: 'hidden',
  },
});

type OverviewSectionProps = {
  title: string;
  body: string;
};

function OverviewSection({ title, body }: OverviewSectionProps) {
  return (
    <View className="mt-4">
      <Text className="text-[12px] font-semibold text-accent">{title}</Text>
      <Text className="mt-1.5 text-[13px] leading-[20px] text-ink">{body}</Text>
    </View>
  );
}

type CompanyOverviewCardProps = {
  ipo: Ipo;
};

export function CompanyOverviewCard({ ipo }: CompanyOverviewCardProps) {
  const [expanded, setExpanded] = useState(false);
  const contentHeight = useSharedValue(0);
  const progress = useDerivedValue(
    () => withSpring(expanded ? 1 : 0, springs.layout),
    [expanded],
  );

  const bodyStyle = useAnimatedStyle(() => ({
    height: progress.value * contentHeight.value,
    opacity: progress.value,
  }));

  const chevronStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * 180}deg` }],
  }));

  return (
    <View style={styles.card}>
      <PressableScale
        scaleTo={0.99}
        haptic="selection"
        onPress={() => setExpanded((current) => !current)}
        accessibilityLabel={expanded ? 'Collapse company overview' : 'Expand company overview'}
        accessibilityState={{ expanded }}
      >
        <View className="flex-row items-center justify-between">
          <Text className="text-[15px] font-bold text-ink">About {ipo.company}</Text>
          <Animated.View
            style={chevronStyle}
            className="h-8 w-8 items-center justify-center rounded-full bg-chip"
          >
            <Feather name="chevron-down" size={17} color={colors.ink} />
          </Animated.View>
        </View>
        <Text className="mt-2.5 text-[13px] leading-[20px] text-subtle">
          {ipo.description}
        </Text>
      </PressableScale>

      <Animated.View style={[styles.expandable, bodyStyle]}>
        <View
          onLayout={(event) => {
            contentHeight.value = event.nativeEvent.layout.height;
          }}
        >
          <OverviewSection title="Market Opportunity" body={ipo.marketOpportunity} />
          <OverviewSection title="Financial Highlights" body={ipo.financialHighlights} />
          <OverviewSection title="Growth Metrics" body={ipo.growthMetrics} />
        </View>
      </Animated.View>
    </View>
  );
}
