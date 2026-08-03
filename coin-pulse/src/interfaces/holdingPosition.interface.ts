import { Coin } from './coin.interface';

export interface HoldingPosition {
  coin: Coin;
  amount: number;
  value: number;
  allocation: number;
}
