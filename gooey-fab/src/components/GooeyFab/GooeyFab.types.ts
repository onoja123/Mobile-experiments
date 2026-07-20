import type { ReactNode } from "react";
import type { SharedValue } from "react-native-reanimated";

export type GooeyFabProps = {
  onVideoCall?: () => void;
  onVoiceCall?: () => void;
};

export type FabActionButtonProps = {
  drive: SharedValue<number>;
  offsetY: number;
  interactive: boolean;
  onPress: () => void;
  children: ReactNode;
};
