import { Pressable, Text, View } from 'react-native';

import { ACTIVE_TIME_RANGE, TIME_RANGES } from '@/data/trade';

export default function RangeSelector() {
  return (
    <View className="flex-row items-center justify-between">
      {TIME_RANGES.map((range) => {
        const active = range === ACTIVE_TIME_RANGE;
        return (
          <Pressable
            key={range}
            className={`h-8 min-w-8 items-center justify-center rounded-[10px] px-2 ${active ? 'bg-mist' : ''}`}
          >
            <Text className={`text-[12px] ${active ? 'font-strong text-ink' : 'font-sans text-smoke'}`}>
              {range}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
