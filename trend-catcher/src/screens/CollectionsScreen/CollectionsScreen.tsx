import { Text } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

import ProfileHeader from '@/components/ProfileHeader';
import { COLLECTIONS } from '@/data/collections';
import { PROFILE } from '@/data/profile';
import CollectionCard from './components/CollectionCard';

export default function CollectionsScreen() {
  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  return (
    <>
      <ProfileHeader profile={PROFILE} />
      <Text className="px-5 pb-4 pt-6 text-[34px] font-bold leading-[38px] tracking-tight text-ink">
        {'streetwear\nthat empowers'}
      </Text>
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-36"
      >
        {COLLECTIONS.map((collection, index) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
            index={index}
            scrollY={scrollY}
          />
        ))}
      </Animated.ScrollView>
    </>
  );
}
