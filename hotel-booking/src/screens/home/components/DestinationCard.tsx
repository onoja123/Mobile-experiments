import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

import { PressableScale } from '@/components';
import { IMAGE_TRANSITION_MS } from '@/constants/animation';
import { Destination } from '@/interfaces';
import { imageOverlayGradient } from '@/theme';

type DestinationCardProps = {
  destination: Destination;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <PressableScale className="h-[148px] w-[172px] overflow-hidden rounded-2xl">
      <Image
        source={destination.image}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        transition={IMAGE_TRANSITION_MS}
      />
      <LinearGradient
        colors={imageOverlayGradient}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
      <View className="flex-1 justify-between p-3">
        <View className="self-start rounded-full bg-white/95 px-2.5 py-1">
          <Text className="font-jakarta-medium text-[10px] text-ink">Want to visit</Text>
        </View>
        <View>
          <Text className="font-jakarta-semibold text-[17px] text-white">{destination.name}</Text>
          <Text className="mt-0.5 font-jakarta-medium text-[11px] text-white/85">
            {destination.dates}
          </Text>
        </View>
      </View>
    </PressableScale>
  );
}
