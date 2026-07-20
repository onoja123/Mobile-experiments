import { View } from 'react-native';
import type { SkImage } from '@shopify/react-native-skia';

import type { BookmarkCardDefinition } from '@/types';

import { DissolvableBookmarkCard } from './DissolvableBookmarkCard';

type BookmarkColumnProps = {
  cards: BookmarkCardDefinition[];
  restoring: boolean;
  snapshots: Map<string, SkImage>;
  onRemove: (id: string) => void;
  onSnapshot: (id: string, image: SkImage) => void;
};

export function BookmarkColumn({
  cards,
  restoring,
  snapshots,
  onRemove,
  onSnapshot,
}: BookmarkColumnProps) {
  return (
    <View className="flex-1 gap-4">
      {cards.map((card) => (
        <DissolvableBookmarkCard
          key={restoring ? `${card.id}-restored` : card.id}
          card={card}
          snapshot={restoring ? snapshots.get(card.id) : undefined}
          onRemove={onRemove}
          onSnapshot={onSnapshot}
        />
      ))}
    </View>
  );
}
