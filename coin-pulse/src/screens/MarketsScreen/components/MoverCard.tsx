import { Pressable, Text, View } from 'react-native';

import CoinBadge from '@/components/CoinBadge';
import Sparkline from '@/components/Sparkline';
import { MOVER_BADGE_SIZE, MOVER_CARD_WIDTH } from '@/constants/layout';
import { PriceTrend } from '@/enums/priceTrend.enum';
import { formatPercent } from '@/helpers/formatPercent';
import { formatUsd } from '@/helpers/formatUsd';
import { colors } from '@/theme/colors';
import { MoverCardProps } from '../MarketsScreen.types';

export default function MoverCard({ coin, onPress }: MoverCardProps) {
  const trendColor = coin.trend === PriceTrend.Up ? colors.success : colors.danger;

  return (
    <Pressable
      className="rounded-2xl border border-mist p-3 active:opacity-60"
      style={{ width: MOVER_CARD_WIDTH }}
      onPress={onPress}
    >
      <View className="flex-row items-center justify-between">
        <CoinBadge coin={coin} size={MOVER_BADGE_SIZE} />
        <Text className="text-[11px] font-semi" style={{ color: trendColor }}>
          {formatPercent(coin.changePercent)}
        </Text>
      </View>
      <Text className="mt-2.5 text-[13px] font-strong text-ink">{coin.ticker}</Text>
      <Text className="font-sans mt-0.5 text-[11px] text-smoke">
        {formatUsd(coin.price, coin.decimals)}
      </Text>
      <View className="mt-2">
        <Sparkline points={coin.sparkline} color={trendColor} />
      </View>
    </Pressable>
  );
}
