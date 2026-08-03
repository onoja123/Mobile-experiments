import { Coin } from '@/interfaces/coin.interface';

export type MarketRowProps = {
  coin: Coin;
  isLast: boolean;
  onPress: () => void;
};
