import type { IncomingTransaction } from '../interfaces/transaction.interface';

export const INCOMING_TRANSACTIONS: IncomingTransaction[] = [
  { id: 'tx1', from: 'maya.eth', amount: '+0.42 ETH', fiat: '$1,023.76', time: '2h ago' },
  { id: 'tx2', from: 'kofi.eth', amount: '+120 USDC', fiat: '$120.00', time: 'Yesterday' },
  { id: 'tx3', from: '0x8C4d…1B2e', amount: '+0.85 SOL', fiat: '$126.07', time: 'Jul 12' },
];
