import { UsageMetricKind } from "@/enums";
import { colors } from "@/theme";
import type { UsageMetric } from "@/types";

export const ORGANIZATION_TABS = ["Organization", "Teams", "Users"] as const;

export const USAGE_CAPSULE_COUNT = 8;

export const USAGE_METRICS: UsageMetric[] = [
  {
    kind: UsageMetricKind.Operations,
    background: colors.lavender,
    title: "Operations",
    usageBadge: "72% Used",
    value: "780",
    limit: "1 000",
    filledCapsules: 5,
    capsuleColor: colors.capsuleLavender,
    capsuleDashColor: colors.lavenderDash,
  },
  {
    kind: UsageMetricKind.DataTransfer,
    background: colors.frost,
    title: "Data transfer",
    usageBadge: "32% Used",
    value: "163",
    limit: "512.0 MB",
    filledCapsules: 3,
    capsuleColor: colors.capsuleBlue,
    capsuleDashColor: colors.frostDash,
  },
];
