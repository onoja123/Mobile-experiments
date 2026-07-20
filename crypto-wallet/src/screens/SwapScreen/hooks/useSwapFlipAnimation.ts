import { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { springs } from '@/theme';

const ORBIT_X = 18;

export function useSwapFlipAnimation(flipped: boolean, onFlip: () => void) {
  const phase = useSharedValue(flipped ? 1 : 0);
  const rotation = useSharedValue(0);
  const rowAY = useSharedValue(0);
  const rowBY = useSharedValue(140);

  useEffect(() => {
    phase.value = withSpring(flipped ? 1 : 0, springs.sheet);
  }, [flipped, phase]);

  const handleFlipPress = () => {
    rotation.value = withSpring(rotation.value + Math.PI, springs.pop);
    onFlip();
  };

  const chipAStyle = useAnimatedStyle(() => {
    const travel = rowBY.value - rowAY.value;
    const arc = Math.sin(phase.value * Math.PI);
    return {
      transform: [
        { translateY: phase.value * travel },
        { translateX: arc * ORBIT_X },
        { scale: 1 + arc * 0.06 },
      ],
    };
  });

  const chipBStyle = useAnimatedStyle(() => {
    const travel = rowBY.value - rowAY.value;
    const arc = Math.sin(phase.value * Math.PI);
    return {
      transform: [
        { translateY: -phase.value * travel },
        { translateX: -arc * ORBIT_X },
        { scale: 1 + arc * 0.06 },
      ],
    };
  });

  const flipIconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}rad` }],
  }));

  return { rowAY, rowBY, chipAStyle, chipBStyle, flipIconStyle, handleFlipPress };
}
