export function nextBalance(previous: number): number {
  const drift = 0.96 + Math.random() * 0.08;
  const next = previous * drift;
  return Math.min(Math.max(next, 1200), 9500);
}
