import React from 'react';
import { Text, View } from 'react-native';
import { RefreshableValue } from '@/components/RefreshableValue';
import { RollingNumber } from '@/components/RollingNumber';
import { colors } from '@/theme';

type EstimateRowProps = {
  label: string;
  value: string;
  refreshing: boolean;
  emphasize?: boolean;
};

export function EstimateRow({ label, value, refreshing, emphasize = false }: EstimateRowProps) {
  return (
    <View className="flex-row items-center justify-between py-[7px]">
      <Text className="text-[13px] text-subtle">{label}</Text>
      <RefreshableValue refreshing={refreshing} shimmerWidth={64} shimmerHeight={15}>
        <RollingNumber
          text={value}
          fontSize={15}
          color={emphasize ? colors.accent : colors.ink}
          keyMode="value"
          accessibilityLabel={`${label} ${value}`}
        />
      </RefreshableValue>
    </View>
  );
}
