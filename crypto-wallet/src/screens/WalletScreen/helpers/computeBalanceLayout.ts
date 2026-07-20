import { formatSigned, formatSignedPercent } from '@/helpers';
import type { Gain } from '@/interfaces/wallet.interface';
import { colors } from '@/theme';
import type { BalanceFonts } from '../components/AnimatedBalance/AnimatedBalance.types';
import { PILL_GAP, PILL_PAD_X } from '@/constants/balanceCanvas';
import { DIGIT_COUNT, INT_DIGITS } from '@/constants/balanceDigits';

export function computeBalanceLayout(fonts: BalanceFonts, width: number, gain: Gain) {
  const measure = (char: string) => fonts.amount.measureText(char).width + 1;
  const cell = measure('0');
  const total = measure('$') + measure(',') + measure('.') + cell * DIGIT_COUNT;
  let cursor = (width - total) / 2;

  const staticChars: { char: string; x: number; color: string }[] = [];
  const digitX: number[] = [];
  const placeChar = (char: string, color: string) => {
    staticChars.push({ char, x: cursor, color });
    cursor += measure(char);
  };
  const placeDigits = (count: number) => {
    for (let i = 0; i < count; i += 1) {
      digitX.push(cursor);
      cursor += cell;
    }
  };

  placeChar('$', colors.ink);
  placeDigits(1);
  placeChar(',', colors.ink);
  placeDigits(INT_DIGITS - 1);
  placeChar('.', colors.cents);
  placeDigits(DIGIT_COUNT - INT_DIGITS);

  const gainText = formatSigned(gain.amount);
  const pctText = formatSignedPercent(gain.percent);
  const gainWidth = fonts.gain.measureText(gainText).width;
  const pillWidth = fonts.gain.measureText(pctText).width + PILL_PAD_X * 2;
  const gainStart = (width - (gainWidth + PILL_GAP + pillWidth)) / 2;
  const labelX = (width - fonts.label.measureText('Total Balance').width) / 2;
  const pillX = gainStart + gainWidth + PILL_GAP;

  return { staticChars, digitX, labelX, gainText, pctText, gainX: gainStart, pillX, pctX: pillX + PILL_PAD_X, pillWidth };
}
