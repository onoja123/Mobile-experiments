import { useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PANEL_GAP, PANEL_RADIUS, SCREEN_PADDING } from '@/constants/layout';
import { PORTFOLIO_CHANGE } from '@/data/portfolio';
import { buildHoldings } from '@/helpers/buildHoldings';
import { formatPercent } from '@/helpers/formatPercent';
import { formatUsd } from '@/helpers/formatUsd';
import AllocationBar from './components/AllocationBar';
import HoldingRow from './components/HoldingRow';
import { AssetsScreenProps } from './AssetsScreen.types';

export default function AssetsScreen({ onOpenCoin }: AssetsScreenProps) {
  const insets = useSafeAreaInsets();
  const { positions, total } = useMemo(buildHoldings, []);

  return (
    <ScrollView className="flex-1 bg-paper" showsVerticalScrollIndicator={false}>
      <View
        className="bg-white"
        style={{
          paddingTop: insets.top + 8,
          paddingHorizontal: SCREEN_PADDING,
          paddingBottom: 22,
          borderBottomLeftRadius: PANEL_RADIUS,
          borderBottomRightRadius: PANEL_RADIUS,
        }}
      >
        <Text className="text-[28px] font-strong tracking-tight text-ink">Assets</Text>
        <Text className="font-sans mt-5 text-[11px] text-smoke">Total value</Text>
        <Text className="mt-1 text-[32px] font-strong tracking-tight text-ink">
          {formatUsd(total)}
        </Text>
        <View className="mt-1.5 flex-row items-center gap-2">
          <Text className="text-[13px] font-semi text-success">
            {formatPercent(PORTFOLIO_CHANGE.percent)}
          </Text>
          <Text className="font-sans text-[12px] text-smoke">
            {PORTFOLIO_CHANGE.amount} all time
          </Text>
        </View>
        <View className="mt-5">
          <AllocationBar positions={positions} />
        </View>
      </View>

      <View
        className="flex-1 bg-white"
        style={{
          marginTop: PANEL_GAP,
          paddingHorizontal: SCREEN_PADDING,
          paddingTop: 18,
          borderTopLeftRadius: PANEL_RADIUS,
          borderTopRightRadius: PANEL_RADIUS,
          minHeight: 420,
        }}
      >
        <View className="flex-row items-baseline justify-between">
          <Text className="text-[19px] font-strong text-ink">Holdings</Text>
          <Text className="font-sans text-[12px] text-smoke">{positions.length} coins</Text>
        </View>
        <View className="mt-1">
          {positions.map((position, index) => (
            <HoldingRow
              key={position.coin.id}
              position={position}
              isLast={index === positions.length - 1}
              onPress={() => onOpenCoin(position.coin)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
