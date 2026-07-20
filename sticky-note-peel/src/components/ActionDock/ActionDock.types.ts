import type { SharedValue } from 'react-native-reanimated';

export type ActionDockProps = {
  hovered: SharedValue<number>;
  triggered: SharedValue<number>;
};

export type DockButtonProps = ActionDockProps & {
  index: number;
};
