import { useCallback, useEffect, useState } from 'react';

const DEMAND_TICK_MS = 5200;
const DEMAND_CAP = 97;
const SUBSCRIBE_BUMP = 1.6;

export function useDemandTicker(initialPercent: number, active: boolean) {
  const [demand, setDemand] = useState(initialPercent);

  useEffect(() => {
    if (!active) return undefined;
    const timer = setInterval(
      () => setDemand((current) => Math.min(DEMAND_CAP, current + 0.4 + Math.random() * 0.8)),
      DEMAND_TICK_MS,
    );
    return () => clearInterval(timer);
  }, [active]);

  const bump = useCallback(() => {
    setDemand((current) => Math.min(DEMAND_CAP, current + SUBSCRIBE_BUMP));
  }, []);

  return { demand, bump };
}
