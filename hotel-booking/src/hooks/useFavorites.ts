import { useState } from 'react';

export function useFavorites(initialIds: string[] = []) {
  const [favorites, setFavorites] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(initialIds.map((id) => [id, true])),
  );

  const isFavorite = (id: string) => !!favorites[id];

  const toggleFavorite = (id: string) =>
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));

  return { isFavorite, toggleFavorite };
}
