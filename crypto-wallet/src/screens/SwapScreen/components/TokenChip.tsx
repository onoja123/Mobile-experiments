import React, { useEffect, useRef } from 'react';
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
import type { Token } from '@/interfaces/token.interface';
import { colors, springs } from '@/theme';

type TokenChipProps = {
  token: Token;
  onPress: () => void;
  accessibilityHint?: string;
};

export function TokenChip({ token, onPress, accessibilityHint }: TokenChipProps) {
  const rotation = useSharedValue(0);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    rotation.value = withSequence(
      withTiming(-0.16, { duration: 110 }),
      withSpring(0, springs.pop),
    );
  }, [token.id, rotation]);

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}rad` }],
  }));

  return (
    <PressableScale
      scaleTo={0.94}
      haptic="selection"
      onPress={onPress}
      className="flex-row items-center gap-2 rounded-full bg-chip py-1.5 pl-1.5 pr-3"
      accessibilityLabel={`${token.name}, ${token.symbol}`}
      accessibilityHint={accessibilityHint}
    >
      <Animated.View style={iconStyle}>
        <Animated.View
          key={token.id}
          entering={FadeIn.duration(220)}
          exiting={FadeOut.duration(140)}
        >
          <TokenIcon id={token.id} size={34} />
        </Animated.View>
      </Animated.View>
      <FadeSwapText text={token.symbol} className="text-[16px] font-bold text-ink" />
      <Feather name="chevron-down" size={15} color={colors.subtle} />
    </PressableScale>
  );
}
