import { Text, View } from 'react-native';

import { CalendarDay, DayState } from './CalendarDay';

const SWEEP_STEP_MS = 16;
const DAY_MS = 86_400_000;
const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

type CalendarPanelProps = {
  monthAnchor: Date;
  start: Date | null;
  end: Date | null;
  onSelectDay: (date: Date) => void;
};

export function CalendarPanel({ monthAnchor, start, end, onSelectDay }: CalendarPanelProps) {
  const year = monthAnchor.getFullYear();
  const month = monthAnchor.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (Date | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];
  while (cells.length % 7 !== 0) cells.push(null);
  const rows = Array.from({ length: cells.length / 7 }, (_, i) => cells.slice(i * 7, i * 7 + 7));

  const dayState = (date: Date): DayState => {
    const t = date.getTime();
    if (start && t === start.getTime()) return 'start';
    if (end && t === end.getTime()) return 'end';
    if (start && end && t > start.getTime() && t < end.getTime()) return 'range';
    return 'none';
  };

  const sweepDelay = (date: Date) =>
    start ? Math.max(0, Math.round((date.getTime() - start.getTime()) / DAY_MS)) * SWEEP_STEP_MS : 0;

  return (
    <View className="pt-4">
      <Text className="text-center font-jakarta-semibold text-[14px] text-ink">
        {MONTHS[month]} {year}
      </Text>
      <View className="mt-3 flex-row">
        {WEEKDAYS.map((weekday, index) => (
          <Text
            key={index}
            className="flex-1 text-center font-jakarta text-[11px] text-muted"
          >
            {weekday}
          </Text>
        ))}
      </View>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} className="mt-1 flex-row">
          {row.map((date, cellIndex) =>
            date ? (
              <CalendarDay
                key={date.getTime()}
                day={date.getDate()}
                state={dayState(date)}
                sweepDelay={sweepDelay(date)}
                onPress={() => onSelectDay(date)}
              />
            ) : (
              <View key={`empty-${cellIndex}`} className="h-11 flex-1" />
            ),
          )}
        </View>
      ))}
    </View>
  );
}
