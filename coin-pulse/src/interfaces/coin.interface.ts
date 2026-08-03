import { PriceTrend } from '@/enums/priceTrend.enum';

export interface Coin {
  id: string;
  name: string;
  ticker: string;
  price: number;
  high: number;
  low: number;
  decimals: number;
  change: string;
  changePercent: number;
  trend: PriceTrend;
  badgeBg: string;
  badgeColor: string;
  sparkline: number[];
}
