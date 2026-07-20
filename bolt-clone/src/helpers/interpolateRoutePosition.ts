import type { Point } from '@/interfaces';
import { computeBearing } from './computeBearing';

export function interpolateRoutePosition(path: Point[], legDurationMs: number, elapsedMs: number) {
  const totalDurationMs = path.length * legDurationMs;
  const routeElapsedMs = elapsedMs % totalDurationMs;
  const legIndex = Math.floor(routeElapsedMs / legDurationMs);
  const legProgress = (routeElapsedMs % legDurationMs) / legDurationMs;
  const from = path[legIndex];
  const to = path[(legIndex + 1) % path.length];

  return {
    coordinate: {
      latitude: from.latitude + (to.latitude - from.latitude) * legProgress,
      longitude: from.longitude + (to.longitude - from.longitude) * legProgress,
    },
    heading: computeBearing(from, to),
  };
}
