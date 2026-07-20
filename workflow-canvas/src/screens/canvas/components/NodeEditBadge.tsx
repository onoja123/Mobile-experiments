import React from "react";
import { View } from "react-native";
import { Pencil } from "lucide-react-native";

import { colors, shadows } from "@/theme";
import type { CanvasPoint } from "@/types";

const BADGE_SIZE = 34;
const BADGE_ICON_SIZE = 14;

export function NodeEditBadge({
  position,
  scale,
}: {
  position: CanvasPoint;
  scale: number;
}) {
  return (
    <View
      className="absolute items-center justify-center bg-white"
      style={{
        left: position.x * scale,
        top: position.y * scale,
        width: BADGE_SIZE * scale,
        height: BADGE_SIZE * scale,
        borderRadius: (BADGE_SIZE / 2) * scale,
        ...shadows.badge,
      }}
    >
      <Pencil size={BADGE_ICON_SIZE * scale} color={colors.ink} strokeWidth={2} />
    </View>
  );
}
