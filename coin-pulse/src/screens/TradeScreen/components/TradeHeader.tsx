import { Pressable, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import CoinBadge from '@/components/CoinBadge';
import { TRADE_BADGE_SIZE } from '@/constants/layout';
import { colors } from '@/theme/colors';
import { TradeHeaderProps } from '../TradeScreen.types';

const BOOKMARK_PATH =
  'M7 4.4h10a1.3 1.3 0 0 1 1.3 1.3v14a.8.8 0 0 1-1.25.66L12 16.6l-5.05 3.76A.8.8 0 0 1 5.7 19.7v-14A1.3 1.3 0 0 1 7 4.4Z';

export default function TradeHeader({ coin, pair, onBack }: TradeHeaderProps) {
  return (
    <View className="flex-row items-center justify-between">
      <Pressable className="h-10 w-10 items-start justify-center active:opacity-60" onPress={onBack}>
        <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
          <Path
            d="M14.5 5.5 8 12l6.5 6.5"
            stroke={colors.ink}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </Pressable>
      <Pressable className="flex-row items-center gap-1.5 active:opacity-60">
        <CoinBadge coin={coin} size={TRADE_BADGE_SIZE} />
        <Text className="text-[15px] font-strong text-ink">{pair}</Text>
        <Svg width={12} height={12} viewBox="0 0 24 24" fill="none">
          <Path
            d="m6 9.5 6 6 6-6"
            stroke={colors.ink}
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </Pressable>
      <Pressable className="h-10 w-10 items-end justify-center active:opacity-60">
        <Svg width={20} height={20} viewBox="0 0 24 24">
          <Path d={BOOKMARK_PATH} fill={colors.ink} />
        </Svg>
      </Pressable>
    </View>
  );
}
