import React from 'react';
import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { RollingNumber } from '@/components/RollingNumber';
import type { IpoMetric } from '@/interfaces/ipo.interface';
import { colors, liftIn } from '@/theme';

const GAP = 10;

type FinancialMetricsGridProps = {
  metrics: IpoMetric[];
  baseDelay?: number;
};

export function FinancialMetricsGrid({ metrics, baseDelay = 0 }: FinancialMetricsGridProps) {
  return (
    <View className="flex-row flex-wrap" style={{ gap: GAP }}>
      {metrics.map((metric, index) => (
        <Animated.View
          key={metric.id}
          entering={liftIn(baseDelay + index * 60)}
          className="rounded-[20px] bg-white px-4 py-4"
          style={{ flexBasis: '48%', flexGrow: 1 }}
        >
          <Text className="text-[12px] text-subtle">{metric.label}</Text>
          <View className="mt-1.5">
            <RollingNumber
              text={metric.value}
              fontSize={21}
              color={colors.ink}
              keyMode="value"
              accessibilityLabel={`${metric.label} ${metric.value}`}
            />
          </View>
          <Text className="mt-1 text-[11px] font-medium text-cents">{metric.hint}</Text>
        </Animated.View>
      ))}
    </View>
  );
}
