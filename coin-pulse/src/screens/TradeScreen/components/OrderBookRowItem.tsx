import { Text, View } from 'react-native';

import { DEPTH_BAR_MAX_WIDTH } from '@/constants/layout';
import { colors } from '@/theme/colors';
import { OrderBookRowItemProps } from '../TradeScreen.types';

export default function OrderBookRowItem({ row, opacity }: OrderBookRowItemProps) {
  return (
    <View className="flex-row items-center py-[9px]" style={{ opacity }}>
      <Text className="font-sans w-[64px] text-[12px] text-ink">{row.bidPrice}</Text>
      <View className="flex-1 items-end justify-center pr-2.5">
        <View
          className="absolute bottom-0 right-1 top-0 rounded-sm"
          style={{ width: row.bidDepth * DEPTH_BAR_MAX_WIDTH, backgroundColor: colors.success, opacity: 0.16 }}
        />
        <Text className="font-sans text-[11px] text-ink">{row.bidVolume}</Text>
      </View>
      <View className="flex-1 items-start justify-center pl-2.5">
        <View
          className="absolute bottom-0 left-1 top-0 rounded-sm"
          style={{ width: row.askDepth * DEPTH_BAR_MAX_WIDTH, backgroundColor: colors.danger, opacity: 0.14 }}
        />
        <Text className="font-sans text-[11px] text-ink">{row.askVolume}</Text>
      </View>
      <Text className="font-sans w-[64px] text-right text-[12px] text-ink">{row.askPrice}</Text>
    </View>
  );
}
