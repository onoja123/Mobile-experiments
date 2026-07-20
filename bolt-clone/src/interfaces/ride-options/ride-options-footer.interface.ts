import type { PaymentMethod } from '@/enums';

export interface RideOptionsFooterProps {
  method: PaymentMethod;
  onOpenPaymentSheet: () => void;
}
