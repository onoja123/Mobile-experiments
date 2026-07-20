import { useMemo, useState } from "react";
import { getTopicCardLayout } from "@/helpers/getTopicCardLayout";
import { getUnselectedCardIndices } from "@/helpers/getUnselectedCardIndices";

export function useTopicCardStack(
  cardCount: number,
  onCardConfirmed: (index: number) => void
) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const layouts = useMemo(
    () =>
      Array.from({ length: cardCount }, (_, index) =>
        getTopicCardLayout(index, selectedIndex, cardCount)
      ),
    [cardCount, selectedIndex]
  );

  const pressCard = (index: number) => {
    if (selectedIndex === null) {
      setSelectedIndex(index);
      return;
    }
    if (index === selectedIndex) {
      onCardConfirmed(index);
      return;
    }
    const stripIndices = getUnselectedCardIndices(cardCount, selectedIndex);
    const isBottomStripCard = index === stripIndices[stripIndices.length - 1];
    setSelectedIndex(isBottomStripCard ? index : null);
  };

  return { layouts, pressCard };
}
