export function rubberBand(overshoot: number): number {
  'worklet';
  return -Math.pow(-overshoot, 0.78);
}
