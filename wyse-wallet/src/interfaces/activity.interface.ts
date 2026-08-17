import { Chain } from '@/enums/chain.enum';

export type ActivityDirection = 'in' | 'out' | 'swap' | 'signed';

export interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  kind: string;
  direction: ActivityDirection;
  chain: Chain;
  time: string;
  fee: string;
  hash: string;
}

export interface ActivitySection {
  title: string;
  items: ActivityItem[];
}
