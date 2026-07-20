import { AllocationTier } from '@/enums/allocationTier.enum';
import type { AllocationEstimate } from '@/interfaces/allocation.interface';
import type { Ipo } from '@/interfaces/ipo.interface';

function tierFor(allocationPercent: number): { tier: AllocationTier; tierScore: number } {
  if (allocationPercent >= 80) return { tier: AllocationTier.High, tierScore: 0.92 };
  if (allocationPercent >= 55) return { tier: AllocationTier.Medium, tierScore: 0.6 };
  return { tier: AllocationTier.Low, tierScore: 0.3 };
}

export function computeAllocationEstimate(ipo: Ipo, amountUsd: number): AllocationEstimate {
  const midPrice = (ipo.priceLow + ipo.priceHigh) / 2;
  const oversubscription = ipo.demandPercent / 100 + 0.55;
  const sizePressure = Math.min(0.5, amountUsd / ipo.maxInvestment) * 0.9;
  const allocationPercent = Math.max(
    18,
    Math.min(96, Math.round((1 / oversubscription - sizePressure) * 130)),
  );
  const filledUsd = amountUsd * (allocationPercent / 100);
  const shares = Math.floor(filledUsd / midPrice);
  return {
    shares,
    allocationPercent,
    totalUsd: shares * midPrice,
    ...tierFor(allocationPercent),
  };
}
