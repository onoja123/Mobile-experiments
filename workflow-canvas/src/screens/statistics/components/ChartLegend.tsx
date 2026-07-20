import React from "react";
import { Text, View } from "react-native";

import { CHART_LEGEND } from "@/data/usageChart";

export function ChartLegend() {
  return (
    <View className="mx-4 mt-3 flex-row gap-3">
      {CHART_LEGEND.map((item) => (
        <View
          key={item.label}
          className="h-[54px] flex-1 flex-row items-center justify-center gap-2.5 rounded-full bg-white"
        >
          <View
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <Text className="font-jost text-[16px] text-ink">{item.label}</Text>
        </View>
      ))}
    </View>
  );
}
