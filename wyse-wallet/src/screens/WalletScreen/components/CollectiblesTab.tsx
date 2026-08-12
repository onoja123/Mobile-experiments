import { Pressable, Text, View } from 'react-native';

import Icon from '@/components/Icon';
import NftArt from '@/components/NftArt';
import { collections } from '@/data/collections';
import { colors } from '@/theme';
import CollectionAvatar from './CollectionAvatar';
import { CollectiblesTabProps } from './CollectiblesTab.types';

export default function CollectiblesTab({ onOpenItem }: CollectiblesTabProps) {
  return (
    <View className="px-5">
      {collections.map((collection) => (
        <View key={collection.id} className="mt-6">
          <View className="flex-row items-center">
            <CollectionAvatar id={collection.avatar} size={34} />
            <Text className="ml-2.5 flex-1 font-heading text-[16px] text-ink">
              {collection.name}
            </Text>
            <Pressable className="flex-row items-center" hitSlop={8}>
              <Text className="font-sans text-[14px] text-smoke">View all</Text>
              <View className="ml-0.5 mt-px">
                <Icon name="chevron-right" size={14} color={colors.smoke} strokeWidth={2} />
              </View>
            </Pressable>
          </View>
          <View className="mt-3.5 flex-row gap-3">
            {collection.items.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => onOpenItem(collection, item)}
                className="aspect-square flex-1 overflow-hidden rounded-[18px]"
              >
                <NftArt art={item.art} />
              </Pressable>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}
