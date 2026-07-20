import React from "react";
import { Text, View } from "react-native";

import FolderIcon from "@/components/FolderIcon";
import { shadows } from "@/theme/shadows";

import type { FolderCardProps } from "./FolderCard.types";

const ICON_WIDTH_RATIO = 0.82;

export default function FolderCard({ item, width, floating }: FolderCardProps) {
  return (
    <View className="items-center" style={floating && shadows.floatingCard}>
      <FolderIcon color={item.color} width={width * ICON_WIDTH_RATIO} />
      <Text
        numberOfLines={1}
        className="mt-2 text-center text-[13px] font-semibold text-ink"
      >
        {item.name}
      </Text>
      <Text className="mt-0.5 text-center text-[10px] text-sub">
        {item.count} items
      </Text>
    </View>
  );
}
