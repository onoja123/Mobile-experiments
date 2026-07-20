import type { Point } from '../point.interface';

export interface NearbyCarRoute {
  id: string;
  path: Point[];
  legDurationMs: number;
  startOffsetMs: number;
}
