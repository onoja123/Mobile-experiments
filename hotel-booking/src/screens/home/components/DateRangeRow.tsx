import { Pressable, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { palette } from '@/theme';

type DateRangeRowProps = {
  dates: string[];
};

export function DateRangeRow({ dates }: DateRangeRowProps) {
  return (
    <View className="flex-row gap-3">
      {dates.map((date) => (
        <Pressable
          key={date}
          className="h-12 flex-1 flex-row items-center justify-between rounded-full border border-line px-4 active:bg-chip"
        >
          <Text className="font-jakarta-medium text-[14px] text-ink">{date}</Text>
          <Feather name="chevron-down" size={16} color={palette.muted} />
        </Pressable>
      ))}
    </View>
  );
}
