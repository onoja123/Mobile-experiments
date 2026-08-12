export type IconName =
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'bell'
  | 'arrow-up-right'
  | 'plus'
  | 'swap'
  | 'arrow-down'
  | 'arrow-up'
  | 'wallet'
  | 'coins'
  | 'dollar';

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}
