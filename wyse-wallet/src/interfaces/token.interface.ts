import { Chain } from '@/enums/chain.enum';

export interface Token {
  id: string;
  chain: Chain;
  name: string;
  amount: string;
  value: string;
  change: string;
  positive: boolean;
  allocation: number;
  spark: number[];
  high: string;
  low: string;
}
