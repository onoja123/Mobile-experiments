import { CardVariant } from "@/enums";

export interface Card {
  id: CardVariant;
  holder: string;
  last4: string;
}
