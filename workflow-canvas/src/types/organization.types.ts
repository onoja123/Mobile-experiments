import { UsageMetricKind } from "@/enums";

export type UsageMetric = {
  kind: UsageMetricKind;
  background: string;
  title: string;
  usageBadge: string;
  value: string;
  limit: string;
  filledCapsules: number;
  capsuleColor: string;
  capsuleDashColor: string;
};
