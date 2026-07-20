import type { RideOptionId } from '@/enums';

export interface RideOption {
  id: RideOptionId;
  emoji: string;
  title: string;
  eta: string;
  seats: number | null;
  subtitle: string | null;
  price: string;
  originalPrice: string | null;
  isBusy: boolean;
  tag: string | null;
}
