import React from 'react';
import { Text, View } from 'react-native';

import { WEEKDAY_LABELS } from '@/constants/calendar';
import { CALENDAR_CELL_SIZE } from '@/constants/layout';
import { typography } from '@/theme';
import type { CalendarDay } from '@/types';

import CalendarDayCell from './CalendarDayCell';

type CalendarGridProps = {
  days: CalendarDay[];
  checkIn: number | null;
  checkOut: number | null;
  onSelectDay: (time: number) => void;
};

export default function CalendarGrid({
  days,
  checkIn,
  checkOut,
  onSelectDay,
}: CalendarGridProps) {
  return (
    <>
      <View className="mt-3 flex-row">
        {WEEKDAY_LABELS.map((weekday) => (
          <View
            key={weekday}
            style={{ width: CALENDAR_CELL_SIZE }}
            className="items-center"
          >
            <Text className="font-sans text-muted" style={typography.caption}>
              {weekday}
            </Text>
          </View>
        ))}
      </View>

      <View className="mt-1 flex-row flex-wrap">
        {days.map((day) => (
          <CalendarDayCell
            key={day.key}
            day={day}
            checkIn={checkIn}
            checkOut={checkOut}
            onSelect={onSelectDay}
          />
        ))}
      </View>
    </>
  );
}
