import { useMemo, useState } from 'react';

import { MONTH_LABELS } from '@/constants/calendar';
import { buildCalendarMonth } from '@/helpers/buildCalendarMonth';

export function useCalendarMonth() {
  const [monthOffset, setMonthOffset] = useState(0);

  const today = new Date();
  const startOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  ).getTime();
  const shownMonth = new Date(
    today.getFullYear(),
    today.getMonth() + monthOffset,
    1,
  );

  const days = useMemo(
    () =>
      buildCalendarMonth(
        shownMonth.getFullYear(),
        shownMonth.getMonth(),
        startOfToday,
      ),
    [monthOffset],
  );

  const monthLabel =
    shownMonth.getFullYear() === today.getFullYear()
      ? MONTH_LABELS[shownMonth.getMonth()]
      : `${MONTH_LABELS[shownMonth.getMonth()]} ${shownMonth.getFullYear()}`;

  return {
    days,
    monthLabel,
    canGoToPreviousMonth: monthOffset > 0,
    goToPreviousMonth: () => setMonthOffset((offset) => offset - 1),
    goToNextMonth: () => setMonthOffset((offset) => offset + 1),
  };
}
