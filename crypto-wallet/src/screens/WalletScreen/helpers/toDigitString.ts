import { DIGIT_COUNT } from '@/constants/balanceDigits';

export function toDigitString(value: number): string {
  const clamped = Math.min(Math.max(value, 1000), 9999.99);
  return Math.round(clamped * 100)
    .toString()
    .padStart(DIGIT_COUNT, '0');
}
