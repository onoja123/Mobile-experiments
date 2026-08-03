import { Pressable, Text, View } from 'react-native';

import CoinBadge from '@/components/CoinBadge';
import { PriceTrend } from '@/enums/priceTrend.enum';
import { formatAmount } from '@/helpers/formatAmount';
import { formatPercent } from '@/helpers/formatPercent';
import { formatUsd } from '@/helpers/formatUsd';
import { colors } from '@/theme/colors';
import { HoldingRowProps } from '../AssetsScreen.types';

export default function HoldingRow({ position, isLast, onPress }: HoldingRowProps) {
  const { coin, amount, value, allocation } = position;
  const trendColor = coin.trend === PriceTrend.Up ? colors.success : colors.danger;

  return (
    <Pressable
      className={`flex-row items-center py-3.5 active:opacity-60 ${isLast ? '' : 'border-b border-mist'}`}
      onPress={onPress}
    >
      <CoinBadge coin={coin} />
      <View className="ml-3 flex-1">
        <Text className="text-[14px] font-strong text-ink">{coin.name}</Text>
        <Text className="font-sans mt-0.5 text-[11px] text-smoke">
          {formatAmount(amount)} {coin.ticker}
        </Text>
      </View>
      <View className="items-end">
        <Text className="text-[14px] font-strong text-ink">{formatUsd(value)}</Text>
        <View className="mt-0.5 flex-row items-center gap-1.5">
          <Text className="font-sans text-[11px] text-smoke">
            {Math.round(allocation * 100)}%
          </Text>
          <Text className="text-[11px] font-semi" style={{ color: trendColor }}>
            {formatPercent(coin.changePercent)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
