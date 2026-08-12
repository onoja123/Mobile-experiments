import { Chain } from '@/enums/chain.enum';
import { Token } from '@/interfaces/token.interface';

export const tokens: Token[] = [
  {
    id: 'btc',
    chain: Chain.Bitcoin,
    name: 'Bitcoin',
    amount: '0.094 BTC',
    value: '$6,077.20',
    change: '+2.4%',
    positive: true,
    allocation: 47.3,
    spark: [38, 42, 40, 47, 45, 52, 50, 58, 61, 57, 64, 68],
    high: '$65,420',
    low: '$62,180',
  },
  {
    id: 'eth',
    chain: Chain.Ethereum,
    name: 'Ethereum',
    amount: '1.86 ETH',
    value: '$4,712.15',
    change: '+1.1%',
    positive: true,
    allocation: 36.7,
    spark: [50, 48, 53, 51, 56, 54, 52, 57, 55, 60, 58, 62],
    high: '$2,566',
    low: '$2,481',
  },
  {
    id: 'usdt',
    chain: Chain.Tether,
    name: 'Tether',
    amount: '2,058.25 USDT',
    value: '$2,058.25',
    change: '-0.1%',
    positive: false,
    allocation: 16.0,
    spark: [52, 51, 52, 50, 51, 50, 51, 49, 50, 50, 49, 48],
    high: '$1.001',
    low: '$0.998',
  },
];
