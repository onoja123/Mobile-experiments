export function padFoldFan(points: number[]): number[] {
  'worklet';
  while (points.length < 10) {
    points.push(points[points.length - 2] ?? 0, points[points.length - 1] ?? 0);
  }
  return points;
}
