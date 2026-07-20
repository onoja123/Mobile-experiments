import type { TokenId } from '../enums/tokenId.enum';

export interface Gain {
  amount: number;
  percent: number;
}

export interface Asset {
  id: TokenId;
  name: string;
  symbol: string;
  quantity: number;
  value: number;
  change: number;
}

export interface WalletProfile {
  username: string;
  address: string;
}
