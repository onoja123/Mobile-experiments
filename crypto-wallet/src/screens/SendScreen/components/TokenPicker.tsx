import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { FadeSwapText } from '@/components/FadeSwapText';
import { PressableScale } from '@/components/PressableScale';
import { TokenIcon } from '@/components/TokenIcon';
import { formatFiat } from '@/helpers/formatFiat';
import type { Token } from '@/interfaces/token.interface';
import { colors, springs } from '@/theme';

type TokenPickerProps = {
  selected: Token;
  onPress: () => void;
};

export function TokenPicker({ selected, onPress }: TokenPickerProps) {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withSequence(
      withTiming(-0.14, { duration: 110 }),
      withSpring(0, springs.pop),
    );
  }, [selected.id, rotation]);

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}rad` }],
  }));

  return (
    <PressableScale
      scaleTo={0.98}
      lift
      onPress={onPress}
      className="flex-row items-center rounded-[24px] bg-white px-4 py-3.5"
      accessibilityLabel={`Pay with ${selected.name}. Balance ${selected.balance} ${selected.symbol}. Double tap to change asset`}
    >
      <Animated.View style={iconStyle}>
        <Animated.View
          key={selected.id}
          entering={FadeIn.duration(220)}
          exiting={FadeOut.duration(140)}
        >
          <TokenIcon id={selected.id} size={42} />
        </Animated.View>
      </Animated.View>
      <View className="ml-3.5 flex-1">
        <Text className="text-[11px] font-semibold uppercase tracking-wide text-subtle">
          Pay with
        </Text>
        <View className="mt-0.5 flex-row">
          <FadeSwapText
            text={selected.name}
            className="text-[16px] font-bold text-ink"
          />
        </View>
      </View>
      <View className="mr-3 items-end">
        <FadeSwapText
          text={`${selected.balance} ${selected.symbol}`}
          className="text-[14px] font-semibold text-ink"
        />
        <FadeSwapText
          text={`$${formatFiat(selected.balance * selected.priceUsd)}`}
          className="mt-0.5 text-[13px] text-subtle"
        />
      </View>
      <View className="h-8 w-8 items-center justify-center rounded-full bg-chip">
        <Feather name="chevron-down" size={16} color={colors.subtle} />
      </View>
    </PressableScale>
  );
}
