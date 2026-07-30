import { Text, View } from 'react-native';
import { Marker } from 'react-native-maps';
import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '@/theme';
import { PriceMarkerProps } from './PriceMarker.types';

export default function PriceMarker({ property, onPress }: PriceMarkerProps) {
  return (
    <Marker
      coordinate={property.coordinate}
      anchor={{ x: 0.12, y: 0.5 }}
      tracksViewChanges={false}
      onPress={onPress}
    >
      <View className="flex-row items-center">
        <View className="z-10">
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
              d="M12 22s-7.5-6.2-7.5-11.7A7.4 7.4 0 0 1 12 2.8a7.4 7.4 0 0 1 7.5 7.5C19.5 15.8 12 22 12 22Z"
              fill={colors.pin}
              stroke={colors.white}
              strokeWidth={1.4}
            />
            <Circle cx={12} cy={10.4} r={2.6} fill={colors.white} />
          </Svg>
        </View>
        <View className="-ml-1.5 rounded-full bg-ink py-1.5 pl-3 pr-3.5">
          <Text className="text-xs font-semibold text-white">{property.price}</Text>
        </View>
      </View>
    </Marker>
  );
}
