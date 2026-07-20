import type { FeatherIconName } from '@/types';

export type IconCircleButtonProps = {
  name: FeatherIconName;
  size?: number;
  color?: string;
  onPress?: () => void;
  className?: string;
};
