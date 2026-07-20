const WING_ANGLE = 0.5;

export function getArrowGeometry(
  points: [number, number][],
  scale: number,
  headSize: number,
): { path: string; headPoints: string } {
  const [start, ...rest] = points.map(([x, y]) => [x * scale, y * scale]);
  const path =
    `M${start[0]} ${start[1]} ` + rest.map(([x, y]) => `L${x} ${y}`).join(" ");
  const [endX, endY] = rest[rest.length - 1];
  const [prevX, prevY] = rest.length > 1 ? rest[rest.length - 2] : start;
  const angle = Math.atan2(endY - prevY, endX - prevX);
  const wing = (offset: number) =>
    `${endX - headSize * Math.cos(angle + offset)},${endY - headSize * Math.sin(angle + offset)}`;
  return {
    path,
    headPoints: `${endX},${endY} ${wing(WING_ANGLE)} ${wing(-WING_ANGLE)}`,
  };
}
