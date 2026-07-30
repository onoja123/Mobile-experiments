import { Image, Pressable, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import GlassSurface from '@/components/GlassSurface';
import { CAROUSEL_CARD_WIDTH } from '@/constants/layout';
import { colors } from '@/theme';
import { PropertyCardProps } from './PropertyCard.types';

export default function PropertyCard({ property, onPress }: PropertyCardProps) {
  return (
    <GlassSurface style={{ width: CAROUSEL_CARD_WIDTH, borderRadius: 24, overflow: 'hidden' }}>
      <Pressable className="flex-row items-center p-2.5" onPress={onPress}>
        <Image
          source={{ uri: property.imageUrl }}
          className="h-[96px] w-[96px] rounded-2xl"
          resizeMode="cover"
        />
        <View className="ml-3.5 flex-1">
          <Text className="text-[17px] font-bold text-ink dark:text-white" numberOfLines={1}>
            {property.name}
          </Text>
          <View className="mt-1.5 flex-row items-center">
            <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
              <Path
                d="M12 21s-6.5-5.4-6.5-10.3A6.4 6.4 0 0 1 12 4.2a6.4 6.4 0 0 1 6.5 6.5C18.5 15.6 12 21 12 21Z"
                stroke={colors.smoke}
                strokeWidth={1.7}
              />
              <Circle cx={12} cy={10.6} r={2.3} stroke={colors.smoke} strokeWidth={1.7} />
            </Svg>
            <Text className="ml-1.5 flex-1 text-[13px] text-smoke" numberOfLines={1}>
              {property.address}
            </Text>
          </View>
          <View className="mt-2 flex-row">
            <View className="flex-row items-center rounded-full bg-mist px-2.5 py-1 dark:bg-white/10">
              <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
                <Path
                  d="m12 3 2.5 5.6 6 .6-4.5 4 1.3 5.9L12 16l-5.3 3.1 1.3-5.9-4.5-4 6-.6L12 3Z"
                  fill={colors.star}
                />
              </Svg>
              <Text className="ml-1 text-[13px] font-semibold text-ink dark:text-white">
                {property.rating.toFixed(1)}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </GlassSurface>
  );
}
