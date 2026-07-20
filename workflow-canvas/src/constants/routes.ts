import { AppRoute } from "@/enums";

export const NAV_LINKS = [
  { route: AppRoute.Canvas, label: "Canvas" },
  { route: AppRoute.Templates, label: "Templates" },
  { route: AppRoute.Statistics, label: "Statistics" },
  { route: AppRoute.Organization, label: "Organization" },
] as const;
