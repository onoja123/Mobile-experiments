import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import Svg, { Polygon } from 'react-native-svg';

import { FOLD_DEGENERATE_AREA, FOLD_TRIANGLE_SIZE } from '@/constants/fold';
import { unitTriangleTransform } from '@/helpers/unitTriangleTransform';
import type { FoldTriangleProps } from './StickyNote.types';

const baseStyle = {
  position: 'absolute' as const,
  left: 0,
  top: 0,
  width: FOLD_TRIANGLE_SIZE,
  height: FOLD_TRIANGLE_SIZE,
};

export default function FoldTriangle({ geometry, polygon, index, fill }: FoldTriangleProps) {
  const foldStyle = useAnimatedStyle(() => {
    const points = geometry.value[polygon];
    const ax = points[0];
    const ay = points[1];
    const bx = points[index * 2 + 2];
    const by = points[index * 2 + 3];
    const cx = points[index * 2 + 4];
    const cy = points[index * 2 + 5];
    const area = Math.abs((bx - ax) * (cy - ay) - (cx - ax) * (by - ay));
    return {
      opacity: area < FOLD_DEGENERATE_AREA ? 0 : 1,
      transform: [
        {
          matrix: unitTriangleTransform(
            (bx - ax) / FOLD_TRIANGLE_SIZE,
            (by - ay) / FOLD_TRIANGLE_SIZE,
            (cx - ax) / FOLD_TRIANGLE_SIZE,
            (cy - ay) / FOLD_TRIANGLE_SIZE,
            ax,
            ay
          ),
        },
      ],
    };
  });

  return (
    <Animated.View pointerEvents="none" style={[baseStyle, foldStyle]}>
      <Svg width={FOLD_TRIANGLE_SIZE} height={FOLD_TRIANGLE_SIZE} pointerEvents="none">
        <Polygon points={`0,0 ${FOLD_TRIANGLE_SIZE},0 0,${FOLD_TRIANGLE_SIZE}`} fill={fill} />
      </Svg>
    </Animated.View>
  );
}
