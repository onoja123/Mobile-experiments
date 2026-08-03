import { useMemo, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MarketRow from '@/components/MarketRow';
import { MOVER_COUNT, PANEL_GAP, PANEL_RADIUS, SCREEN_PADDING } from '@/constants/layout';
import { COINS } from '@/data/coins';
import { MarketFilter } from '@/enums/marketFilter.enum';
import { PriceTrend } from '@/enums/priceTrend.enum';
import FilterChips from './components/FilterChips';
import MoverCard from './components/MoverCard';
import SearchField from './components/SearchField';
import { MarketsScreenProps } from './MarketsScreen.types';

const trendByFilter: Partial<Record<MarketFilter, PriceTrend>> = {
  [MarketFilter.Gainers]: PriceTrend.Up,
  [MarketFilter.Losers]: PriceTrend.Down,
};

export default function MarketsScreen({ onOpenCoin }: MarketsScreenProps) {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState(MarketFilter.All);

  const movers = useMemo(
    () =>
      [...COINS]
        .sort((a, b) => Math.abs(b.changePercent) - Math.abs(a.changePercent))
        .slice(0, MOVER_COUNT),
    [],
  );

  const visibleCoins = useMemo(() => {
    const term = query.trim().toLowerCase();
    const trend = trendByFilter[filter];

    return COINS.filter((coin) => {
      const matchesTrend = !trend || coin.trend === trend;
      const matchesTerm =
        !term ||
        coin.name.toLowerCase().includes(term) ||
        coin.ticker.toLowerCase().includes(term);

      return matchesTrend && matchesTerm;
    });
  }, [query, filter]);

  return (
    <ScrollView
      className="flex-1 bg-paper"
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
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
        <Text className="text-[28px] font-strong tracking-tight text-ink">Markets</Text>
        <Text className="font-sans mt-1 text-[12px] text-smoke">
          {COINS.length} assets · updated moments ago
        </Text>
        <View className="mt-4">
          <SearchField value={query} onChange={setQuery} />
        </View>
      </View>

      <View
        className="bg-white"
        style={{
          marginTop: PANEL_GAP,
          paddingVertical: 18,
          borderRadius: PANEL_RADIUS,
        }}
      >
        <Text
          className="text-[15px] font-strong text-ink"
          style={{ paddingHorizontal: SCREEN_PADDING }}
        >
          Biggest movers
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: SCREEN_PADDING, gap: 10, paddingTop: 12 }}
        >
          {movers.map((coin) => (
            <MoverCard key={coin.id} coin={coin} onPress={() => onOpenCoin(coin)} />
          ))}
        </ScrollView>
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
        <FilterChips active={filter} onSelect={setFilter} />
        <View className="mt-1">
          {visibleCoins.map((coin, index) => (
            <MarketRow
              key={coin.id}
              coin={coin}
              isLast={index === visibleCoins.length - 1}
              onPress={() => onOpenCoin(coin)}
            />
          ))}
        </View>
        {visibleCoins.length === 0 && (
          <View className="items-center py-14">
            <Text className="text-[14px] font-strong text-ink">Nothing here</Text>
            <Text className="font-sans mt-1 text-[12px] text-smoke">
              No asset matches that search
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
