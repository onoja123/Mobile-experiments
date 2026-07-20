import type { CardVariant } from "@/enums";

export type CreditCardProps = {
  variant: CardVariant;
  holder: string;
  last4: string;
  width: number;
  height: number;
};

export type CreditCardPatternProps = {
  variant: CardVariant;
  width: number;
  height: number;
};
