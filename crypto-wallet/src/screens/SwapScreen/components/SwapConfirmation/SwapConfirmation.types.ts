import type { Token } from '@/interfaces/token.interface';

export type SwapConfirmationProps = {
  visible: boolean;
  fromToken: Token;
  toToken: Token;
  summary: string;
  onDone: () => void;
};
