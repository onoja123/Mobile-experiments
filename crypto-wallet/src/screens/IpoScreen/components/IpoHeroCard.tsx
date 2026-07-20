import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { RollingNumber } from '@/components/RollingNumber';
import type { CountdownParts } from '@/interfaces/countdown.interface';
import type { Ipo } from '@/interfaces/ipo.interface';
import { colors, scaleFadeIn } from '@/theme';
import { CompanyLogo } from './CompanyLogo';
import { CountdownRing } from './CountdownRing';

const styles = StyleSheet.create({
  card: {
    borderRadius: 28,
    backgroundColor: colors.card,
    padding: 22,
    shadowColor: colors.ink,
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 6,
  },
});

function StatusPulse() {
  const pulse = useSharedValue(0);

  useEffect(() => {
    pulse.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 900, easing: Easing.inOut(Easing.ease) }),
        withTiming(0, { duration: 900, easing: Easing.inOut(Easing.ease) }),
      ),
      -1,
    );
  }, [pulse]);

  const dotStyle = useAnimatedStyle(() => ({
    opacity: 0.55 + pulse.value * 0.45,
    transform: [{ scale: 0.85 + pulse.value * 0.3 }],
  }));

  return <Animated.View className="h-[7px] w-[7px] rounded-full bg-gain" style={dotStyle} />;
}

type CountdownUnitProps = {
  value: string;
  unit: string;
};

function CountdownUnit({ value, unit }: CountdownUnitProps) {
  return (
    <View>
      <RollingNumber
        text={value}
        fontSize={26}
        color={colors.ink}
        keyMode="value"
        accessibilityLabel={`${value} ${unit}`}
      />
      <Text className="mt-0.5 text-[11px] font-medium text-subtle">{unit}</Text>
    </View>
  );
}

type IpoHeroCardProps = {
  ipo: Ipo;
  countdown: CountdownParts;
  paused: boolean;
  subscribed: boolean;
};

export function IpoHeroCard({ ipo, countdown, paused, subscribed }: IpoHeroCardProps) {
  return (
    <View style={styles.card}>
      <View className="flex-row items-center">
        <Animated.View entering={scaleFadeIn(80)}>
          <CompanyLogo size={58} gradient={ipo.gradient} monogram={ipo.monogram} />
        </Animated.View>
        <View className="ml-4 flex-1">
          <Text className="text-[20px] font-bold text-ink" maxFontSizeMultiplier={1.3}>
            {ipo.company}
          </Text>
          <Text className="mt-0.5 text-[13px] text-subtle">
            {ipo.ticker} · {ipo.industry}
          </Text>
        </View>
        {subscribed ? (
          <Animated.View
            entering={FadeIn.duration(300)}
            className="flex-row items-center gap-1.5 rounded-full bg-accentSoft px-3 py-1.5"
          >
            <Text className="text-[12px] font-semibold text-accent">Subscribed</Text>
          </Animated.View>
        ) : (
          <View className="flex-row items-center gap-1.5 rounded-full bg-gainSoft px-3 py-1.5">
            <StatusPulse />
            <Text className="text-[12px] font-semibold text-gain">Open</Text>
          </View>
        )}
      </View>

      <View className="mt-6 flex-row">
        <View className="flex-1">
          <Text className="text-[12px] text-subtle">Expected Listing</Text>
          <Text className="mt-1 text-[15px] font-bold text-ink">{ipo.listingDate}</Text>
        </View>
        <View className="flex-1">
          <Text className="text-[12px] text-subtle">Price Range</Text>
          <Text className="mt-1 text-[15px] font-bold text-ink">
            ${ipo.priceLow} — ${ipo.priceHigh}
          </Text>
        </View>
      </View>

      <View className="my-5 h-px bg-outline" />

      <View className="flex-row items-center">
        <View className="flex-1">
          <Text className="mb-2.5 text-[12px] text-subtle">Subscription closes in</Text>
          <View className="flex-row gap-6">
            <CountdownUnit value={countdown.days} unit="Days" />
            <CountdownUnit value={countdown.hours} unit="Hours" />
            <CountdownUnit value={countdown.minutes} unit="Minutes" />
          </View>
        </View>
        <CountdownRing size={62} progress={0.64} paused={paused} />
      </View>
    </View>
  );
}
