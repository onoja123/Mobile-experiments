import React from "react";
import { Dimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import DeleteZone from "@/components/DeleteZone";
import UndoToast from "@/components/UndoToast";
import { GRID_BOTTOM_CLEARANCE } from "@/constants/folderGrid";
import {
  DELETE_ZONE_BOTTOM_GAP,
  DELETE_ZONE_HEIGHT,
  TOAST_TOP_GAP,
} from "@/constants/layout";
import { FOLDERS } from "@/data/folders";
import { useDragToDelete } from "@/hooks/useDragToDelete";
import { useFolderList } from "@/hooks/useFolderList";

import DragOverlay from "./DragOverlay";
import DriveHeader from "./DriveHeader";
import FolderGrid from "./FolderGrid";

const WINDOW_HEIGHT = Dimensions.get("window").height;

export default function DriveScreen() {
  const insets = useSafeAreaInsets();
  const zoneBottom = insets.bottom + DELETE_ZONE_BOTTOM_GAP;
  const zoneTop = WINDOW_HEIGHT - zoneBottom - DELETE_ZONE_HEIGHT;

  const { folders, toast, removeFolder, undoRemove, dismissToast } =
    useFolderList(FOLDERS);
  const { active, dragValues, registerCell, buildPanGesture } =
    useDragToDelete(zoneTop, removeFolder);

  return (
    <View className="flex-1 bg-canvas">
      <DriveHeader topInset={insets.top} />

      <FolderGrid
        folders={folders}
        activeId={active?.item.id ?? null}
        scrollEnabled={!active}
        bottomPadding={DELETE_ZONE_HEIGHT + zoneBottom + GRID_BOTTOM_CLEARANCE}
        buildPanGesture={buildPanGesture}
        registerCell={registerCell}
      />

      <DeleteZone
        dragging={dragValues.dragging}
        hover={dragValues.hover}
        height={DELETE_ZONE_HEIGHT}
        bottom={zoneBottom}
      />

      {active && <DragOverlay drag={active} values={dragValues} />}

      {toast && (
        <UndoToast
          key={toast.key}
          item={toast.item}
          top={insets.top + TOAST_TOP_GAP}
          onUndo={undoRemove}
          onDone={dismissToast}
        />
      )}
    </View>
  );
}
