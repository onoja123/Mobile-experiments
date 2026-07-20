import type { Token } from '@/interfaces/token.interface';

export interface SwapCardProps {
  tokenA: Token;
  tokenB: Token;
  flipped: boolean;
  fromToken: Token;
  amount: string;
  toAmountText: string;
  rateText: string;
  refreshing: boolean;
  onFlip: () => void;
  onPressChipA: () => void;
  onPressChipB: () => void;
  onMax: () => void;
}
