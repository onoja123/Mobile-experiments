import Svg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from 'react-native-svg';

import { NftArtProps } from './NftArt.types';

function BalaclavaArt() {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <Rect width={100} height={100} fill="#3E7BC4" />
      {[14, 30, 46, 62].map((y) => (
        <Path key={y} d={`M0 ${y}H100`} stroke="#356AA8" strokeWidth={2.5} />
      ))}
      {[0, 16, 32, 48, 64, 80, 96].map((x, i) => (
        <Path
          key={x}
          d={`M${x + (i % 2 ? 8 : 0)} 0V100`}
          stroke="#356AA8"
          strokeWidth={2}
          opacity={0.6}
        />
      ))}
      <Rect x={18} y={76} width={64} height={24} rx={6} fill="#E8B93B" />
      {[24, 40, 56, 72].map((x) => (
        <Path key={x} d={`M${x} 76V100`} stroke="#B3442E" strokeWidth={3.5} opacity={0.8} />
      ))}
      {[82, 92].map((y) => (
        <Path key={y} d={`M18 ${y}H82`} stroke="#3E5F8F" strokeWidth={3} opacity={0.7} />
      ))}
      <Path
        d="M50 14c-15 0-24 11-24 27 0 15 6 39 24 39s24-24 24-39c0-16-9-27-24-27z"
        fill="#F2C230"
      />
      {[34, 42, 50, 58, 66].map((x) => (
        <Path
          key={x}
          d={`M${x} 20C${x - 2} 40 ${x - 2} 60 ${x} 78`}
          stroke="#D9A81F"
          strokeWidth={1.6}
          opacity={0.7}
          fill="none"
        />
      ))}
      <Circle cx={41} cy={44} r={8.5} fill="#FFFFFF" />
      <Circle cx={59} cy={44} r={8.5} fill="#FFFFFF" />
      <Circle cx={41} cy={44} r={8.5} fill="none" stroke="#D9A81F" strokeWidth={1.5} />
      <Circle cx={59} cy={44} r={8.5} fill="none" stroke="#D9A81F" strokeWidth={1.5} />
      <Circle cx={42.5} cy={46} r={3.8} fill="#17181A" />
      <Circle cx={60.5} cy={46} r={3.8} fill="#17181A" />
    </Svg>
  );
}

function PrismArt() {
  const bands = ['#FF6A5E', '#FFB13B', '#F7E36A', '#7CE0C3', '#5EB8FF', '#B78CFF'];
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <Defs>
        <ClipPath id="prismHead">
          <Path d="M50 92C30 92 28 66 29 48 30 26 38 12 50 12s20 14 21 36c1 18-1 44-21 44z" />
        </ClipPath>
      </Defs>
      <Rect width={100} height={100} fill="#DD3B2B" />
      <Path
        d="M50 92C30 92 28 66 29 48 30 26 38 12 50 12s20 14 21 36c1 18-1 44-21 44z"
        fill="#141B33"
      />
      {bands.map((color, i) => (
        <Ellipse
          key={color}
          cx={50}
          cy={26 + i * 3.8}
          rx={21.5 - i * 0.7}
          ry={12 - i * 0.5}
          stroke={color}
          strokeWidth={3.2}
          fill="none"
          clipPath="url(#prismHead)"
        />
      ))}
    </Svg>
  );
}

function CloudsArt() {
  const puffs: Array<[number, number, number, string]> = [
    [12, 88, 22, '#E8842B'],
    [40, 95, 26, '#F5A331'],
    [75, 90, 24, '#E8842B'],
    [98, 80, 20, '#F2B04C'],
    [20, 62, 18, '#F5A331'],
    [50, 68, 22, '#F7B84E'],
    [82, 60, 19, '#F2953A'],
    [8, 40, 15, '#F9C86E'],
    [35, 42, 17, '#F5A331'],
    [65, 38, 18, '#F9C86E'],
    [92, 34, 15, '#F2B04C'],
    [22, 20, 13, '#FADf95'],
    [52, 16, 15, '#F9C86E'],
    [80, 14, 13, '#FAD995'],
  ];
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <Defs>
        <LinearGradient id="cloudSky" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#9AD4C8" />
          <Stop offset="1" stopColor="#F6D9A0" />
        </LinearGradient>
      </Defs>
      <Rect width={100} height={100} fill="url(#cloudSky)" />
      {puffs.map(([cx, cy, r, fill]) => (
        <Circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill={fill} opacity={0.96} />
      ))}
      <Circle cx={30} cy={80} r={16} fill="#FAD995" opacity={0.85} />
      <Circle cx={62} cy={84} r={18} fill="#F9C86E" opacity={0.85} />
    </Svg>
  );
}

function FloraArt() {
  const petals: Array<[number, number, number, string]> = [
    [28, 30, 9, '#E4572E'],
    [40, 22, 10, '#F2942B'],
    [54, 19, 9, '#F7C948'],
    [68, 23, 10, '#E4572E'],
    [78, 32, 8, '#F2942B'],
    [33, 21, 6, '#F7C948'],
    [61, 28, 7, '#EF8E4E'],
    [47, 28, 7, '#E4572E'],
    [72, 15, 6, '#F7C948'],
    [22, 38, 6, '#5B8C3E'],
    [80, 41, 6, '#5B8C3E'],
  ];
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <Defs>
        <LinearGradient id="floraSky" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#A8CFEE" />
          <Stop offset="1" stopColor="#DDEFFB" />
        </LinearGradient>
      </Defs>
      <Rect width={100} height={100} fill="url(#floraSky)" />
      <Circle cx={14} cy={64} r={12} fill="#FFFFFF" opacity={0.7} />
      <Circle cx={90} cy={58} r={14} fill="#FFFFFF" opacity={0.7} />
      <Path d="M50 96c-14 0-22-12-22-30 0-16 9-28 22-28s22 12 22 28c0 18-8 30-22 30z" fill="#E9C29B" />
      {petals.map(([cx, cy, r, fill]) => (
        <Circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill={fill} />
      ))}
      <Rect x={31} y={52} width={17} height={13} rx={6} fill="#26221F" />
      <Rect x={52} y={52} width={17} height={13} rx={6} fill="#26221F" />
      <Path d="M48 55h4" stroke="#26221F" strokeWidth={2.6} strokeLinecap="round" />
      <Path d="M31 55c-3-1-5-1-7 0M69 55c3-1 5-1 7 0" stroke="#26221F" strokeWidth={2} fill="none" />
      <Path d="M44 80c3 2.5 9 2.5 12 0" stroke="#C99A6A" strokeWidth={2.4} strokeLinecap="round" fill="none" />
    </Svg>
  );
}

export default function NftArt({ art }: NftArtProps) {
  if (art === 'balaclava') return <BalaclavaArt />;
  if (art === 'prism') return <PrismArt />;
  if (art === 'clouds') return <CloudsArt />;
  return <FloraArt />;
}
