import {
  CARD_DETAIL_EXIT_OFFSET,
  CARD_HEIGHT,
  CARD_LIST_GAP,
  CARD_STACK_PEEK,
  HEADER_HEIGHT,
} from "@/constants/layout";
import { WalletViewMode } from "@/enums";
import type { CardTransform } from "@/interfaces";

import { getCardStackDepth } from "./getCardStackDepth";

export function getWalletCardTransform(
  mode: WalletViewMode,
  index: number,
  activeIndex: number,
): CardTransform {
  if (mode === WalletViewMode.List) {
    return { y: index * (CARD_HEIGHT + CARD_LIST_GAP), scale: 1, opacity: 1 };
  }
  if (mode === WalletViewMode.Stack) {
    if (index === activeIndex) {
      return { y: CARD_STACK_PEEK * 2, scale: 1, opacity: 1 };
    }
    const depth = getCardStackDepth(index, activeIndex);
    return { y: depth * CARD_STACK_PEEK, scale: 0.9 + depth * 0.05, opacity: 1 };
  }
  if (index === activeIndex) {
    return { y: -HEADER_HEIGHT + 4, scale: 1, opacity: 1 };
  }
  return { y: -CARD_HEIGHT - CARD_DETAIL_EXIT_OFFSET, scale: 0.9, opacity: 0 };
}
