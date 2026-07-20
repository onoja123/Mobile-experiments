import React from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { PressableScale } from '@/components/PressableScale';
import { PrimaryButton } from '@/components/PrimaryButton';
import { RollingNumber } from '@/components/RollingNumber';
import { groupThousands } from '@/helpers/groupThousands';
import type { Ipo } from '@/interfaces/ipo.interface';
import { colors } from '@/theme';
import { CompanyLogo } from '../CompanyLogo';
import { ConfirmationDetailRow } from './ConfirmationDetailRow';

type ReviewStageProps = {
  ipo: Ipo;
  amountUsd: number;
  allocationText: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ReviewStage({
  ipo,
  amountUsd,
  allocationText,
  onConfirm,
  onCancel,
}: ReviewStageProps) {
  return (
    <Animated.View
      key="review"
      entering={FadeIn.duration(220)}
      exiting={FadeOut.duration(140)}
    >
      <View className="mb-5 h-[5px] w-10 self-center rounded-full bg-outline" />
      <View className="flex-row items-center">
        <CompanyLogo size={46} gradient={ipo.gradient} monogram={ipo.monogram} />
        <View className="ml-3.5 flex-1">
          <Text className="text-[17px] font-bold text-ink">{ipo.company}</Text>
          <Text className="mt-0.5 text-[12px] text-subtle">
            {ipo.ticker} · {ipo.exchange}
          </Text>
        </View>
        <View className="items-end">
          <Text className="text-[11px] text-cents">Investment</Text>
          <RollingNumber
            text={`$${groupThousands(String(amountUsd))}`}
            fontSize={18}
            color={colors.ink}
            keyMode="value"
            accessibilityLabel={`Investment $${amountUsd}`}
          />
        </View>
      </View>

      <View className="my-5 h-px bg-outline" />

      <ConfirmationDetailRow label="Estimated Allocation" value={allocationText} />
      <ConfirmationDetailRow label="Expected Listing" value={ipo.listingDate} />
      <ConfirmationDetailRow label="Price Range" value={`$${ipo.priceLow} — $${ipo.priceHigh}`} />

      <View className="mt-5">
        <PrimaryButton enabled onPress={onConfirm} label="Confirm Subscription" />
      </View>
      <PressableScale
        haptic="tap"
        onPress={onCancel}
        className="mt-3 h-11 items-center justify-center"
        accessibilityLabel="Cancel"
      >
        <Text className="text-[14px] font-semibold text-subtle">Cancel</Text>
      </PressableScale>
    </Animated.View>
  );
}
