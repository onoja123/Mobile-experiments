import { TokenId } from '../enums/tokenId.enum';
import type { Asset, WalletProfile } from '../interfaces/wallet.interface';

export const WALLET_PROFILE: WalletProfile = {
  username: 'bogdanzhuk',
  address: '7xKXtg...4EpF',
};

export const WALLET_ASSETS: Asset[] = [
  { id: TokenId.Sol, name: 'Solana', symbol: 'SOL', quantity: 4.85, value: 332.94, change: -12.2 },
  { id: TokenId.Usdc, name: 'USDC', symbol: 'USDC', quantity: 237.81, value: 237.81, change: 0.01 },
  { id: TokenId.Eth, name: 'Ethereum', symbol: 'ETH', quantity: 0.305, value: 570.75, change: 18.4 },
];
