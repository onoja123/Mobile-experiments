import type { TokenId } from '../enums/tokenId.enum';

export interface Token {
  id: TokenId;
  name: string;
  symbol: string;
  network: string;
  color: string;
  priceUsd: number;
  balance: number;
  displayDecimals: number;
  feeUsd: number;
  eta: string;
}
