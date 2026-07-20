import React from 'react';

import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { CardStackRelation } from '@/enums';

type DestinationCardSlotProps = {
  progress: SharedValue<number>;
  relation: CardStackRelation;
  children: React.ReactNode;
};

export default function DestinationCardSlot({
  progress,
  relation,
  children,
}: DestinationCardSlotProps) {
  const style = useAnimatedStyle(() => {
    if (
      relation === CardStackRelation.None ||
      relation === CardStackRelation.Active
    ) {
      return { opacity: 1, transform: [{ translateY: 0 }] };
    }
    const p = progress.value;
    return {
      opacity: interpolate(p, [0, 0.6], [1, 0], Extrapolation.CLAMP),
      transform: [
        {
          translateY: interpolate(
            p,
            [0, 1],
            [0, relation === CardStackRelation.Below ? 90 : -60],
          ),
        },
      ],
    };
  }, [relation]);

  return <Animated.View style={style}>{children}</Animated.View>;
}
