import { PaymentMethod } from '@/enums';

export const PAYMENT_METHOD_LABELS: Record<PaymentMethod, string> = {
  [PaymentMethod.CASH]: 'Cash',
  [PaymentMethod.APPLE_PAY]: 'Apple Pay',
};
