import type { AllocationEstimate } from '@/interfaces/allocation.interface';
import type { CountdownParts } from '@/interfaces/countdown.interface';
import type { Ipo, RelatedIpo } from '@/interfaces/ipo.interface';

export type IpoContentProps = {
  ipo: Ipo;
  related: RelatedIpo[];
  countdown: CountdownParts;
  paused: boolean;
  subscribed: boolean;
  demand: number;
  amount: number;
  onAmountChange: (amount: number) => void;
  estimate: AllocationEstimate;
  refreshing: boolean;
};
