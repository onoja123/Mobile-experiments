import type { Recipient } from '../interfaces/recipient.interface';

export const RECENT_RECIPIENTS: Recipient[] = [
  {
    id: 'maya',
    name: 'maya.eth',
    address: '0x3F2aC8b1e94dD7f21A6c09E14bD24c5a83f09c41',
    verified: true,
    gradient: ['#B9A6F5', '#7A5CF0'],
  },
  {
    id: 'kofi',
    name: 'kofi.eth',
    address: '0x8C4dE2a91bF07c3341D6b88A5e2f19cD40aB1B2e',
    verified: true,
    gradient: ['#F3B8DC', '#E86AA6'],
  },
  {
    id: 'lena',
    name: 'lena.eth',
    address: '0xA1f49C7d20E85b6634cB90D1f5a8E27b93cD55f8',
    verified: true,
    gradient: ['#A6D8F5', '#4A90E2'],
  },
  {
    id: 'ade',
    name: 'ade.eth',
    address: '0x5E92bD4Fa8C1073Fa2261B09E7cD84a51Bf47A93',
    verified: true,
    gradient: ['#F5D6A6', '#F0A35C'],
  },
  {
    id: 'vault',
    name: 'Vault',
    address: '0xD70b3E6a54F28C91b4A3fE0862dC11a97E64C8d5',
    verified: false,
    gradient: ['#C4C9D4', '#8A93A6'],
  },
];

export const PASTED_RECIPIENT: Recipient = {
  id: 'pasted',
  name: 'bogdan.eth',
  address: '0x7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
  verified: true,
  gradient: ['#9BE8C5', '#2FB57E'],
};
