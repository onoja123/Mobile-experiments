import Svg, { Path } from 'react-native-svg';

import { SparklineProps } from './Sparkline.types';

export default function Sparkline({ points, color, width = 56, height = 26 }: SparklineProps) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min || 1;
  const step = width / (points.length - 1);

  const d = points
    .map((point, index) => {
      const x = index * step;
      const y = height - ((point - min) / span) * height;
      return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <Svg width={width} height={height}>
      <Path d={d} stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Svg>
  );
}
