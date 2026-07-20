import { Platform } from 'react-native';

export const serifFontFamily = Platform.select({ ios: 'Georgia', default: 'serif' });
