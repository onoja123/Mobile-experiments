import { useRef, useState } from 'react';
import { View } from 'react-native';
import type { SkImage } from '@shopify/react-native-skia';
import Animated, { FadeInDown, LinearTransition } from 'react-native-reanimated';

import { BookmarkCard } from '@/components/BookmarkCard';
import { CARD_SPRING_DAMPING } from '@/constants';
import { getRestoreDelay } from '@/helpers/getRestoreDelay';
import { useDissolve } from '@/hooks/useDissolve';
import type { BookmarkCardDefinition } from '@/types';

type DissolvableBookmarkCardProps = {
  card: BookmarkCardDefinition;
  snapshot?: SkImage;
  onRemove: (id: string) => void;
  onSnapshot: (id: string, image: SkImage) => void;
};

export function DissolvableBookmarkCard({
  card,
  snapshot,
  onRemove,
  onSnapshot,
}: DissolvableBookmarkCardProps) {
  const cardRef = useRef<View>(null);
  const materializeStarted = useRef(false);
  const [hidden, setHidden] = useState(!!snapshot);
  const { dissolve, materialize } = useDissolve();
  const restoreDelay = getRestoreDelay(card.id);

  const close = async () => {
    if (hidden) return;
    const image = await dissolve(cardRef, {
      onCaptured: () => setHidden(true),
      onDone: () => onRemove(card.id),
    });
    if (image) onSnapshot(card.id, image);
  };

  const handleLayout = () => {
    if (!snapshot || materializeStarted.current) return;
    materializeStarted.current = true;
    setTimeout(() => {
      materialize(cardRef, snapshot, { onDone: () => setHidden(false) });
    }, restoreDelay);
  };

  return (
    <Animated.View
      entering={
        snapshot ? undefined : FadeInDown.delay(restoreDelay).springify().damping(CARD_SPRING_DAMPING)
      }
      layout={LinearTransition.springify().damping(CARD_SPRING_DAMPING)}
      style={{ height: card.height }}>
      <View className="flex-1" style={{ opacity: hidden ? 0 : 1 }} onLayout={handleLayout}>
        <BookmarkCard cardRef={cardRef} title={card.title} icon={card.icon} onClose={close}>
          {card.body}
        </BookmarkCard>
      </View>
    </Animated.View>
  );
}
