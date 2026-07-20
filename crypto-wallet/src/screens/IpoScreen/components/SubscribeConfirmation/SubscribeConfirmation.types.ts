import type { AllocationEstimate } from '@/interfaces/allocation.interface';
import type { Ipo } from '@/interfaces/ipo.interface';

export type SubscribeConfirmationProps = {
  visible: boolean;
  ipo: Ipo;
  amountUsd: number;
  estimate: AllocationEstimate;
  bottomInset: number;
  onCancel: () => void;
  onDone: () => void;
};
