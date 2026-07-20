import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeIn, FadeOut, ZoomIn } from 'react-native-reanimated';
import { FadeSwapText } from '@/components/FadeSwapText';
import { PressableScale } from '@/components/PressableScale';
import { truncateAddress } from '@/helpers/truncateAddress';
import { useCopyFeedback } from '@/hooks/useCopyFeedback';
import type { Network } from '@/interfaces/network.interface';
import { colors } from '@/theme';
import { NetworkIcon } from './NetworkIcon';
import { QrCode } from './QrCode';

const QR_SIZE = 204;

type ReceiveCardProps = {
  network: Network;
  onNetworkPress: () => void;
};

function CopyChip({ address }: { address: string }) {
  const { copied, copy } = useCopyFeedback(address);

  return (
    <PressableScale
      scaleTo={0.9}
      haptic="none"
      onPress={copy}
      className="h-8 w-8 items-center justify-center rounded-full bg-chip"
      accessibilityLabel={copied ? 'Address copied' : 'Copy address'}
    >
      {copied ? (
        <Animated.View
          key="check"
          entering={ZoomIn.springify().damping(14)}
          exiting={FadeOut.duration(120)}
        >
          <Feather name="check" size={14} color={colors.gain} />
        </Animated.View>
      ) : (
        <Animated.View
          key="copy"
          entering={FadeIn.duration(160)}
          exiting={FadeOut.duration(120)}
        >
          <Feather name="copy" size={14} color={colors.ink} />
        </Animated.View>
      )}
    </PressableScale>
  );
}

export function ReceiveCard({ network, onNetworkPress }: ReceiveCardProps) {
  return (
    <View className="items-center rounded-[24px] bg-white px-5 pb-5 pt-6">
      <PressableScale
        scaleTo={0.95}
        haptic="selection"
        onPress={onNetworkPress}
        className="flex-row items-center gap-2 rounded-full bg-chip py-1.5 pl-2 pr-3"
        accessibilityLabel={`Network ${network.name}. Double tap to change network`}
      >
        <Animated.View
          key={network.id}
          entering={FadeIn.duration(220)}
          exiting={FadeOut.duration(140)}
        >
          <NetworkIcon id={network.id} size={22} />
        </Animated.View>
        <FadeSwapText
          text={network.name}
          className="text-[13px] font-semibold text-ink"
        />
        <Feather name="chevron-down" size={14} color={colors.subtle} />
      </PressableScale>

      <View className="mt-5">
        <QrCode value={network.address} size={QR_SIZE} />
      </View>

      <View className="mt-5 flex-row items-center gap-2.5">
        <View className="flex-row items-baseline">
          <FadeSwapText
            text={truncateAddress(network.address)}
            className="text-[15px] font-semibold text-ink"
          />
        </View>
        <CopyChip address={network.address} />
      </View>
      <Text className="mt-1 text-[12px] text-subtle">
        Your {network.name} address
      </Text>
    </View>
  );
}
