import React from 'react';
import { Text, View } from 'react-native';

import Animated, { FadeInDown } from 'react-native-reanimated';

import { durations } from '@/constants/animation';
import { formatNaira } from '@/helpers/formatNaira';
import { typography } from '@/theme';

type PriceRowProps = {
  label: string;
  value: string;
  bold?: boolean;
  delay: number;
};

function PriceRow({ label, value, bold, delay }: PriceRowProps) {
  return (
    <Animated.View
      entering={FadeInDown.delay(delay).duration(durations.priceRowIn)}
      className="flex-row items-center justify-between"
    >
      <Text
        className={bold ? 'font-bold text-ink' : 'font-sans text-muted'}
        style={bold ? typography.emphasis : typography.callout}
      >
        {label}
      </Text>
      <Text
        className={bold ? 'font-extrabold text-ink' : 'font-semibold text-muted'}
        style={bold ? typography.summaryTotal : typography.callout}
      >
        {value}
      </Text>
    </Animated.View>
  );
}

type PriceSummaryProps = {
  payment: number;
  insurance: number;
};

export default function PriceSummary({ payment, insurance }: PriceSummaryProps) {
  return (
    <View className="mt-4 gap-3 border-t border-black/5 pt-5">
      <PriceRow label="Payment" value={formatNaira(payment)} delay={0} />
      <PriceRow
        label="Insurance"
        value={formatNaira(insurance)}
        delay={durations.priceRowStagger}
      />
      <PriceRow
        label="Total Amount"
        value={formatNaira(payment + insurance)}
        bold
        delay={durations.priceRowStagger * 2}
      />
    </View>
  );
}
