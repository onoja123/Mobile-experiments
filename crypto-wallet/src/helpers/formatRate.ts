export function formatRate(rate: number): string {
  if (rate >= 1) {
    return rate.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  return rate.toFixed(6);
}
