import { Pressable, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { TRADE_BUTTON_HEIGHT } from '@/constants/layout';
import { colors } from '@/theme/colors';
import { TradeActionsProps } from '../TradeScreen.types';

const ACTIONS = [
  { label: 'Buy', arrow: 'M7.5 16.5 16.5 7.5m0 0h-6.2m6.2 0v6.2' },
  { label: 'Sell', arrow: 'M7.5 7.5 16.5 16.5m0 0v-6.2m0 6.2h-6.2' },
];

export default function TradeActions({ ticker }: TradeActionsProps) {
  return (
    <View className="flex-row gap-3">
      {ACTIONS.map((action) => (
        <Pressable
          key={action.label}
          className="flex-1 flex-row items-center justify-center gap-2 rounded-2xl bg-ink active:opacity-80"
          style={{ height: TRADE_BUTTON_HEIGHT }}
        >
          <Text className="text-[15px] font-semi text-white">
            {action.label} {ticker}
          </Text>
          <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
            <Path
              d={action.arrow}
              stroke={colors.white}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </Pressable>
      ))}
    </View>
  );
}
