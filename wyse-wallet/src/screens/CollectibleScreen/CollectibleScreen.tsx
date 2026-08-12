import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from '@/components/Icon';
import NftArt from '@/components/NftArt';
import CollectionAvatar from '@/screens/WalletScreen/components/CollectionAvatar';
import { CollectibleScreenProps } from './CollectibleScreen.types';

export default function CollectibleScreen({ collection, item, onBack }: CollectibleScreenProps) {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 bg-paper" style={{ paddingTop: insets.top + 8 }}>
      <View className="flex-row items-center justify-between px-5">
        <Pressable
          onPress={onBack}
          hitSlop={8}
          className="h-11 w-11 items-center justify-center rounded-2xl border border-line"
        >
          <Icon name="chevron-left" size={18} strokeWidth={2.2} />
        </Pressable>
        <Text className="font-heading text-[16px] text-ink">{collection.name}</Text>
        <View className="h-11 w-11 items-center justify-center rounded-2xl border border-line">
          <CollectionAvatar id={collection.avatar} size={26} />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
      >
        <View className="mx-5 mt-5 aspect-square overflow-hidden rounded-[26px]">
          <NftArt art={item.art} />
        </View>
        <View className="mt-6 flex-row items-center px-5">
          <View className="flex-1">
            <Text className="font-heading text-[24px] text-ink">{item.name}</Text>
            <Text className="mt-1 font-sans text-[13px] text-smoke">by {collection.name}</Text>
          </View>
          <View className="rounded-full bg-card px-3 py-1.5">
            <Text className="font-medium text-[12px] text-accent-ink">Owned</Text>
          </View>
        </View>
        <View className="mx-5 mt-6 flex-row items-center rounded-[20px] bg-card p-5">
          <View className="flex-1">
            <Text className="font-sans text-[13px] text-smoke">Current value</Text>
            <Text className="mt-1 font-semi text-[20px] text-ink">{item.price}</Text>
          </View>
          <Text className="font-sans text-[14px] text-smoke">{item.usd}</Text>
        </View>
        <View className="mx-5 mt-3 flex-row gap-3">
          <Pressable className="h-[56px] flex-1 items-center justify-center rounded-[18px] bg-accent">
            <Text className="font-semi text-[16px] text-on-accent">List for Sale</Text>
          </Pressable>
          <Pressable className="h-[56px] w-[56px] items-center justify-center rounded-[18px] bg-card">
            <Icon name="arrow-up-right" size={19} strokeWidth={2} />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
