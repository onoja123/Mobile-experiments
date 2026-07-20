import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { HOME_MAP_CAMERA } from '@/constants/homeMap';
import { PICKUP_POINT } from '@/data/tripRoute';
import type { HomeMapProps } from '@/interfaces';
import NearbyCars from './NearbyCars';

export default function HomeMap({ onTouch }: HomeMapProps) {
  return (
    <MapView
      style={StyleSheet.absoluteFill}
      initialCamera={HOME_MAP_CAMERA}
      showsBuildings
      pitchEnabled
      rotateEnabled
      onPress={onTouch}
      onPanDrag={onTouch}
    >
      <Marker coordinate={PICKUP_POINT} anchor={{ x: 0.5, y: 0.5 }}>
        <View className="h-9 w-9 items-center justify-center rounded-full bg-brand/20">
          <View className="h-[22px] w-[22px] rounded-full border-[3.5px] border-white bg-brand shadow-md" />
        </View>
      </Marker>
      <NearbyCars />
    </MapView>
  );
}
