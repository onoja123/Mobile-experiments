import type { PaymentMethod } from '@/enums';
import type { StageSheetContentProps } from './stage-sheet-content.interface';

export interface PaymentSheetProps extends StageSheetContentProps {
  method: PaymentMethod;
  onSelectMethod: (method: PaymentMethod) => void;
}
