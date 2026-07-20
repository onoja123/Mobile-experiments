import { useEffect, useMemo, useState } from 'react';
import type { CountdownParts } from '../interfaces/countdown.interface';

const DAY_MS = 86_400_000;
const HOUR_MS = 3_600_000;
const MINUTE_MS = 60_000;

function partsFrom(remainingMs: number): CountdownParts {
  const clamped = Math.max(0, remainingMs);
  return {
    days: String(Math.floor(clamped / DAY_MS)).padStart(2, '0'),
    hours: String(Math.floor((clamped % DAY_MS) / HOUR_MS)).padStart(2, '0'),
    minutes: String(Math.floor((clamped % HOUR_MS) / MINUTE_MS)).padStart(2, '0'),
  };
}

export function useCountdown(durationMs: number, paused = false): CountdownParts {
  const target = useMemo(() => Date.now() + durationMs, [durationMs]);
  const [parts, setParts] = useState(() => partsFrom(durationMs));

  useEffect(() => {
    if (paused) return undefined;
    const tick = () => setParts(partsFrom(target - Date.now()));
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [target, paused]);

  return parts;
}
