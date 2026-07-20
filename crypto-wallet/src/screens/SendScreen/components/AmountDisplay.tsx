import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { BlinkingCursor } from '@/components/BlinkingCursor';
import { FadeSwapText } from '@/components/FadeSwapText';
import { RollingNumber } from '@/components/RollingNumber';
import { formatTokenAmount } from '@/helpers/formatTokenAmount';
import { groupThousands } from '@/helpers/groupThousands';
import { parseAmount } from '@/helpers/parseAmount';
import type { Token } from '@/interfaces/token.interface';
import { colors, springs } from '@/theme';

const FONT_SIZE = 58;
const MAX_CHARS = 8;

const styles = StyleSheet.create({
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

type AmountDisplayProps = {
  value: string;
  token: Token;
};

export function AmountDisplay({ value, token }: AmountDisplayProps) {
  const empty = value === '';
  const display = `$${empty ? '0' : groupThousands(value)}`;
  const usd = parseAmount(value);
  const equivalent = formatTokenAmount(usd, token.priceUsd, token.displayDecimals);

  const scale = useSharedValue(1);
  useEffect(() => {
    scale.value = withSpring(
      Math.min(1, MAX_CHARS / display.length),
      springs.layout,
    );
  }, [display.length, scale]);

  const scaleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View
      className="items-center"
      accessible
      accessibilityLabel={`Amount ${display}, about ${equivalent} ${token.symbol}`}
    >
      <Animated.View style={[styles.amountRow, scaleStyle]}>
        <RollingNumber
          text={display}
          fontSize={FONT_SIZE}
          color={empty ? colors.cents : colors.ink}
          fontWeight="800"
          keyMode="typed"
          accessibilityLabel={display}
        />
        <BlinkingCursor height={FONT_SIZE * 0.76} />
      </Animated.View>

      <View className="mt-1 flex-row items-center">
        <RollingNumber
          text={equivalent}
          fontSize={15}
          color={colors.subtle}
          fontWeight="600"
          keyMode="value"
          accessibilityLabel={`${equivalent} ${token.symbol}`}
        />
        <FadeSwapText
          text={` ${token.symbol}`}
          className="text-[15px] font-semibold text-subtle"
        />
      </View>
    </View>
  );
}
