export function formatTokenAmount(usd: number, priceUsd: number, decimals: number): string {
  const quantity = priceUsd > 0 ? usd / priceUsd : 0;
  return quantity.toFixed(decimals);
}
