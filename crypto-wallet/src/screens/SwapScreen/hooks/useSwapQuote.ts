import { useCallback } from 'react';
import { useDelayedComputation } from '@/hooks/useDelayedComputation';
import type { Token } from '@/interfaces/token.interface';
import { computeSwapQuote } from '../helpers/computeSwapQuote';

const QUOTE_MS = 380;

export function useSwapQuote(from: Token, to: Token, amount: number) {
  const compute = useCallback(() => computeSwapQuote(from, to, amount), [from, to, amount]);
  const { value: quote, refreshing } = useDelayedComputation(compute, QUOTE_MS);
  return { quote, refreshing };
}
