import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { formatFiat } from '@/helpers/formatFiat';
import type { Token } from '@/interfaces/token.interface';
import { colors } from '@/theme';
import { PressableScale } from '../PressableScale';
import { TokenIcon } from '../TokenIcon';

type TokenRowProps = {
  token: Token;
  active: boolean;
  index: number;
  onPress: () => void;
};

export function TokenRow({ token, active, index, onPress }: TokenRowProps) {
  return (
    <Animated.View entering={FadeInDown.delay(60 + index * 45).duration(320)}>
      <PressableScale
        scaleTo={0.98}
        haptic="selection"
        onPress={onPress}
        className={`-mx-2 flex-row items-center rounded-2xl px-2 py-3 ${
          active ? 'bg-accentSoft/60' : ''
        }`}
        accessibilityLabel={`${token.name}, balance ${token.balance} ${token.symbol}`}
        accessibilityState={{ selected: active }}
      >
        <TokenIcon id={token.id} size={42} />
        <View className="ml-3.5 flex-1">
          <Text className="text-[16px] font-bold text-ink">{token.name}</Text>
          <Text className="mt-0.5 text-[13px] text-subtle">{token.symbol}</Text>
        </View>
        <View className="items-end">
          <Text className="text-[15px] font-semibold text-ink">
            {token.balance} {token.symbol}
          </Text>
          <Text className="mt-0.5 text-[13px] text-subtle">
            ${formatFiat(token.balance * token.priceUsd)}
          </Text>
        </View>
        {active && (
          <Animated.View entering={FadeIn.duration(180)} style={{ marginLeft: 12 }}>
            <Feather name="check-circle" size={18} color={colors.accent} />
          </Animated.View>
        )}
      </PressableScale>
    </Animated.View>
  );
}
