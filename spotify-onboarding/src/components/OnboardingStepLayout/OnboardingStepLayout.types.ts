import type { ReactNode } from "react";

import type { MarqueeItem } from "@/types";

export type OnboardingStepLayoutProps = {
  step: number;
  titleLine1: string;
  titleLine2: string;
  titleIcon: ReactNode;
  subtitle: string;
  items: MarqueeItem[];
  ctaIcon: ReactNode;
  ctaLabel: string;
  ctaColor: string;
  onBack?: () => void;
  onSkip?: () => void;
  onCta?: () => void;
};
