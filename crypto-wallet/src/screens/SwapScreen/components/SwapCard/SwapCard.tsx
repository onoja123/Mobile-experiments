import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { BlinkingCursor } from '@/components/BlinkingCursor';
import { FadeSwapText } from '@/components/FadeSwapText';
import { PressableScale } from '@/components/PressableScale';
import { RefreshableValue } from '@/components/RefreshableValue';
import { RollingNumber } from '@/components/RollingNumber';
import { groupThousands } from '@/helpers/groupThousands';
import { colors } from '@/theme';
import { useSwapFlipAnimation } from '../../hooks/useSwapFlipAnimation';
import { TokenChip } from '../TokenChip';
import type { SwapCardProps } from './SwapCard.types';
import { styles } from './styles';

const AMOUNT_SIZE = 32;

export function SwapCard({
  tokenA,
  tokenB,
  flipped,
  fromToken,
  amount,
  toAmountText,
  rateText,
  refreshing,
  onFlip,
  onPressChipA,
  onPressChipB,
  onMax,
}: SwapCardProps) {
  const { rowAY, rowBY, chipAStyle, chipBStyle, flipIconStyle, handleFlipPress } =
    useSwapFlipAnimation(flipped, onFlip);

  const display = amount === '' ? '0' : groupThousands(amount);
  const empty = amount === '';

  return (
    <View style={styles.card}>
      <View className="flex-row items-center justify-between">
        <Text className="text-[11px] font-semibold uppercase tracking-wide text-subtle">
          From
        </Text>
        <View className="flex-row items-center gap-2">
          <FadeSwapText
            text={`Balance ${fromToken.balance} ${fromToken.symbol}`}
            className="text-[12px] text-subtle"
          />
          <PressableScale
            scaleTo={0.9}
            haptic="selection"
            onPress={onMax}
            className="rounded-full bg-accentSoft px-2 py-0.5"
            accessibilityLabel="Use maximum balance"
          >
            <Text className="text-[11px] font-bold text-accent">MAX</Text>
          </PressableScale>
        </View>
      </View>

      <View
        className="mt-2 h-[60px] flex-row items-center justify-between"
        onLayout={(event) => {
          rowAY.value = event.nativeEvent.layout.y;
        }}
      >
        <Animated.View style={chipAStyle}>
          <TokenChip
            token={tokenA}
            onPress={onPressChipA}
            accessibilityHint="Changes this side of the swap"
          />
        </Animated.View>
        <View className="flex-row items-center">
          <RollingNumber
            text={display}
            fontSize={AMOUNT_SIZE}
            color={empty ? colors.cents : colors.ink}
            fontWeight="800"
            keyMode="typed"
            accessibilityLabel={`Amount ${display} ${fromToken.symbol}`}
          />
          <BlinkingCursor height={AMOUNT_SIZE * 0.72} />
        </View>
      </View>

      <View className="h-[52px] items-center justify-center">
        <View className="absolute left-0 right-0 h-[1px] bg-outline" />
        <PressableScale
          scaleTo={0.9}
          haptic="press"
          onPress={handleFlipPress}
          className="h-[52px] w-[52px] items-center justify-center rounded-full border border-outline bg-white"
          style={styles.flipButton}
          accessibilityLabel="Swap direction"
        >
          <Animated.View style={flipIconStyle}>
            <MaterialCommunityIcons name="swap-vertical" size={22} color={colors.accent} />
          </Animated.View>
        </PressableScale>
      </View>

      <View className="flex-row items-center justify-between">
        <Text className="text-[11px] font-semibold uppercase tracking-wide text-subtle">
          To
        </Text>
        <FadeSwapText text={rateText} className="text-[12px] text-subtle" />
      </View>

      <View
        className="mt-2 h-[60px] flex-row items-center justify-between"
        onLayout={(event) => {
          rowBY.value = event.nativeEvent.layout.y;
        }}
      >
        <Animated.View style={chipBStyle}>
          <TokenChip
            token={tokenB}
            onPress={onPressChipB}
            accessibilityHint="Changes this side of the swap"
          />
        </Animated.View>
        <RefreshableValue refreshing={refreshing} shimmerWidth={96} shimmerHeight={22}>
          <RollingNumber
            text={toAmountText}
            fontSize={AMOUNT_SIZE}
            color={empty ? colors.cents : colors.ink}
            fontWeight="800"
            keyMode="value"
            accessibilityLabel={`Estimated ${toAmountText}`}
          />
        </RefreshableValue>
      </View>
    </View>
  );
}
