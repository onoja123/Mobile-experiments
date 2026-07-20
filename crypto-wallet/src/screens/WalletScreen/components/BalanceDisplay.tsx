import React from 'react';
import { Pressable } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import type { WalletRefreshController } from '@/interfaces/walletRefreshController.interface';
import { AnimatedBalance } from './AnimatedBalance';

type BalanceDisplayProps = {
  controller: WalletRefreshController;
};

export function BalanceDisplay({ controller }: BalanceDisplayProps) {
  const { morph, time, cycling, settle, digits, gain, refresh } = controller;

  const containerStyle = useAnimatedStyle(() => ({
    opacity: 1 - 0.3 * morph.value,
    transform: [{ scale: 1 - 0.03 * morph.value }],
  }));

  return (
    <Pressable onPress={refresh} accessibilityLabel="Refresh balance">
      <Animated.View style={containerStyle}>
        <AnimatedBalance
          gain={gain}
          time={time}
          morph={morph}
          cycling={cycling}
          settle={settle}
          digits={digits}
        />
      </Animated.View>
    </Pressable>
  );
}
