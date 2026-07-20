import { Platform } from 'react-native';

export const skiaFontFamily = Platform.select({
  ios: 'Helvetica Neue',
  default: 'sans-serif',
});
