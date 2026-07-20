import type { NearbyCarRoute } from '@/interfaces';

export const NEARBY_CAR_ROUTES: NearbyCarRoute[] = [
  {
    id: 'car-north',
    legDurationMs: 24000,
    startOffsetMs: 0,
    path: [
      { latitude: 9.079, longitude: 7.412 },
      { latitude: 9.08, longitude: 7.415 },
      { latitude: 9.0788, longitude: 7.4178 },
      { latitude: 9.077, longitude: 7.415 },
    ],
  },
  {
    id: 'car-south',
    legDurationMs: 21000,
    startOffsetMs: 6000,
    path: [
      { latitude: 9.0745, longitude: 7.4185 },
      { latitude: 9.073, longitude: 7.416 },
      { latitude: 9.0748, longitude: 7.4135 },
      { latitude: 9.0762, longitude: 7.4162 },
    ],
  },
  {
    id: 'car-east',
    legDurationMs: 27000,
    startOffsetMs: 13000,
    path: [
      { latitude: 9.0782, longitude: 7.42 },
      { latitude: 9.0765, longitude: 7.4212 },
      { latitude: 9.0752, longitude: 7.4192 },
      { latitude: 9.077, longitude: 7.418 },
    ],
  },
  {
    id: 'car-west',
    legDurationMs: 23000,
    startOffsetMs: 19000,
    path: [
      { latitude: 9.074, longitude: 7.4125 },
      { latitude: 9.0752, longitude: 7.4108 },
      { latitude: 9.0768, longitude: 7.4128 },
      { latitude: 9.0754, longitude: 7.4144 },
    ],
  },
];
