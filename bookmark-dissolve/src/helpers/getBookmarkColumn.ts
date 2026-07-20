import { BOARD_COLUMN_COUNT } from '@/constants';
import { BOOKMARK_CARDS } from '@/data/bookmarkCards';

export function getBookmarkColumn(cardId: string) {
  return BOOKMARK_CARDS.findIndex((card) => card.id === cardId) % BOARD_COLUMN_COUNT;
}
