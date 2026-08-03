import { Pressable, Text, View } from 'react-native';

import CoinBadge from '@/components/CoinBadge';
import Sparkline from '@/components/Sparkline';
import { PriceTrend } from '@/enums/priceTrend.enum';
import { formatPercent } from '@/helpers/formatPercent';
import { formatUsd } from '@/helpers/formatUsd';
import { colors } from '@/theme/colors';
import { MarketRowProps } from './MarketRow.types';

export default function MarketRow({ coin, isLast, onPress }: MarketRowProps) {
  const trendColor = coin.trend === PriceTrend.Up ? colors.success : colors.danger;

  return (
    <Pressable
      className={`flex-row items-center py-3.5 active:opacity-60 ${isLast ? '' : 'border-b border-mist'}`}
      onPress={onPress}
    >
      <CoinBadge coin={coin} />
      <View className="ml-3 w-[76px]">
        <Text className="text-[14px] font-strong text-ink">{coin.name}</Text>
        <Text className="font-sans mt-0.5 text-[11px] text-smoke">{coin.ticker}</Text>
      </View>
      <View className="flex-1 items-center">
        <Sparkline points={coin.sparkline} color={trendColor} />
      </View>
      <View className="items-end">
        <Text className="text-[14px] font-strong text-ink">
          {formatUsd(coin.price, coin.decimals)}
        </Text>
        <View className="mt-0.5 flex-row items-center gap-1">
          <Text className="font-sans text-[11px] text-smoke">{coin.change}</Text>
          <Text className="text-[11px] font-semi" style={{ color: trendColor }}>
            {formatPercent(coin.changePercent)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
