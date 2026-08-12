import { useState } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeIn, FadeInDown, LinearTransition } from 'react-native-reanimated';

import CoinIcon from '@/components/CoinIcon';
import Icon, { IconName } from '@/components/Icon';
import PressableScale from '@/components/PressableScale';
import { colors } from '@/theme';
import DetailStat from './DetailStat';
import { ActivityIconProps, ActivityRowProps } from './ActivityRow.types';

const DIRECTION_ICONS: Record<string, IconName> = {
  in: 'arrow-down',
  out: 'arrow-up',
  swap: 'swap',
};

function ActivityIcon({ item }: ActivityIconProps) {
  if (item.direction === 'signed') {
    return (
      <View className="h-[42px] w-[42px] items-center justify-center rounded-[14px] bg-paper">
        <CoinIcon chain={item.chain} size={26} />
      </View>
    );
  }
  return (
    <View className="h-[42px] w-[42px] items-center justify-center rounded-[14px] bg-paper">
      <Icon name={DIRECTION_ICONS[item.direction]} size={18} color={colors.accentInk} strokeWidth={2} />
      <View className="absolute -bottom-1 -right-1 rounded-full border-2 border-card">
        <CoinIcon chain={item.chain} size={15} />
      </View>
    </View>
  );
}

export default function ActivityRow({ item, index }: ActivityRowProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 55).duration(280)}
      layout={LinearTransition.springify().damping(18)}
      className="mt-2.5 overflow-hidden rounded-[18px] bg-card"
    >
      <PressableScale scaleTo={0.985} onPress={() => setExpanded((value) => !value)}>
        <View className="flex-row items-center p-3.5">
          <ActivityIcon item={item} />
          <View className="ml-3 flex-1">
            <Text className="font-semi text-[15px] text-ink">{item.title}</Text>
            <Text className="mt-1 font-sans text-[12px] text-smoke">{item.subtitle}</Text>
          </View>
          <View className="items-end">
            <Text className="font-semi text-[15px] text-ink">{item.amount}</Text>
            <Text className="mt-1 font-sans text-[12px] text-smoke">{item.kind}</Text>
          </View>
        </View>
      </PressableScale>
      {expanded && (
        <Animated.View entering={FadeIn.duration(200)} className="px-3.5 pb-3.5">
          <View className="flex-row border-t border-line pt-3">
            <DetailStat label="Time" value={item.time} />
            <DetailStat label="Network fee" value={item.fee} />
            <DetailStat label="Hash" value={item.hash} />
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
}
