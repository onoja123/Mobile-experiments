import type { ReactNode } from 'react';

export interface PaymentMethodRowProps {
  label: string;
  icon: ReactNode;
  selected: boolean;
  onPress: () => void;
}
