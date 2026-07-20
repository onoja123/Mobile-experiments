import type { Point } from '@/interfaces';

const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
const toDegrees = (radians: number) => (radians * 180) / Math.PI;

export function computeBearing(from: Point, to: Point): number {
  const deltaLongitude = toRadians(to.longitude - from.longitude);
  const y = Math.sin(deltaLongitude) * Math.cos(toRadians(to.latitude));
  const x =
    Math.cos(toRadians(from.latitude)) * Math.sin(toRadians(to.latitude)) -
    Math.sin(toRadians(from.latitude)) * Math.cos(toRadians(to.latitude)) * Math.cos(deltaLongitude);
  return (toDegrees(Math.atan2(y, x)) + 360) % 360;
}
