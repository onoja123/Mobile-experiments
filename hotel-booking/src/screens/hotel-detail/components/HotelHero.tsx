import { Dimensions, View } from 'react-native';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IMAGE_TRANSITION_MS } from '@/constants/animation';

import { HERO_HEIGHT_RATIO } from '../hotelDetail.constants';
import { CircleIconButton } from './CircleIconButton';

const HERO_HEIGHT = Dimensions.get('window').height * HERO_HEIGHT_RATIO;

type HotelHeroProps = {
  image: string;
  onBack: () => void;
  onShare: () => void;
};

export function HotelHero({ image, onBack, onShare }: HotelHeroProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: HERO_HEIGHT }}>
      <Image source={image} style={{ width: '100%', height: '100%' }} transition={IMAGE_TRANSITION_MS} />
      <View
        className="absolute inset-x-5 flex-row justify-between"
        style={{ top: insets.top + 6 }}
      >
        <CircleIconButton icon="chevron-back" onPress={onBack} />
        <CircleIconButton icon="share-outline" onPress={onShare} />
      </View>
    </View>
  );
}
