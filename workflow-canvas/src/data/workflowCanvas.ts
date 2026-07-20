import { Integration } from "@/enums";
import { colors } from "@/theme";
import type {
  CanvasPoint,
  ConnectorArrowSpec,
  WorkflowNodeSpec,
} from "@/types";

export const WORKFLOW_NODES: WorkflowNodeSpec[] = [
  {
    x: 104,
    y: 44,
    background: colors.blush,
    title: "Webhooks",
    subtitle: "Webhook response",
    integration: Integration.Webhook,
  },
  {
    x: 252,
    y: 40,
    background: colors.sky,
    title: "Slack",
    subtitle: "Get a user",
    integration: Integration.Slack,
  },
  {
    x: 214,
    y: 210,
    background: colors.smoke,
    title: "Chat GPT",
    subtitle: "Edit an image",
    integration: Integration.OpenAI,
  },
  {
    x: 92,
    y: 338,
    background: colors.mint,
    title: "Google Drive",
    subtitle: "Upload a file",
    integration: Integration.GoogleDrive,
  },
  {
    x: 236,
    y: 412,
    background: colors.blush,
    title: "Webhooks",
    subtitle: "Webhook response",
    integration: Integration.Webhook,
  },
  {
    x: 92,
    y: 514,
    background: colors.periwinkle,
    title: "Discord",
    subtitle: "Get a message",
    integration: Integration.Discord,
  },
];

export const CONNECTOR_ARROWS: ConnectorArrowSpec[] = [
  {
    points: [
      [226, 110],
      [248, 110],
    ],
    color: colors.connectorBlue,
  },
  {
    points: [
      [308, 192],
      [292, 210],
    ],
    color: colors.connectorInk,
  },
  {
    points: [
      [186, 268],
      [152, 296],
      [152, 330],
    ],
    color: colors.connectorGreen,
  },
  {
    points: [
      [214, 446],
      [234, 460],
    ],
    color: colors.connectorGreen,
  },
  {
    points: [
      [252, 580],
      [216, 590],
    ],
    color: colors.connectorPink,
  },
];

export const EDIT_BADGE_POSITIONS: CanvasPoint[] = [
  { x: 204, y: 72 },
  { x: 296, y: 162 },
  { x: 176, y: 248 },
  { x: 192, y: 426 },
  { x: 252, y: 548 },
];

export const ADD_NODE_HINT_POSITIONS: CanvasPoint[] = [
  { x: 82, y: 92 },
  { x: 374, y: 88 },
  { x: 144, y: 636 },
];
