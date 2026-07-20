import { FOLD_EDGE_MARGIN } from '@/constants/fold';
import type { FoldGeometry } from '@/types';
import { padFoldFan } from './padFoldFan';

export function computeFoldGeometry(
  width: number,
  height: number,
  rawX: number,
  rawY: number
): FoldGeometry {
  'worklet';
  const pointX = Math.min(rawX, width - FOLD_EDGE_MARGIN);
  const pointY = Math.max(rawY, FOLD_EDGE_MARGIN);

  const midX = (width + pointX) / 2;
  const midY = pointY / 2;
  let normalX = width - pointX;
  let normalY = -pointY;
  const normalLength = Math.hypot(normalX, normalY);
  normalX /= normalLength;
  normalY /= normalLength;

  const cornerXs = [0, width, width, 0];
  const cornerYs = [0, 0, height, height];
  const sides = [0, 0, 0, 0];
  for (let i = 0; i < 4; i++) {
    sides[i] = (cornerXs[i] - midX) * normalX + (cornerYs[i] - midY) * normalY;
  }

  const clipped: number[] = [];
  const flap: number[] = [];
  for (let i = 0; i < 4; i++) {
    const j = (i + 1) % 4;
    if (sides[i] >= 0) {
      clipped.push(cornerXs[i], cornerYs[i]);
      flap.push(cornerXs[i] - 2 * sides[i] * normalX, cornerYs[i] - 2 * sides[i] * normalY);
    }
    if (sides[i] * sides[j] < 0) {
      const t = sides[i] / (sides[i] - sides[j]);
      const crossX = cornerXs[i] + t * (cornerXs[j] - cornerXs[i]);
      const crossY = cornerYs[i] + t * (cornerYs[j] - cornerYs[i]);
      clipped.push(crossX, crossY);
      flap.push(crossX, crossY);
    }
  }
  return { clipped: padFoldFan(clipped), flap: padFoldFan(flap) };
}
