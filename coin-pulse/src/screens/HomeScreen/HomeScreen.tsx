import { useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MarketRow from '@/components/MarketRow';
import { PANEL_GAP, PANEL_RADIUS, SCREEN_PADDING } from '@/constants/layout';
import { COINS } from '@/data/coins';
import { PORTFOLIO_CHANGE } from '@/data/portfolio';
import { buildHoldings } from '@/helpers/buildHoldings';
import { formatPercent } from '@/helpers/formatPercent';
import { formatUsd } from '@/helpers/formatUsd';
import HomeHeader from './components/HomeHeader';
import InviteCard from './components/InviteCard';
import QuickActions from './components/QuickActions';
import SortIcon from './components/SortIcon';
import { HomeScreenProps } from './HomeScreen.types';

export default function HomeScreen({ onOpenCoin }: HomeScreenProps) {
  const insets = useSafeAreaInsets();
  const { total } = useMemo(buildHoldings, []);

  return (
    <ScrollView className="flex-1 bg-paper" showsVerticalScrollIndicator={false} bounces={false}>
      <View
        className="bg-white"
        style={{
          paddingTop: insets.top + 8,
          paddingHorizontal: SCREEN_PADDING,
          paddingBottom: 20,
          borderBottomLeftRadius: PANEL_RADIUS,
          borderBottomRightRadius: PANEL_RADIUS,
        }}
      >
        <HomeHeader />
        <View className="mt-6 flex-row items-end justify-between">
          <View>
            <Text className="font-sans text-[11px] text-smoke">Portfolio value</Text>
            <Text className="mt-1 text-[32px] font-strong tracking-tight text-ink">
              {formatUsd(total)}
            </Text>
          </View>
          <View className="items-end pb-1">
            <Text className="text-[13px] font-semi text-success">
              {formatPercent(PORTFOLIO_CHANGE.percent)}
            </Text>
            <Text className="font-sans mt-0.5 text-[12px] text-smoke">{PORTFOLIO_CHANGE.amount}</Text>
          </View>
        </View>
        <View className="mt-6">
          <QuickActions />
        </View>
      </View>

      <View style={{ marginTop: PANEL_GAP }}>
        <InviteCard />
      </View>

      <View
        className="flex-1 bg-white"
        style={{
          marginTop: PANEL_GAP,
          paddingHorizontal: SCREEN_PADDING,
          borderTopLeftRadius: PANEL_RADIUS,
          borderTopRightRadius: PANEL_RADIUS,
          minHeight: 400,
        }}
      >
        <View className="mt-2 items-center">
          <View className="h-1 w-9 rounded-full bg-mist" />
        </View>
        <View className="mt-3 flex-row items-center justify-between">
          <Text className="text-[19px] font-strong text-ink">Watchlist</Text>
          <SortIcon />
        </View>
        <View className="mt-1.5 flex-row items-center gap-1">
          <Text className="font-sans text-[12px] text-smoke">Ranked by</Text>
          <Text className="text-[12px] font-strong text-ink">24h volume</Text>
        </View>
        <View className="mt-2">
          {COINS.map((coin, index) => (
            <MarketRow
              key={coin.id}
              coin={coin}
              isLast={index === COINS.length - 1}
              onPress={() => onOpenCoin(coin)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
