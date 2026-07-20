import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { useSharedValue, withSpring } from 'react-native-reanimated';
import { RollingNumber } from '@/components/RollingNumber';
import { groupThousands } from '@/helpers/groupThousands';
import { colors, springs } from '@/theme';
import { ProbabilityRing } from '../ProbabilityRing';
import type { AllocationEstimatorProps } from './AllocationEstimator.types';
import { EstimateRow } from './EstimateRow';
import { InvestmentPresets } from './InvestmentPresets';
import { InvestmentSlider } from './InvestmentSlider';
import { styles } from './styles';

export function AllocationEstimator({
  ipo,
  amount,
  onAmountChange,
  estimate,
  refreshing,
}: AllocationEstimatorProps) {
  const range = ipo.maxInvestment - ipo.minInvestment;
  const fraction = useSharedValue((amount - ipo.minInvestment) / range);

  const selectPreset = useCallback(
    (preset: number) => {
      fraction.value = withSpring((preset - ipo.minInvestment) / range, springs.roll);
    },
    [fraction, ipo.minInvestment, range],
  );

  return (
    <View style={styles.card}>
      <View className="flex-row items-center justify-between">
        <Text className="text-[13px] font-semibold text-subtle">Investment</Text>
        <Text className="text-[12px] text-cents">
          ${groupThousands(String(ipo.minInvestment))} – $
          {groupThousands(String(ipo.maxInvestment))}
        </Text>
      </View>

      <View className="mt-2 flex-row items-center">
        <Text
          className="mr-0.5 text-[34px] font-bold text-cents"
          allowFontScaling={false}
        >
          $
        </Text>
        <RollingNumber
          text={groupThousands(String(amount))}
          fontSize={34}
          color={colors.ink}
          keyMode="value"
          accessibilityLabel={`Investment amount $${amount}`}
        />
      </View>

      <InvestmentSlider
        fraction={fraction}
        minInvestment={ipo.minInvestment}
        maxInvestment={ipo.maxInvestment}
        onAmountChange={onAmountChange}
      />

      <InvestmentPresets amount={amount} onSelect={selectPreset} />

      <View className="my-4 h-px bg-outline" />

      <View className="flex-row items-center">
        <View className="flex-1 pr-4">
          <EstimateRow
            label="Estimated Shares"
            value={`${estimate.shares}`}
            refreshing={refreshing}
          />
          <EstimateRow
            label="Estimated Allocation"
            value={`${estimate.allocationPercent}%`}
            refreshing={refreshing}
          />
          <EstimateRow
            label="Investment Total"
            value={`$${groupThousands(estimate.totalUsd.toFixed(2))}`}
            refreshing={refreshing}
            emphasize
          />
        </View>
        <ProbabilityRing size={96} tier={estimate.tier} score={estimate.tierScore} />
      </View>
    </View>
  );
}
