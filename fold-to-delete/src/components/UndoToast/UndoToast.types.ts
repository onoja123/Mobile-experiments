import type { Folder } from "@/types";

export type UndoToastProps = {
  item: Folder;
  top: number;
  onUndo: () => void;
  onDone: () => void;
};
