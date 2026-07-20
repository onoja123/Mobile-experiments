import type { AllocationTier } from '../enums/allocationTier.enum';

export interface AllocationEstimate {
  shares: number;
  allocationPercent: number;
  totalUsd: number;
  tier: AllocationTier;
  tierScore: number;
}
