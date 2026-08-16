import { useColorScheme } from 'react-native';

import { dark, light, type Palette } from './colors';

export function usePalette(): Palette {
  return useColorScheme() === 'dark' ? dark : light;
}
