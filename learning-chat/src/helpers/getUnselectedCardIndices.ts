export function getUnselectedCardIndices(cardCount: number, selectedIndex: number): number[] {
  return Array.from({ length: cardCount }, (_, index) => index).filter(
    (index) => index !== selectedIndex
  );
}
