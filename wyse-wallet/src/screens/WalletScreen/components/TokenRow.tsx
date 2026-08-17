import { useState } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeIn, FadeInDown, LinearTransition } from 'react-native-reanimated';

import CoinIcon from '@/components/CoinIcon';
import Icon from '@/components/Icon';
import PressableScale from '@/components/PressableScale';
import Sparkline from '@/components/Sparkline';
import { colors } from '@/theme';
import DetailStat from './DetailStat';
import { TokenRowProps } from './TokenRow.types';

export default function TokenRow({ token, index }: TokenRowProps) {
  const [expanded, setExpanded] = useState(false);
  const trend = token.positive ? colors.accentInk : colors.danger;

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 70).duration(300)}
      layout={LinearTransition.springify().damping(18)}
      className="mt-3 overflow-hidden rounded-[20px] bg-card"
    >
      <PressableScale scaleTo={0.985} onPress={() => setExpanded((value) => !value)}>
        <View className="flex-row items-center p-4">
          <CoinIcon chain={token.chain} size={38} />
          <View className="ml-3 flex-1">
            <Text className="font-semi text-[16px] text-ink">{token.name}</Text>
            <Text className="mt-1 font-sans text-[13px] text-smoke">{token.amount}</Text>
          </View>
          <View className="mr-3">
            <Sparkline points={token.spark} color={trend} />
          </View>
          <View className="items-end">
            <Text className="font-semi text-[15px] text-ink">{token.value}</Text>
            <Text
              className={`mt-1 font-sans text-[13px] ${token.positive ? 'text-accent-ink' : 'text-smoke'}`}
            >
              {token.change}
            </Text>
          </View>
        </View>
      </PressableScale>
      {expanded && (
        <Animated.View entering={FadeIn.duration(220)} className="px-4 pb-4">
          <View className="flex-row border-t border-line pt-3.5">
            <DetailStat label="24h high" value={token.high} />
            <DetailStat label="24h low" value={token.low} />
            <DetailStat label="Share" value={`${token.allocation}%`} />
          </View>
          <View className="mt-3.5 flex-row gap-2.5">
            <PressableScale
              wrapperStyle={{ flex: 1 }}
              className="h-11 flex-row items-center justify-center rounded-2xl bg-accent"
            >
              <Icon name="plus" size={15} color={colors.onAccent} strokeWidth={2.2} />
              <Text className="ml-1.5 font-semi text-[14px] text-on-accent">Buy</Text>
            </PressableScale>
            <PressableScale
              wrapperStyle={{ flex: 1 }}
              className="h-11 flex-row items-center justify-center rounded-2xl border border-line"
            >
              <Icon name="arrow-up-right" size={15} strokeWidth={2} />
              <Text className="ml-1.5 font-semi text-[14px] text-ink">Send</Text>
            </PressableScale>
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
}
