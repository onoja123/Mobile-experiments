import React from "react";
import { View } from "react-native";
import { Plus } from "lucide-react-native";

import { colors } from "@/theme";
import type { CanvasPoint } from "@/types";

const HINT_ICON_SIZE = 15;

export function AddNodeHint({
  position,
  scale,
}: {
  position: CanvasPoint;
  scale: number;
}) {
  return (
    <View
      className="absolute"
      style={{ left: position.x * scale, top: position.y * scale }}
    >
      <Plus size={HINT_ICON_SIZE * scale} color={colors.ash} strokeWidth={2.5} />
    </View>
  );
}
