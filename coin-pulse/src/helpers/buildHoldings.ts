import { COINS } from '@/data/coins';
import { HOLDINGS } from '@/data/holdings';
import { HoldingPosition } from '@/interfaces/holdingPosition.interface';

export function buildHoldings(): { positions: HoldingPosition[]; total: number } {
  const valued = HOLDINGS.flatMap((holding) => {
    const coin = COINS.find((candidate) => candidate.id === holding.coinId);

    return coin ? [{ coin, amount: holding.amount, value: coin.price * holding.amount }] : [];
  });

  const total = valued.reduce((sum, entry) => sum + entry.value, 0);

  const positions = valued
    .map((entry) => ({ ...entry, allocation: total > 0 ? entry.value / total : 0 }))
    .sort((a, b) => b.value - a.value);

  return { positions, total };
}
