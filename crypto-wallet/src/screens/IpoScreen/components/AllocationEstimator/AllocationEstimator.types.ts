import type { AllocationEstimate } from '@/interfaces/allocation.interface';
import type { Ipo } from '@/interfaces/ipo.interface';

export type AllocationEstimatorProps = {
  ipo: Ipo;
  amount: number;
  onAmountChange: (amount: number) => void;
  estimate: AllocationEstimate;
  refreshing: boolean;
};
