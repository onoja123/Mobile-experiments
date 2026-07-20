import type { SharedValue } from "react-native-reanimated";

import type { Folder } from "./folder.types";

export type ActiveDrag = {
  item: Folder;
  x: number;
  y: number;
  width: number;
};

export type DeletedFolder = {
  item: Folder;
  index: number;
};

export type FolderToast = {
  item: Folder;
  key: number;
};

export type DragSharedValues = {
  translationX: SharedValue<number>;
  translationY: SharedValue<number>;
  lift: SharedValue<number>;
  vanish: SharedValue<number>;
  dragging: SharedValue<number>;
  hover: SharedValue<number>;
  zoneProximity: SharedValue<number>;
};
