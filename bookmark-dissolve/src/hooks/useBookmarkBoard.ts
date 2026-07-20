import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { SkImage } from '@shopify/react-native-skia';

import { BOARD_COLUMN_COUNT, INITIAL_VISIBLE_CARDS, RESTORE_PAUSE_MS } from '@/constants';
import { BOOKMARK_CARDS } from '@/data/bookmarkCards';
import { getBookmarkColumn } from '@/helpers/getBookmarkColumn';

export function useBookmarkBoard() {
  const [cards, setCards] = useState(() => BOOKMARK_CARDS.slice(0, INITIAL_VISIBLE_CARDS));
  const [restoring, setRestoring] = useState(false);
  const snapshots = useRef(new Map<string, SkImage>());

  const removeCard = useCallback((id: string) => {
    setCards((current) => current.filter((card) => card.id !== id));
  }, []);

  const saveSnapshot = useCallback((id: string, image: SkImage) => {
    snapshots.current.set(id, image);
  }, []);

  useEffect(() => {
    if (cards.length > 0) return;
    const timer = setTimeout(() => {
      setRestoring(true);
      setCards(BOOKMARK_CARDS);
    }, RESTORE_PAUSE_MS);
    return () => clearTimeout(timer);
  }, [cards]);

  const columns = useMemo(
    () =>
      Array.from({ length: BOARD_COLUMN_COUNT }, (_, column) =>
        cards.filter((card) => getBookmarkColumn(card.id) === column),
      ),
    [cards],
  );

  return {
    columns,
    restoring,
    snapshots: snapshots.current,
    removeCard,
    saveSnapshot,
  };
}
