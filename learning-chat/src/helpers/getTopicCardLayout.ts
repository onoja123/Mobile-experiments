import {
  BOTTOM_STRIP_CARD_Z_INDEX,
  COLLAPSED_BASE_SCALE,
  COLLAPSED_SCALE_STEP,
  COLLAPSED_STACK_TOP,
  COLLAPSED_STRIP_GAP,
  FANNED_CARD_ROTATIONS,
  FANNED_CARD_TOPS,
  SELECTED_CARD_Z_INDEX,
} from "@/constants";
import { TopicCardLayout } from "@/types";
import { getUnselectedCardIndices } from "./getUnselectedCardIndices";

export function getTopicCardLayout(
  index: number,
  selectedIndex: number | null,
  cardCount: number
): TopicCardLayout {
  if (selectedIndex === null) {
    return {
      top: FANNED_CARD_TOPS[index],
      rotation: FANNED_CARD_ROTATIONS[index],
      scale: 1,
      zIndex: index + 1,
    };
  }
  if (index === selectedIndex) {
    return { top: 0, rotation: 0, scale: 1, zIndex: SELECTED_CARD_Z_INDEX };
  }
  const stripIndices = getUnselectedCardIndices(cardCount, selectedIndex);
  const stripPosition = stripIndices.indexOf(index);
  if (stripPosition === stripIndices.length - 1) {
    return {
      top: COLLAPSED_STACK_TOP + stripIndices.length * COLLAPSED_STRIP_GAP,
      rotation: 0,
      scale: 1,
      zIndex: BOTTOM_STRIP_CARD_Z_INDEX,
    };
  }
  return {
    top: COLLAPSED_STACK_TOP + stripPosition * COLLAPSED_STRIP_GAP,
    rotation: 0,
    scale: COLLAPSED_BASE_SCALE + stripPosition * COLLAPSED_SCALE_STEP,
    zIndex: stripPosition + 1,
  };
}
