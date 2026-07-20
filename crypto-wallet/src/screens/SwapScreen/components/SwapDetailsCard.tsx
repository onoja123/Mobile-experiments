import React from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { FadeSwapText } from '@/components/FadeSwapText';
import { RefreshableValue } from '@/components/RefreshableValue';
import { RollingNumber } from '@/components/RollingNumber';
import { formatRate } from '@/helpers/formatRate';
import type { SwapQuote } from '@/interfaces/swap.interface';
import type { Token } from '@/interfaces/token.interface';
import { colors } from '@/theme';

type SwapDetailsCardProps = {
  quote: SwapQuote;
  fromToken: Token;
  toToken: Token;
  refreshing: boolean;
};

type DetailRowProps = {
  label: string;
  index: number;
  refreshing: boolean;
  children: React.ReactNode;
};

function DetailRow({ label, index, refreshing, children }: DetailRowProps) {
  return (
    <Animated.View entering={FadeInDown.delay(80 + index * 55).duration(360)}>
      <View className="flex-row items-center justify-between py-[9px]">
        <Text className="text-[13px] text-subtle">{label}</Text>
        <RefreshableValue refreshing={refreshing} shimmerWidth={64} shimmerHeight={14}>
          {children}
        </RefreshableValue>
      </View>
    </Animated.View>
  );
}

export function SwapDetailsCard({
  quote,
  fromToken,
  toToken,
  refreshing,
}: SwapDetailsCardProps) {
  const impactColor = quote.priceImpact < 1 ? colors.gain : colors.ink;

  return (
    <View className="rounded-[22px] bg-white px-5 py-2">
      <DetailRow label="Exchange rate" index={0} refreshing={refreshing}>
        <FadeSwapText
          text={`1 ${fromToken.symbol} = ${formatRate(quote.rate)} ${toToken.symbol}`}
          className="text-[13px] font-bold text-ink"
        />
      </DetailRow>
      <DetailRow label="Estimated fee" index={1} refreshing={refreshing}>
        <RollingNumber
          text={`$${quote.feeUsd.toFixed(2)}`}
          fontSize={13}
          color={colors.ink}
          keyMode="value"
        />
      </DetailRow>
      <DetailRow label="Price impact" index={2} refreshing={refreshing}>
        <FadeSwapText
          text={`${quote.priceImpact.toFixed(2)}%`}
          className="text-[13px] font-bold"
          style={{ color: impactColor }}
        />
      </DetailRow>
      <DetailRow label="Network fee" index={3} refreshing={refreshing}>
        <RollingNumber
          text={`$${quote.networkFeeUsd.toFixed(2)}`}
          fontSize={13}
          color={colors.ink}
          keyMode="value"
        />
      </DetailRow>
      <DetailRow label="Minimum received" index={4} refreshing={refreshing}>
        <View className="flex-row items-center gap-1">
          <RollingNumber
            text={quote.minReceived.toFixed(Math.min(toToken.displayDecimals, 4))}
            fontSize={13}
            color={colors.ink}
            keyMode="value"
          />
          <FadeSwapText
            text={toToken.symbol}
            className="text-[13px] font-bold text-ink"
          />
        </View>
      </DetailRow>
    </View>
  );
}
