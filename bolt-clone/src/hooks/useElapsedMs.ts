import { useEffect, useState } from 'react';

export function useElapsedMs(tickMs: number) {
  const [elapsedMs, setElapsedMs] = useState(0);

  useEffect(() => {
    const startedAt = Date.now();
    const id = setInterval(() => setElapsedMs(Date.now() - startedAt), tickMs);
    return () => clearInterval(id);
  }, [tickMs]);

  return elapsedMs;
}
