import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

const SIZE = 310;
const CENTER = SIZE / 2;

const ringPoints = (cx: number, cy: number, radius: number, sides: number, rotation: number) =>
  Array.from({ length: sides }, (_, index) => {
    const angle = rotation + (index / sides) * Math.PI * 2;
    return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`;
  });

const polygonPath = (points: string[]) => `M ${points.join(' L ')} Z`;

const outer = ringPoints(CENTER, CENTER, 142, 8, -0.32);
const outerBack = ringPoints(CENTER + 12, CENTER + 12, 142, 8, -0.32);
const inner = ringPoints(CENTER + 10, CENTER - 6, 66, 7, 0.24).reverse();
const innerRim = ringPoints(CENTER + 10, CENTER - 6, 66, 7, 0.24);

export default function OctagonIllustration() {
  return (
    <Svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
      <Defs>
        <LinearGradient id="octagonBody" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#333333" />
          <Stop offset="0.5" stopColor="#121212" />
          <Stop offset="1" stopColor="#000000" />
        </LinearGradient>
      </Defs>
      <Path d={polygonPath(outerBack)} fill="#000000" />
      <Path
        d={`${polygonPath(outer)} ${polygonPath(inner)}`}
        fill="url(#octagonBody)"
        fillRule="evenodd"
      />
      <Path d={polygonPath(innerRim)} fill="none" stroke="#3E3E3E" strokeWidth={3} opacity={0.7} />
    </Svg>
  );
}
