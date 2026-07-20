import { useEffect, useRef, useState } from 'react';

export function useDelayedComputation<T>(compute: () => T, delayMs: number) {
  const [value, setValue] = useState<T>(compute);
  const [refreshing, setRefreshing] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setRefreshing(true);
    const timer = setTimeout(() => {
      setValue(compute());
      setRefreshing(false);
    }, delayMs);
    return () => clearTimeout(timer);
  }, [compute, delayMs]);

  return { value, refreshing };
}
