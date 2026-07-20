export function getCardStackDepth(index: number, activeIndex: number) {
  return index > activeIndex ? index - 1 : index;
}
