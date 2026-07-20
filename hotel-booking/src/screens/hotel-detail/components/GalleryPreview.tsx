import { Dimensions, Pressable, Text, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';

import { IMAGE_TRANSITION_MS } from '@/constants/animation';
import { SCREEN_H_PADDING } from '@/constants/layout';

import { GALLERY_COLUMNS, GALLERY_GAP, GALLERY_PREVIEW_COUNT } from '../hotelDetail.constants';

const THUMB_SIZE =
  (Dimensions.get('window').width - SCREEN_H_PADDING * 2 - (GALLERY_COLUMNS - 1) * GALLERY_GAP) /
  GALLERY_COLUMNS;

type GalleryPreviewProps = {
  photos: string[];
  extraCount: number;
};

export function GalleryPreview({ photos, extraCount }: GalleryPreviewProps) {
  return (
    <View className="mt-5 flex-row gap-2.5">
      {photos.slice(0, GALLERY_PREVIEW_COUNT).map((photo) => (
        <View
          key={photo}
          className="overflow-hidden rounded-xl"
          style={{ width: THUMB_SIZE, height: THUMB_SIZE }}
        >
          <Image source={photo} style={{ flex: 1 }} transition={IMAGE_TRANSITION_MS} />
        </View>
      ))}
      <Pressable
        className="overflow-hidden rounded-xl"
        style={{ width: THUMB_SIZE, height: THUMB_SIZE }}
        onPress={() => Haptics.selectionAsync()}
      >
        <Image
          source={photos[GALLERY_PREVIEW_COUNT]}
          style={{ flex: 1 }}
          transition={IMAGE_TRANSITION_MS}
        />
        <View className="absolute inset-0 items-center justify-center bg-black/45">
          <Text className="font-jakarta-semibold text-[12px] text-white">{extraCount} more</Text>
        </View>
      </Pressable>
    </View>
  );
}
