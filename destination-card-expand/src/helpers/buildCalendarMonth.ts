import type { CalendarDay } from '@/types';

export function buildCalendarMonth(
  year: number,
  month: number,
  minTime: number,
): CalendarDay[] {
  const firstDow = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: CalendarDay[] = [];

  for (let i = 0; i < firstDow; i++) {
    days.push({ key: `b${i}`, label: '', time: 0, outside: true, disabled: true });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const time = new Date(year, month, d).getTime();
    days.push({
      key: `d${d}`,
      label: String(d).padStart(2, '0'),
      time,
      outside: false,
      disabled: time < minTime,
    });
  }
  let next = 1;
  while (days.length % 7 !== 0) {
    days.push({
      key: `n${next}`,
      label: String(next++).padStart(2, '0'),
      time: 0,
      outside: true,
      disabled: true,
    });
  }
  return days;
}
