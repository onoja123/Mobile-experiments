export interface SwapQuote {
  toAmount: number;
  rate: number;
  feeUsd: number;
  priceImpact: number;
  networkFeeUsd: number;
  minReceived: number;
}
