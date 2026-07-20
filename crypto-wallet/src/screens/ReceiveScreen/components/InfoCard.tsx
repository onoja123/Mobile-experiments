import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/theme';

type InfoCardProps = {
  message: string;
};

export function InfoCard({ message }: InfoCardProps) {
  return (
    <View
      className="flex-row items-center gap-3 rounded-[22px] bg-white px-4 py-3.5"
      accessible
      accessibilityLabel={message}
    >
      <View className="h-9 w-9 items-center justify-center rounded-full bg-accentSoft">
        <Feather name="info" size={16} color={colors.accent} />
      </View>
      <Text className="flex-1 text-[13px] leading-[18px] text-subtle">{message}</Text>
    </View>
  );
}
