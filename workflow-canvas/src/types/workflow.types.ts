import { Integration } from "@/enums";

export type CanvasPoint = {
  x: number;
  y: number;
};

export type WorkflowNodeSpec = CanvasPoint & {
  background: string;
  title: string;
  subtitle: string;
  integration: Integration;
};

export type ConnectorArrowSpec = {
  points: [number, number][];
  color: string;
};
