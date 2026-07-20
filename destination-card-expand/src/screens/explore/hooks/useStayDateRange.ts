import { useState } from 'react';

import { MS_PER_DAY } from '@/constants/calendar';

export function useStayDateRange() {
  const [checkIn, setCheckIn] = useState<number | null>(null);
  const [checkOut, setCheckOut] = useState<number | null>(null);

  const selectDay = (time: number) => {
    if (checkIn === null || checkOut !== null || time <= checkIn) {
      setCheckIn(time);
      setCheckOut(null);
    } else {
      setCheckOut(time);
    }
  };

  const nights =
    checkIn !== null && checkOut !== null
      ? Math.round((checkOut - checkIn) / MS_PER_DAY)
      : 0;

  return { checkIn, checkOut, nights, selectDay };
}
