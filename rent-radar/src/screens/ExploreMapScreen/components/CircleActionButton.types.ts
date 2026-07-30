export type CircleActionIcon = 'locate' | 'swap';

export interface CircleActionButtonProps {
  icon: CircleActionIcon;
  onPress?: () => void;
}
