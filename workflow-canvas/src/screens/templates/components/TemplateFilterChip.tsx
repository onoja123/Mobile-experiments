import React from "react";
import { Pressable, Text } from "react-native";

import type { TemplateFilter } from "@/types";

export function TemplateFilterChip({ filter }: { filter: TemplateFilter }) {
  return (
    <Pressable
      className={`h-[54px] flex-row items-center gap-2.5 rounded-full px-6 ${
        filter.active ? "bg-ink" : "bg-white/80"
      }`}
    >
      <Text
        className={`font-jost-medium text-[16px] ${filter.active ? "text-white" : "text-ink"}`}
      >
        {filter.label}
      </Text>
      <Text
        className={`font-jost text-[15px] ${filter.active ? "text-white/50" : "text-fog"}`}
      >
        {filter.count}
      </Text>
    </Pressable>
  );
}
