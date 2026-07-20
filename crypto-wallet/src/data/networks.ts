import { NetworkId } from '../enums/networkId.enum';
import type { Network } from '../interfaces/network.interface';

export const NETWORKS: Network[] = [
  {
    id: NetworkId.Ethereum,
    name: 'Ethereum',
    color: '#627EEA',
    address: '0x7f4E2aC8b1e94dD7f21A6c09E14bD24c5a83f9c41',
  },
  {
    id: NetworkId.Base,
    name: 'Base',
    color: '#0052FF',
    address: '0x7f4E2aC8b1e94dD7f21A6c09E14bD24c5a83f9c41',
  },
  {
    id: NetworkId.Solana,
    name: 'Solana',
    color: '#9945FF',
    address: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
  },
  {
    id: NetworkId.Polygon,
    name: 'Polygon',
    color: '#8247E5',
    address: '0x7f4E2aC8b1e94dD7f21A6c09E14bD24c5a83f9c41',
  },
];
