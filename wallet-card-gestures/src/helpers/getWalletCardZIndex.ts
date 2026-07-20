import { WalletViewMode } from "@/enums";

import { getCardStackDepth } from "./getCardStackDepth";

export function getWalletCardZIndex(
  mode: WalletViewMode,
  index: number,
  activeIndex: number,
  cardCount: number,
) {
  if (mode === WalletViewMode.List) return index + 1;
  if (index === activeIndex) return cardCount + 1;
  return getCardStackDepth(index, activeIndex) + 1;
}
