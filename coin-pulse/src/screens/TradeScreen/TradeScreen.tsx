import { useMemo } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { PANEL_GAP, PANEL_RADIUS, SCREEN_PADDING } from '@/constants/layout';
import {
  CHART_FOCUS_START_INDEX,
  CHART_MARKER_INDICES,
  CHART_POINTS,
  FIAT_QUOTE_TICKER,
  ORDER_BOOK_ROW_OPACITIES,
  QUOTE_TICKER,
} from '@/data/trade';
import { PriceTrend } from '@/enums/priceTrend.enum';
import { buildOrderBook } from '@/helpers/buildOrderBook';
import { formatPercent } from '@/helpers/formatPercent';
import { formatUsd } from '@/helpers/formatUsd';
import { colors } from '@/theme/colors';
import OrderBookRowItem from './components/OrderBookRowItem';
import PriceLineChart from './components/PriceLineChart';
import RangeSelector from './components/RangeSelector';
import TradeActions from './components/TradeActions';
import TradeHeader from './components/TradeHeader';
import TradeTabs from './components/TradeTabs';
import { TradeScreenProps } from './TradeScreen.types';

export default function TradeScreen({ coin, onBack }: TradeScreenProps) {
  const insets = useSafeAreaInsets();

  const rising = coin.trend === PriceTrend.Up;
  const quote = coin.ticker === QUOTE_TICKER ? FIAT_QUOTE_TICKER : QUOTE_TICKER;
  const orderBook = useMemo(() => buildOrderBook(coin), [coin]);
  const chartPoints = useMemo(
    () => (rising ? CHART_POINTS : [...CHART_POINTS].reverse()),
    [rising],
  );

  return (
    <View className="flex-1 bg-paper">
      <View
        className="bg-white"
        style={{
          paddingTop: insets.top + 4,
          paddingHorizontal: SCREEN_PADDING,
          paddingBottom: 18,
          borderBottomLeftRadius: PANEL_RADIUS,
          borderBottomRightRadius: PANEL_RADIUS,
        }}
      >
        <TradeHeader coin={coin} pair={`${coin.ticker} / ${quote}`} onBack={onBack} />
        <View className="mt-4 flex-row items-end justify-between">
          <View>
            <Text className="text-[24px] font-strong tracking-tight text-ink">
              {formatUsd(coin.price, coin.decimals)}
            </Text>
            <View className="mt-1 flex-row items-center gap-1.5">
              <Text className="font-sans text-[12px] text-smoke">{coin.change}</Text>
              <Text
                className="text-[12px] font-semi"
                style={{ color: rising ? colors.success : colors.danger }}
              >
                {formatPercent(coin.changePercent)}
              </Text>
            </View>
          </View>
          <View className="flex-row gap-5 pb-0.5">
            <View className="items-end">
              <Text className="font-sans text-[11px] text-smoke">24h high</Text>
              <Text className="mt-1 text-[13px] font-strong text-ink">
                {formatUsd(coin.high, coin.decimals)}
              </Text>
            </View>
            <View className="items-end">
              <Text className="font-sans text-[11px] text-smoke">24h low</Text>
              <Text className="mt-1 text-[13px] font-strong text-ink">
                {formatUsd(coin.low, coin.decimals)}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View className="bg-white" style={{ marginTop: PANEL_GAP, borderRadius: PANEL_RADIUS }}>
        <View className="flex-row items-center gap-2 px-5 pt-5">
          <View className="h-[22px] w-[22px] items-center justify-center rounded-md bg-ink">
            <Svg width={13} height={13} viewBox="0 0 24 24" fill="none">
              <Path
                d="M4.5 16.5 9.5 11l3.5 3.5L19.5 7"
                stroke={colors.white}
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <Text className="text-[13.5px] font-strong text-ink">Line chart</Text>
        </View>
        <View className="mt-1">
          <PriceLineChart
            points={chartPoints}
            markerIndices={CHART_MARKER_INDICES}
            focusStartIndex={CHART_FOCUS_START_INDEX}
            highLabel={formatUsd(coin.high, coin.decimals)}
            lowLabel={formatUsd(coin.low, coin.decimals)}
          />
        </View>
        <View className="px-5 pb-4">
          <RangeSelector />
        </View>
      </View>

      <View
        className="flex-1 bg-white"
        style={{
          marginTop: PANEL_GAP,
          paddingHorizontal: SCREEN_PADDING,
          borderTopLeftRadius: PANEL_RADIUS,
          borderTopRightRadius: PANEL_RADIUS,
        }}
      >
        <View className="pt-5">
          <TradeTabs />
        </View>
        <View className="mt-3 flex-row items-center">
          <Text className="flex-1 text-[13.5px] font-strong text-ink">Bids</Text>
          <Text className="flex-1 pl-2.5 text-[13.5px] font-strong text-ink">Asks</Text>
        </View>
        <View className="mt-1">
          {orderBook.map((row, index) => (
            <OrderBookRowItem
              key={row.bidPrice}
              row={row}
              opacity={ORDER_BOOK_ROW_OPACITIES[index]}
            />
          ))}
        </View>
        <View className="flex-1" />
        <View style={{ paddingBottom: insets.bottom + 8 }}>
          <TradeActions ticker={coin.ticker} />
        </View>
      </View>
    </View>
  );
}
