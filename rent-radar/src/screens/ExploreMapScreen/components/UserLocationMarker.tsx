import { View } from 'react-native';
import { Marker } from 'react-native-maps';

import { USER_LOCATION } from '@/data/properties';

export default function UserLocationMarker() {
  return (
    <Marker coordinate={USER_LOCATION} anchor={{ x: 0.5, y: 0.5 }} tracksViewChanges={false}>
      <View className="h-12 w-12 items-center justify-center rounded-full border border-pin/40 bg-pin/20">
        <View className="h-3.5 w-3.5 rounded-full border-2 border-white bg-pin" />
      </View>
    </Marker>
  );
}
