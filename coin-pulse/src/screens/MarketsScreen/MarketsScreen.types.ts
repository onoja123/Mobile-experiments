import { MarketFilter } from '@/enums/marketFilter.enum';
import { Coin } from '@/interfaces/coin.interface';

export type MarketsScreenProps = {
  onOpenCoin: (coin: Coin) => void;
};

export type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export type FilterChipsProps = {
  active: MarketFilter;
  onSelect: (filter: MarketFilter) => void;
};

export type MoverCardProps = {
  coin: Coin;
  onPress: () => void;
};
