import React from "react";
import { Text, View } from "react-native";

import { CHART_HEIGHT } from "@/constants/chart";
import { ChartSegmentKind } from "@/enums";
import { colors } from "@/theme";
import type { ChartSegment } from "@/types";

import { HatchPattern } from "./HatchPattern";

const SEGMENT_RADIUS = 20;
const BADGE_OVERLAP = 16;

const FILL_BY_KIND: Partial<Record<ChartSegmentKind, string>> = {
  [ChartSegmentKind.Operations]: colors.barBlue,
  [ChartSegmentKind.DataTransfer]: colors.barPink,
};

export function ChartSegmentBar({ segment }: { segment: ChartSegment }) {
  const bottom = segment.from * CHART_HEIGHT;
  const height = (segment.to - segment.from) * CHART_HEIGHT;
  return (
    <>
      <View
        className="absolute left-0 right-0 overflow-hidden"
        style={{
          bottom,
          height,
          borderRadius: SEGMENT_RADIUS,
          backgroundColor: FILL_BY_KIND[segment.kind],
        }}
      >
        {segment.kind === ChartSegmentKind.Remaining && <HatchPattern />}
      </View>
      {segment.badge && (
        <View
          className="absolute items-center self-center rounded-full bg-ink px-3.5 py-2"
          style={{ bottom: segment.to * CHART_HEIGHT - BADGE_OVERLAP }}
        >
          <Text className="font-jost-medium text-[13px] text-white">
            {segment.badge}
          </Text>
        </View>
      )}
    </>
  );
}
