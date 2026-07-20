import { RESTORE_STAGGER_MS } from '@/constants';
import { BOOKMARK_CARDS } from '@/data/bookmarkCards';

export function getRestoreDelay(cardId: string) {
  return BOOKMARK_CARDS.findIndex((card) => card.id === cardId) * RESTORE_STAGGER_MS;
}
