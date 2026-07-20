export function seededRandom(seed: number): number {
  'worklet';
  const s = Math.sin(seed) * 43758.5453123;
  return s - Math.floor(s);
}
