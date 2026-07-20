import { ChartSegmentKind } from "@/enums";
import { colors } from "@/theme";
import type { ChartColumn, ChartLegendItem } from "@/types";

export const CHART_YEAR = "2025";

export const CHART_Y_AXIS_LABELS = [
  "1.0",
  "0.9",
  "0.8",
  "0.7",
  "0.6",
  "0.5",
  "0.4",
  "0.3",
  "0.2",
  "0.1",
];

export const CHART_LEGEND: ChartLegendItem[] = [
  { color: colors.barBlue, label: "Operations" },
  { color: colors.barPink, label: "Data transfer" },
];

export const CHART_COLUMNS: ChartColumn[] = [
  {
    label: "27 Jun",
    segments: [
      { from: 0.06, to: 0.44, kind: ChartSegmentKind.Operations },
      { from: 0.48, to: 0.9, kind: ChartSegmentKind.DataTransfer },
      { from: 0.94, to: 1, kind: ChartSegmentKind.Remaining },
    ],
  },
  {
    label: "28 Jun",
    segments: [
      { from: 0.06, to: 0.3, kind: ChartSegmentKind.Operations },
      { from: 0.34, to: 0.66, kind: ChartSegmentKind.DataTransfer },
      { from: 0.7, to: 1, kind: ChartSegmentKind.Remaining },
    ],
  },
  {
    label: "29 Jun",
    segments: [
      { from: 0.06, to: 0.42, kind: ChartSegmentKind.Operations, badge: "37%" },
      {
        from: 0.46,
        to: 0.78,
        kind: ChartSegmentKind.DataTransfer,
        badge: "87%",
      },
      { from: 0.82, to: 1, kind: ChartSegmentKind.Remaining },
    ],
  },
  {
    label: "30 Jun",
    segments: [
      { from: 0.06, to: 0.46, kind: ChartSegmentKind.Operations },
      { from: 0.5, to: 0.82, kind: ChartSegmentKind.DataTransfer },
      { from: 0.86, to: 1, kind: ChartSegmentKind.Remaining },
    ],
  },
];
