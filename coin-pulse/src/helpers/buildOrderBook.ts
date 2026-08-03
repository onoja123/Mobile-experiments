import { ORDER_BOOK_LEVELS } from '@/data/trade';
import { Coin } from '@/interfaces/coin.interface';
import { OrderBookRow } from '@/interfaces/orderBookRow.interface';
import { formatUsd } from './formatUsd';

export function buildOrderBook(coin: Coin): OrderBookRow[] {
  const decimals = coin.price >= 1000 ? 0 : coin.decimals;

  return ORDER_BOOK_LEVELS.map((level) => ({
    bidPrice: formatUsd(coin.price * (1 - level.spread), decimals),
    bidVolume: level.bidVolume,
    bidDepth: level.bidDepth,
    askPrice: formatUsd(coin.price * (1 + level.spread), decimals),
    askVolume: level.askVolume,
    askDepth: level.askDepth,
  }));
}
