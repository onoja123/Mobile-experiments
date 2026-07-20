import { Text, View } from 'react-native';

import { formatCurrency } from '@/helpers/formatCurrency';

type PriceBoundsRowProps = {
  low: number;
  high: number;
};

function PriceBound({ label, value }: { label: string; value: number }) {
  return (
    <View className="flex-1">
      <Text className="mb-1.5 font-jakarta text-[12px] text-muted">{label}</Text>
      <View className="h-12 justify-center rounded-full border border-line px-4">
        <Text className="font-jakarta-medium text-[14px] text-ink">{formatCurrency(value)}</Text>
      </View>
    </View>
  );
}

export function PriceBoundsRow({ low, high }: PriceBoundsRowProps) {
  return (
    <View className="mt-3 flex-row gap-3">
      <PriceBound label="Min price" value={low} />
      <PriceBound label="Max price" value={high} />
    </View>
  );
}
