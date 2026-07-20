import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { FadeSwapText } from '@/components/FadeSwapText';
import { Shimmer } from '@/components/Shimmer';
import type { Token } from '@/interfaces/token.interface';

const REFRESH_MS = 520;

type NetworkFeeCardProps = {
  token: Token;
};

type FeeSlotProps = {
  label: string;
  value: string;
  pending: boolean;
  align?: 'start' | 'center' | 'end';
};

function FeeSlot({ label, value, pending, align = 'start' }: FeeSlotProps) {
  const alignClass =
    align === 'center' ? 'items-center' : align === 'end' ? 'items-end' : 'items-start';

  return (
    <View className={alignClass}>
      <Text className="text-[11px] font-semibold uppercase tracking-wide text-subtle">
        {label}
      </Text>
      <View className={`mt-1 h-[20px] justify-center ${alignClass}`}>
        {pending ? (
          <Animated.View
            key="shimmer"
            entering={FadeIn.duration(160)}
            exiting={FadeOut.duration(160)}
          >
            <Shimmer width={54} height={13} radius={6} />
          </Animated.View>
        ) : (
          <FadeSwapText text={value} className="text-[14px] font-bold text-ink" />
        )}
      </View>
    </View>
  );
}

export function NetworkFeeCard({ token }: NetworkFeeCardProps) {
  const [pending, setPending] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setPending(true);
    const timer = setTimeout(() => setPending(false), REFRESH_MS);
    return () => clearTimeout(timer);
  }, [token.id]);

  return (
    <View
      className="flex-row justify-between rounded-[22px] bg-white px-5 py-3.5"
      accessible
      accessibilityLabel={`Estimated fee $${token.feeUsd.toFixed(2)} on ${token.network}, arrives in ${token.eta}`}
    >
      <FeeSlot label="Est. fee" value={`$${token.feeUsd.toFixed(2)}`} pending={pending} />
      <FeeSlot label="Network" value={token.network} pending={pending} align="center" />
      <FeeSlot label="Arrival" value={token.eta} pending={pending} align="end" />
    </View>
  );
}
