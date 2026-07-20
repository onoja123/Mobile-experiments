import type { Gain } from '@/interfaces/wallet.interface';

export function gainFrom(previous: number, next: number): Gain {
  const amount = next - previous;
  const percent = (amount / previous) * 100;
  return { amount, percent };
}
