export function formatSignedPercent(value: number): string {
  const sign = value >= 0 ? '+' : '-';
  return `${sign}${Math.abs(value).toFixed(2)}%`;
}
