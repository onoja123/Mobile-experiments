import Svg, { Defs, Ellipse, G, LinearGradient, Path, Stop } from 'react-native-svg';

const RINGS = [
  { cx: 74, cy: 60, rx: 42, ry: 33 },
  { cx: 126, cy: 88, rx: 42, ry: 33 },
];

const BAND_WIDTH = 21;
const RIM_OFFSET_X = 3;
const RIM_OFFSET_Y = 4;

const crossingBand = 'M110.4 43.5A42 33 0 0 1 108.4 78.9';
const crossingRim = 'M107.4 39.5A42 33 0 0 1 105.4 74.9';

export default function LinkedRingsIllustration() {
  return (
    <Svg width={190} height={150} viewBox="0 0 190 150">
      <Defs>
        <LinearGradient
          id="ringSheen"
          gradientUnits="userSpaceOnUse"
          x1="30"
          y1="20"
          x2="170"
          y2="130"
        >
          <Stop offset="0" stopColor="#3A3A3A" />
          <Stop offset="1" stopColor="#080808" />
        </LinearGradient>
      </Defs>
      <G rotation={-14} origin="100, 75">
        {RINGS.map((ring) => (
          <G key={ring.cx}>
            <Ellipse {...ring} fill="none" stroke="url(#ringSheen)" strokeWidth={BAND_WIDTH} />
            <Ellipse
              cx={ring.cx - RIM_OFFSET_X}
              cy={ring.cy - RIM_OFFSET_Y}
              rx={ring.rx}
              ry={ring.ry}
              fill="none"
              stroke="#4A4A4A"
              strokeWidth={4}
              opacity={0.45}
            />
          </G>
        ))}
        <Path d={crossingBand} fill="none" stroke="url(#ringSheen)" strokeWidth={BAND_WIDTH} />
        <Path d={crossingRim} fill="none" stroke="#4A4A4A" strokeWidth={4} opacity={0.45} />
      </G>
    </Svg>
  );
}
