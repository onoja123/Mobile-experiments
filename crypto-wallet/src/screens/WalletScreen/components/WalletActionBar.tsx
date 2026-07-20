import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

type WalletActionBarProps = {
  onSend?: () => void;
  onReceive?: () => void;
  onSwap?: () => void;
  onIpo?: () => void;
};

type WalletAction = {
  label: string;
  icon: keyof typeof Feather.glyphMap;
  onPress?: () => void;
};

export function WalletActionBar({ onSend, onReceive, onSwap, onIpo }: WalletActionBarProps) {
  const actions: WalletAction[] = [
    { label: 'Receive', icon: 'arrow-down-left', onPress: onReceive },
    { label: 'Send', icon: 'arrow-up-right', onPress: onSend },
    { label: 'Swap', icon: 'repeat', onPress: onSwap },
    { label: 'IPO', icon: 'trending-up', onPress: onIpo },
  ];

  return (
    <View className="flex-row items-center justify-evenly py-5">
      {actions.map((action) => (
        <Pressable
          key={action.label}
          onPress={action.onPress}
          className="flex-row items-center active:opacity-60"
          accessibilityRole="button"
          accessibilityLabel={action.label}
        >
          <Feather name={action.icon} size={19} color="#FFFFFF" />
          <Text className="ml-2 text-[15px] font-semibold text-white">
            {action.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
