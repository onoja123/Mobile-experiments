import type { RideOptionId } from '@/enums';
import type { RideOption } from './ride-option.interface';

export interface RideOptionListProps {
  options: RideOption[];
  selectedId: RideOptionId;
  onSelect: (id: RideOptionId) => void;
}
