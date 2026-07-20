import React from "react";
import { Pressable, Text, View } from "react-native";
import { ChevronDown } from "lucide-react-native";

import { CHART_HEIGHT } from "@/constants/chart";
import {
  CHART_COLUMNS,
  CHART_Y_AXIS_LABELS,
  CHART_YEAR,
} from "@/data/usageChart";
import { colors } from "@/theme";

import { ChartSegmentBar } from "./ChartSegmentBar";

export function StatisticsChartCard() {
  return (
    <View className="mx-4 mt-4 rounded-[36px] bg-white p-5">
      <View className="flex-row items-center justify-between px-1 pt-1">
        <Text className="font-jost-bold text-[24px] text-ink">Statistics</Text>
        <Pressable className="h-[44px] flex-row items-center gap-1.5 rounded-full bg-chip px-5">
          <Text className="font-jost-medium text-[15px] text-ink">
            {CHART_YEAR}
          </Text>
          <ChevronDown size={16} color={colors.ink} strokeWidth={2} />
        </Pressable>
      </View>

      <View className="mt-6 flex-row px-1">
        <View
          className="mr-3 justify-between py-0.5"
          style={{ height: CHART_HEIGHT }}
        >
          {CHART_Y_AXIS_LABELS.map((label) => (
            <Text key={label} className="font-jost text-[13px] text-fog">
              {label}
            </Text>
          ))}
        </View>
        <View className="flex-1 flex-row gap-4">
          {CHART_COLUMNS.map((column) => (
            <View key={column.label} className="flex-1">
              <View style={{ height: CHART_HEIGHT }}>
                {column.segments.map((segment, index) => (
                  <ChartSegmentBar key={index} segment={segment} />
                ))}
              </View>
              <Text className="mt-3 text-center font-jost text-[13px] text-fog">
                {column.label}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
