import Svg, { Polyline } from 'react-native-svg';

import { SPARKLINE_HEIGHT, SPARKLINE_WIDTH } from '@/constants/layout';
import { SparklineProps } from './Sparkline.types';

export default function Sparkline({ points, color }: SparklineProps) {
  const step = SPARKLINE_WIDTH / (points.length - 1);
  const path = points
    .map((value, index) => `${index * step},${SPARKLINE_HEIGHT - (value / 100) * (SPARKLINE_HEIGHT - 4) - 2}`)
    .join(' ');

  return (
    <Svg width={SPARKLINE_WIDTH} height={SPARKLINE_HEIGHT}>
      <Polyline
        points={path}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
