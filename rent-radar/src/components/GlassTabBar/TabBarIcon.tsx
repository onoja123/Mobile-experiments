import Svg, { Circle, Path } from 'react-native-svg';

import { AppTab } from '@/enums/appTab.enum';
import { TabBarIconProps } from './GlassTabBar.types';

const SIZE = 26;

export default function TabBarIcon({ tab, color, filled = false }: TabBarIconProps) {
  switch (tab) {
    case AppTab.Home:
      return (
        <Svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="none">
          <Path
            d="M5 10.4 12 4.6l7 5.8V19a1 1 0 0 1-1 1h-3.6v-4.4a2.4 2.4 0 0 0-4.8 0V20H6a1 1 0 0 1-1-1v-8.6Z"
            stroke={color}
            strokeWidth={1.8}
            strokeLinejoin="round"
          />
        </Svg>
      );
    case AppTab.Explore:
      return (
        <Svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="none">
          <Circle cx={12} cy={12} r={8.6} stroke={color} strokeWidth={1.8} />
          <Path
            d="m15.6 8.4-2.1 4.9-5.1 2.3 2.1-4.9 5.1-2.3Z"
            fill={filled ? color : 'none'}
            stroke={filled ? 'none' : color}
            strokeWidth={1.6}
            strokeLinejoin="round"
          />
        </Svg>
      );
    case AppTab.Favorites:
      return (
        <Svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 19.3C9.2 17.4 3.5 13.4 3.5 9.1 3.5 6.8 5.3 5 7.6 5c1.8 0 3.4 1 4.4 2.6C13 6 14.6 5 16.4 5c2.3 0 4.1 1.8 4.1 4.1 0 4.3-5.7 8.3-8.5 10.2Z"
            stroke={color}
            strokeWidth={1.8}
            strokeLinejoin="round"
          />
        </Svg>
      );
    case AppTab.Chats:
      return (
        <Svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="none">
          <Circle cx={12} cy={12} r={8.6} stroke={color} strokeWidth={1.8} />
          <Path
            d="m7.8 13.6 2.7-3 2 1.8 2.6-2.8"
            stroke={color}
            strokeWidth={1.7}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );
    case AppTab.Profile:
      return (
        <Svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="none">
          <Circle cx={12} cy={7.8} r={3.3} stroke={color} strokeWidth={1.8} />
          <Path
            d="M5.4 19.6c.8-3.1 3.5-5.1 6.6-5.1s5.8 2 6.6 5.1"
            stroke={color}
            strokeWidth={1.8}
            strokeLinecap="round"
          />
        </Svg>
      );
  }
}
