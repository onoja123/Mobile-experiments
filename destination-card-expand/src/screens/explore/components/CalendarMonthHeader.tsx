import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { colors, typography } from '@/theme';

type CalendarMonthHeaderProps = {
  monthLabel: string;
  canGoToPreviousMonth: boolean;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
};

export default function CalendarMonthHeader({
  monthLabel,
  canGoToPreviousMonth,
  onPreviousMonth,
  onNextMonth,
}: CalendarMonthHeaderProps) {
  return (
    <View className="flex-row items-center justify-between">
      <Pressable
        hitSlop={10}
        disabled={!canGoToPreviousMonth}
        onPress={onPreviousMonth}
        className="h-10 w-10 items-center justify-center"
      >
        <Feather
          name="chevron-left"
          size={22}
          color={canGoToPreviousMonth ? colors.ink : colors.fog}
        />
      </Pressable>
      <Text className="font-bold text-ink" style={typography.sectionTitle}>
        {monthLabel}
      </Text>
      <Pressable
        hitSlop={10}
        onPress={onNextMonth}
        className="h-10 w-10 items-center justify-center"
      >
        <Feather name="chevron-right" size={22} color={colors.ink} />
      </Pressable>
    </View>
  );
}
