import { FEATURED_IPO, RELATED_IPOS } from '@/data/ipos';
import { useSimulatedLoading } from '@/hooks/useSimulatedLoading';

const LOAD_MS = 1200;

export function useIpoMarket() {
  const loading = useSimulatedLoading(LOAD_MS);
  return { ipo: FEATURED_IPO, related: RELATED_IPOS, loading };
}
