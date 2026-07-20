import React from "react";
import { Text, View } from "react-native";
import { ArrowLeftRight, Settings, type LucideIcon } from "lucide-react-native";

import { USAGE_CAPSULE_COUNT } from "@/data/organizationUsage";
import { UsageMetricKind } from "@/enums";
import { colors } from "@/theme";
import type { UsageMetric } from "@/types";

import { UsageCapsuleMeter } from "./UsageCapsuleMeter";

const ICON_BY_KIND: Record<UsageMetricKind, LucideIcon> = {
  [UsageMetricKind.Operations]: Settings,
  [UsageMetricKind.DataTransfer]: ArrowLeftRight,
};

export function UsageCard({ metric }: { metric: UsageMetric }) {
  const Icon = ICON_BY_KIND[metric.kind];
  return (
    <View
      className="rounded-[36px] p-6"
      style={{ backgroundColor: metric.background }}
    >
      <View className="flex-row items-center">
        <View className="h-[56px] w-[56px] items-center justify-center rounded-full bg-white">
          <Icon size={20} color={colors.ink} strokeWidth={1.8} />
        </View>
        <Text className="ml-4 flex-1 font-jost-bold text-[22px] text-ink">
          {metric.title}
        </Text>
        <View className="rounded-full bg-ink px-4 py-2.5">
          <Text className="font-jost-medium text-[13px] text-white">
            {metric.usageBadge}
          </Text>
        </View>
      </View>

      <View className="mt-5 flex-row items-baseline">
        <Text className="font-jost-semibold text-[64px] leading-[70px] text-ink">
          {metric.value}
        </Text>
        <Text className="ml-2 font-jost text-[16px] text-fog">
          / {metric.limit}
        </Text>
      </View>

      <UsageCapsuleMeter
        filled={metric.filledCapsules}
        total={USAGE_CAPSULE_COUNT}
        color={metric.capsuleColor}
        dashColor={metric.capsuleDashColor}
      />
    </View>
  );
}
