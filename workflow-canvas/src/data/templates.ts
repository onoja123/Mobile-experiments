import { Integration } from "@/enums";
import { colors } from "@/theme";
import type { TemplateFilter, TemplateSpec } from "@/types";

export const TEMPLATE_FILTERS: TemplateFilter[] = [
  { label: "All", count: "1273", active: false },
  { label: "Public", count: "873", active: true },
  { label: "Private", count: "742", active: false },
];

export const TEMPLATES: TemplateSpec[] = [
  {
    background: colors.lavender,
    icons: [
      { integration: Integration.X, size: 26 },
      { integration: Integration.Discord, size: 26 },
    ],
    title:
      "Post a message with a new tweet from a watched Twitter account in Discord",
    description:
      "Elevate your Telegram channel with our ChatGPT-powered bot. Deliver instant, engaging replies to every message.",
    usedCount: "1066",
  },
  {
    background: colors.blush,
    icons: [
      { integration: Integration.YouTube, size: 28 },
      { integration: Integration.GoogleDrive, size: 26 },
    ],
    title: "Find YouTube videos by keywords, summarize with…",
    description:
      "Discover relevant YouTube videos using keyword search, then generate concise AI summaries.",
    usedCount: "892",
  },
];
