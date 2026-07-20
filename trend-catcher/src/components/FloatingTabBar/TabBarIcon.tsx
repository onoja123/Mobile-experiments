import Svg, { Path } from 'react-native-svg';

import { AppTab } from '@/enums/appTab.enum';
import { TabBarIconProps } from './FloatingTabBar.types';

const pathByTab: Record<AppTab, string> = {
  [AppTab.Home]: 'M4 10.5 12 4l8 6.5V20h-5.5v-5h-5v5H4v-9.5Z',
  [AppTab.Explore]: 'M5 5h5v5H5V5Zm9 0h5v5h-5V5ZM5 14h5v5H5v-5Zm9 0h5v5h-5v-5Z',
  [AppTab.Saved]:
    'M12 20s-7-4.5-9-9c-1.2-2.8.6-6 3.6-6 1.8 0 3.2 1 4 2.3C11.4 6 12.8 5 14.6 5c3 0 4.8 3.2 3.6 6-2 4.5-9 9-6.2 9Z',
  [AppTab.Closet]:
    'M8 4h8l4 3-2.5 3L16 8.5V20H8V8.5L6.5 10 4 7l4-3Z',
};

export default function TabBarIcon({ tab, active }: TabBarIconProps) {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
      <Path
        d={pathByTab[tab]}
        stroke={active ? '#111111' : '#9A9A9A'}
        strokeWidth={1.7}
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}
