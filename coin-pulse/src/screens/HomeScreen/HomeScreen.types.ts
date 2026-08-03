import { Coin } from '@/interfaces/coin.interface';

export type HomeScreenProps = {
  onOpenCoin: (coin: Coin) => void;
};
