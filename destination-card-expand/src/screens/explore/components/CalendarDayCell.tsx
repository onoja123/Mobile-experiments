import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { CALENDAR_CELL_SIZE } from '@/constants/layout';
import { typography } from '@/theme';
import type { CalendarDay } from '@/types';

type CalendarDayCellProps = {
  day: CalendarDay;
  checkIn: number | null;
  checkOut: number | null;
  onSelect: (time: number) => void;
};

export default function CalendarDayCell({
  day,
  checkIn,
  checkOut,
  onSelect,
}: CalendarDayCellProps) {
  const isCheckIn = day.time === checkIn && !day.outside;
  const isCheckOut = day.time === checkOut && !day.outside;
  const selected = isCheckIn || isCheckOut;
  const inRange =
    !day.outside &&
    checkIn !== null &&
    checkOut !== null &&
    day.time > checkIn &&
    day.time < checkOut;

  return (
    <Pressable
      disabled={day.disabled}
      onPress={() => onSelect(day.time)}
      style={{ width: CALENDAR_CELL_SIZE, height: CALENDAR_CELL_SIZE }}
      className="items-center justify-center"
    >
      {inRange && (
        <View className="absolute inset-x-0 inset-y-[7px] bg-mist" />
      )}
      {isCheckIn && checkOut !== null && (
        <View className="absolute inset-y-[7px] left-1/2 right-0 bg-mist" />
      )}
      {isCheckOut && (
        <View className="absolute inset-y-[7px] left-0 right-1/2 bg-mist" />
      )}
      <View
        className={`items-center justify-center rounded-full ${
          selected ? 'bg-pill' : ''
        }`}
        style={{ width: CALENDAR_CELL_SIZE - 8, height: CALENDAR_CELL_SIZE - 8 }}
      >
        <Text
          className={
            selected
              ? 'font-bold text-white'
              : day.outside || day.disabled
                ? 'font-sans text-muted/60'
                : 'font-semibold text-ink'
          }
          style={typography.callout}
        >
          {day.label}
        </Text>
      </View>
    </Pressable>
  );
}
