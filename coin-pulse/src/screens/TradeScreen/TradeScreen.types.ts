import { Coin } from '@/interfaces/coin.interface';
import { OrderBookRow } from '@/interfaces/orderBookRow.interface';

export type TradeScreenProps = {
  coin: Coin;
  onBack: () => void;
};

export type TradeHeaderProps = {
  coin: Coin;
  pair: string;
  onBack: () => void;
};

export type TradeActionsProps = {
  ticker: string;
};

export type PriceLineChartProps = {
  points: number[];
  markerIndices: number[];
  focusStartIndex: number;
  highLabel: string;
  lowLabel: string;
};

export type OrderBookRowItemProps = {
  row: OrderBookRow;
  opacity: number;
};
