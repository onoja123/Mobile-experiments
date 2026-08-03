import Svg, { Defs, Ellipse, G, LinearGradient, Stop } from 'react-native-svg';

const SIZE = 320;
const CENTER = SIZE / 2;
const HOLE_COUNT = 12;
const HOLE_RING_RX = 106;
const HOLE_RING_RY = 100;

const holes = Array.from({ length: HOLE_COUNT }, (_, index) => {
  const angle = (index / HOLE_COUNT) * Math.PI * 2;
  return {
    cx: CENTER + HOLE_RING_RX * Math.cos(angle),
    cy: CENTER + HOLE_RING_RY * Math.sin(angle),
    rotation: (angle * 180) / Math.PI + 90,
  };
});

export default function TorusIllustration() {
  return (
    <Svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
      <Defs>
        <LinearGradient id="torusBody" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#333333" />
          <Stop offset="0.45" stopColor="#101010" />
          <Stop offset="1" stopColor="#000000" />
        </LinearGradient>
      </Defs>
      <G rotation={-14} origin={`${CENTER}, ${CENTER}`}>
        <Ellipse cx={CENTER} cy={CENTER} rx={148} ry={140} fill="url(#torusBody)" />
        <Ellipse cx={CENTER - 6} cy={CENTER - 8} rx={140} ry={132} fill="none" stroke="#3E3E3E" strokeWidth={2} opacity={0.6} />
        <Ellipse cx={CENTER} cy={CENTER} rx={64} ry={60} fill="#FFFFFF" />
        <Ellipse cx={CENTER} cy={CENTER} rx={64} ry={60} fill="none" stroke="#2C2C2C" strokeWidth={4} opacity={0.8} />
        {holes.map((hole) => (
          <G key={`${hole.cx}-${hole.cy}`} rotation={hole.rotation} origin={`${hole.cx}, ${hole.cy}`}>
            <Ellipse cx={hole.cx} cy={hole.cy} rx={20} ry={13} fill="#4A4A4A" />
            <Ellipse cx={hole.cx} cy={hole.cy + 1.5} rx={16} ry={10} fill="#FFFFFF" />
          </G>
        ))}
      </G>
    </Svg>
  );
}
