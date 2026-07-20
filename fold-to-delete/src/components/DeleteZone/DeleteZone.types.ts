import type { SharedValue } from "react-native-reanimated";

export type DeleteZoneProps = {
  dragging: SharedValue<number>;
  hover: SharedValue<number>;
  height: number;
  bottom: number;
};
