import { FOLD_TRIANGLE_SIZE } from '@/constants/fold';

export function unitTriangleTransform(
  a: number,
  b: number,
  c: number,
  d: number,
  originX: number,
  originY: number
): number[] {
  'worklet';
  const half = FOLD_TRIANGLE_SIZE / 2;
  const tx = originX - half + (a + c) * half;
  const ty = originY - half + (b + d) * half;
  return [a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1];
}
