import { useCallback } from 'react';
import { useDelayedComputation } from '@/hooks/useDelayedComputation';
import type { Ipo } from '@/interfaces/ipo.interface';
import { computeAllocationEstimate } from '../helpers/computeAllocationEstimate';

const ESTIMATE_MS = 420;

export function useAllocationEstimate(ipo: Ipo, amountUsd: number) {
  const compute = useCallback(
    () => computeAllocationEstimate(ipo, amountUsd),
    [ipo, amountUsd],
  );
  const { value: estimate, refreshing } = useDelayedComputation(compute, ESTIMATE_MS);
  return { estimate, refreshing };
}
