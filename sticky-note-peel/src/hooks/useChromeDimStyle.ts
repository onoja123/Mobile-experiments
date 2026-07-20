import { useAnimatedStyle, type SharedValue } from 'react-native-reanimated';

import { CHROME_DIM_AMOUNT } from '@/constants/animations';

export function useChromeDimStyle(dim: SharedValue<number>) {
  return useAnimatedStyle(() => ({ opacity: 1 - CHROME_DIM_AMOUNT * dim.value }));
}
