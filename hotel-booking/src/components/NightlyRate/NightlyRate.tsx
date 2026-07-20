import { Text } from 'react-native';

import { formatCurrency } from '@/helpers/formatCurrency';

import { NightlyRateProps } from './NightlyRate.types';

export function NightlyRate({ price, className = '' }: NightlyRateProps) {
  return (
    <Text className={`font-jakarta-bold text-ink ${className}`}>
      {formatCurrency(price)}
      <Text className="font-jakarta text-[12px] text-muted">/night</Text>
    </Text>
  );
}
