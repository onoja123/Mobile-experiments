export function nextPriceEstimate(low: number, high: number): number {
  const pad = (high - low) * 0.12;
  return low + pad + Math.random() * (high - low - pad * 2);
}
