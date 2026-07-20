import type { RideOption } from './ride-option.interface';

export interface RideOptionRowProps {
  option: RideOption;
  isSelected: boolean;
  onPress: () => void;
}
