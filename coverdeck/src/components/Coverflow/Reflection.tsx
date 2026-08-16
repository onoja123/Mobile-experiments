import Svg, {
  Defs,
  G,
  Image as SvgImage,
  LinearGradient,
  Mask,
  Rect,
  Stop,
} from 'react-native-svg';

type ReflectionProps = {
  uri: string;
  id: string;
  size: number;
  height: number;
};

// An SVG alpha mask rather than @react-native-masked-view: that library's web
// build is a stub that drops its children, and a real alpha fade lets the
// reflection blend into the animated backdrop instead of a fixed color.
export default function Reflection({ uri, id, size, height }: ReflectionProps) {
  const gradientId = `reflection-fade-${id}`;
  const maskId = `reflection-mask-${id}`;

  return (
    <Svg width={size} height={height}>
      <Defs>
        <LinearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFFFFF" stopOpacity="0.42" />
          <Stop offset="0.55" stopColor="#FFFFFF" stopOpacity="0.12" />
          <Stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </LinearGradient>
        <Mask id={maskId}>
          <Rect width={size} height={height} fill={`url(#${gradientId})`} />
        </Mask>
      </Defs>
      <G mask={`url(#${maskId})`}>
        <G transform={`translate(0, ${size}) scale(1, -1)`}>
          <SvgImage
            href={{ uri }}
            x="0"
            y="0"
            width={size}
            height={size}
            preserveAspectRatio="xMidYMid slice"
          />
        </G>
      </G>
    </Svg>
  );
}
