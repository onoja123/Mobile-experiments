import { StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import {
  DROPOFF_LABEL_ANCHOR,
  DROPOFF_LABEL_OFFSET,
  PICKUP_LABEL_ANCHOR,
  PICKUP_LABEL_OFFSET,
  ROUTE_CASING_WIDTH,
  ROUTE_LINE_WIDTH,
  TRIP_MAP_REGION,
} from '@/constants/tripMap';
import {
  DROPOFF_POINT,
  DROPOFF_TIME_LABEL,
  PICKUP_ETA_LABEL,
  PICKUP_POINT,
  TRIP_ROUTE_PATH,
} from '@/data/tripRoute';
import { colors } from '@/theme';
import EndpointDot from './EndpointDot';
import MapLabel from './MapLabel';

export default function RouteMap() {
  return (
    <MapView style={StyleSheet.absoluteFill} initialRegion={TRIP_MAP_REGION}>
      <Polyline coordinates={TRIP_ROUTE_PATH} strokeColor={colors.white} strokeWidth={ROUTE_CASING_WIDTH} />
      <Polyline coordinates={TRIP_ROUTE_PATH} strokeColor={colors.labelGreen} strokeWidth={ROUTE_LINE_WIDTH} />
      <Marker coordinate={PICKUP_POINT} anchor={{ x: 0.5, y: 0.5 }}>
        <EndpointDot />
      </Marker>
      <Marker coordinate={DROPOFF_POINT} anchor={{ x: 0.5, y: 0.5 }}>
        <EndpointDot />
      </Marker>
      <Marker coordinate={PICKUP_POINT} anchor={PICKUP_LABEL_ANCHOR} centerOffset={PICKUP_LABEL_OFFSET}>
        <MapLabel title="Pickup" value={PICKUP_ETA_LABEL} tail />
      </Marker>
      <Marker coordinate={DROPOFF_POINT} anchor={DROPOFF_LABEL_ANCHOR} centerOffset={DROPOFF_LABEL_OFFSET}>
        <MapLabel title="Dropoff" value={DROPOFF_TIME_LABEL} />
      </Marker>
    </MapView>
  );
}
