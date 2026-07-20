import type { GradientPair } from '../types/gradient.types';

export interface Recipient {
  id: string;
  name: string;
  address: string;
  verified: boolean;
  gradient: GradientPair;
}
