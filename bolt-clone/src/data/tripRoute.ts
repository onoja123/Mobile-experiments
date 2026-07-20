import type { Point } from '@/interfaces';

export const PICKUP_LABEL = 'Brains and Hammers City';
export const PICKUP_ETA_LABEL = '29 min';
export const DROPOFF_TIME_LABEL = '11:59 AM';

export const PICKUP_POINT: Point = { latitude: 9.0765, longitude: 7.4165 };
export const DROPOFF_POINT: Point = { latitude: 9.0578, longitude: 7.4693 };

export const TRIP_ROUTE_PATH: Point[] = [
  PICKUP_POINT,
  { latitude: 9.0748, longitude: 7.4198 },
  { latitude: 9.0762, longitude: 7.4241 },
  { latitude: 9.0729, longitude: 7.4306 },
  { latitude: 9.0704, longitude: 7.4394 },
  { latitude: 9.0662, longitude: 7.4482 },
  { latitude: 9.0641, longitude: 7.4573 },
  { latitude: 9.0602, longitude: 7.4631 },
  DROPOFF_POINT,
];
