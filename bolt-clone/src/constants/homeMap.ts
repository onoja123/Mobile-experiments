import type { Camera } from 'react-native-maps';
import { PICKUP_POINT } from '@/data/tripRoute';

export const HOME_MAP_CAMERA: Camera = {
  center: PICKUP_POINT,
  pitch: 55,
  heading: 20,
  altitude: 1300,
  zoom: 16,
};

export const MY_LOCATION_BUTTON_TOP_RATIO = 0.25;
