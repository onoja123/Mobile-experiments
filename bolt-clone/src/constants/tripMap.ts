import type { Region } from 'react-native-maps';

export const TRIP_MAP_REGION: Region = {
  latitude: 9.0346,
  longitude: 7.4429,
  latitudeDelta: 0.05,
  longitudeDelta: 0.068,
};

export const ROUTE_CASING_WIDTH = 10;
export const ROUTE_LINE_WIDTH = 5.5;

export const PICKUP_LABEL_ANCHOR = { x: -0.18, y: 1.45 };
export const PICKUP_LABEL_OFFSET = { x: 66, y: -46 };
export const DROPOFF_LABEL_ANCHOR = { x: 1.12, y: 0.5 };
export const DROPOFF_LABEL_OFFSET = { x: -110, y: 0 };
