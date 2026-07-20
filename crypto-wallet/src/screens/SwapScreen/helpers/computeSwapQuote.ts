import type { SwapQuote } from '@/interfaces/swap.interface';
import type { Token } from '@/interfaces/token.interface';

const SWAP_FEE_RATE = 0.0025;
const SLIPPAGE = 0.005;

export function computeSwapQuote(from: Token, to: Token, amount: number): SwapQuote {
  const rate = from.priceUsd / to.priceUsd;
  const toAmount = amount * rate;
  const usdValue = amount * from.priceUsd;
  return {
    toAmount,
    rate,
    feeUsd: usdValue * SWAP_FEE_RATE,
    priceImpact: Math.min(0.04 + usdValue / 250000, 3.2),
    networkFeeUsd: from.feeUsd,
    minReceived: toAmount * (1 - SLIPPAGE),
  };
}
