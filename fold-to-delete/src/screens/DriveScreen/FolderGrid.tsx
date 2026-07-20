import React from "react";
import { ScrollView, View } from "react-native";
import { GestureDetector, PanGesture } from "react-native-gesture-handler";
import Animated, { LinearTransition } from "react-native-reanimated";

import FolderCard from "@/components/FolderCard";
import { GRID_REFLOW_SPRING } from "@/constants/animations";
import {
  CARD_MARGIN_BOTTOM,
  CARD_WIDTH,
  COLUMN_STAGGER,
  GRID_COLUMNS,
  GRID_GAP,
  GRID_PADDING_TOP,
  GRID_PADDING_X,
} from "@/constants/folderGrid";
import type { Folder } from "@/types";

type FolderGridProps = {
  folders: Folder[];
  activeId: string | null;
  scrollEnabled: boolean;
  bottomPadding: number;
  buildPanGesture: (item: Folder) => PanGesture;
  registerCell: (id: string, ref: View | null) => void;
};

export default function FolderGrid({
  folders,
  activeId,
  scrollEnabled,
  bottomPadding,
  buildPanGesture,
  registerCell,
}: FolderGridProps) {
  return (
    <ScrollView
      scrollEnabled={scrollEnabled}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: GRID_PADDING_X,
        paddingTop: GRID_PADDING_TOP,
        paddingBottom: bottomPadding,
      }}
    >
      <View className="flex-row flex-wrap">
        {folders.map((item, i) => {
          const column = i % GRID_COLUMNS;
          return (
            <Animated.View
              key={item.id}
              layout={LinearTransition.springify()
                .damping(GRID_REFLOW_SPRING.damping)
                .stiffness(GRID_REFLOW_SPRING.stiffness)}
              style={{
                width: CARD_WIDTH,
                marginRight: column < GRID_COLUMNS - 1 ? GRID_GAP : 0,
                marginTop: COLUMN_STAGGER[column],
                marginBottom: CARD_MARGIN_BOTTOM,
              }}
            >
              <GestureDetector gesture={buildPanGesture(item)}>
                <View
                  ref={(r) => {
                    registerCell(item.id, r);
                  }}
                  collapsable={false}
                  style={{ opacity: activeId === item.id ? 0 : 1 }}
                >
                  <FolderCard item={item} width={CARD_WIDTH} />
                </View>
              </GestureDetector>
            </Animated.View>
          );
        })}
      </View>
    </ScrollView>
  );
}
