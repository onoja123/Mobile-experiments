import { ChartSegmentKind } from "@/enums";

export type ChartSegment = {
  from: number;
  to: number;
  kind: ChartSegmentKind;
  badge?: string;
};

export type ChartColumn = {
  label: string;
  segments: ChartSegment[];
};

export type ChartLegendItem = {
  color: string;
  label: string;
};
