import { Easing } from 'react-native-reanimated';

export const iosEase = Easing.bezier(0.25, 0.1, 0.25, 1);
export const iosEaseOut = Easing.out(Easing.cubic);
export const iosEaseInOut = Easing.inOut(Easing.ease);
