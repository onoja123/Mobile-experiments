import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeIn } from 'react-native-reanimated';
import { BottomSheet } from '@/components/BottomSheet';
import { PressableScale } from '@/components/PressableScale';
import { truncateAddress } from '@/helpers/truncateAddress';
import type { Network } from '@/interfaces/network.interface';
import { haptics } from '@/services/haptics.service';
import { colors } from '@/theme';
import { NetworkIcon } from './NetworkIcon';

type NetworkRowProps = {
  network: Network;
  active: boolean;
  onPress: () => void;
};

function NetworkRow({ network, active, onPress }: NetworkRowProps) {
  return (
    <PressableScale
      scaleTo={0.98}
      haptic="selection"
      onPress={onPress}
      className={`-mx-2 flex-row items-center rounded-2xl px-2 py-3 ${
        active ? 'bg-accentSoft/60' : ''
      }`}
      accessibilityLabel={`${network.name}, ${truncateAddress(network.address)}`}
      accessibilityState={{ selected: active }}
    >
      <NetworkIcon id={network.id} size={42} />
      <View className="ml-3.5 flex-1">
        <Text className="text-[16px] font-bold text-ink">{network.name}</Text>
        <Text className="mt-0.5 text-[13px] text-subtle">
          {truncateAddress(network.address)}
        </Text>
      </View>
      {active && (
        <Animated.View entering={FadeIn.duration(180)} style={{ marginLeft: 12 }}>
          <Feather name="check-circle" size={18} color={colors.accent} />
        </Animated.View>
      )}
    </PressableScale>
  );
}

type NetworkSheetProps = {
  open: boolean;
  onClose: () => void;
  networks: Network[];
  selected: Network;
  onSelect: (network: Network) => void;
};

export function NetworkSheet({
  open,
  onClose,
  networks,
  selected,
  onSelect,
}: NetworkSheetProps) {
  return (
    <BottomSheet open={open} onClose={onClose} title="Choose network">
      <View className="gap-1">
        {networks.map((network) => (
          <NetworkRow
            key={network.id}
            network={network}
            active={network.id === selected.id}
            onPress={() => {
              if (network.id !== selected.id) {
                onSelect(network);
                haptics.press();
              }
              onClose();
            }}
          />
        ))}
      </View>
    </BottomSheet>
  );
}
