import React from 'react';
import { Text, View } from 'react-native';

type ConfirmationDetailRowProps = {
  label: string;
  value: string;
};

export function ConfirmationDetailRow({ label, value }: ConfirmationDetailRowProps) {
  return (
    <View className="flex-row items-center justify-between py-[9px]">
      <Text className="text-[13px] text-subtle">{label}</Text>
      <Text className="text-[14px] font-bold text-ink">{value}</Text>
    </View>
  );
}
