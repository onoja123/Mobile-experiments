export function clamp01(value: number) {
  'worklet';
  return value < 0 ? 0 : value > 1 ? 1 : value;
}

export function smoothstep(t: number) {
  'worklet';
  return t * t * (3 - 2 * t);
}
