export const PaymentMethod = {
  CASH: 'cash',
  APPLE_PAY: 'apple',
} as const;

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
