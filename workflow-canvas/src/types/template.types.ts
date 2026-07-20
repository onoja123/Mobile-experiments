import { Integration } from "@/enums";

export type TemplateFilter = {
  label: string;
  count: string;
  active: boolean;
};

export type TemplateIcon = {
  integration: Integration;
  size: number;
};

export type TemplateSpec = {
  background: string;
  icons: [TemplateIcon, TemplateIcon];
  title: string;
  description: string;
  usedCount: string;
};
