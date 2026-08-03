import Svg, { Path } from 'react-native-svg';

import { AppTab } from '@/enums/appTab.enum';
import { colors } from '@/theme/colors';
import { TabBarIconProps } from './TabBar.types';

const pathByTab: Record<AppTab, string> = {
  [AppTab.Home]: 'M4 10.5 12 4l8 6.5V20h-5.5v-5h-5v5H4v-9.5Z',
  [AppTab.Assets]:
    'M4 8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 15.5v-7Zm10 3.5h6',
  [AppTab.Swap]: 'M6.5 9h11m0 0-3-3m3 3-3 3m3.5 6h-11m0 0 3-3m-3 3 3 3',
  [AppTab.Markets]:
    'M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7Zm4.5 8v-3m3.5 3V9m3.5 6v-4.5',
  [AppTab.Profile]:
    'M12 11.6a3.7 3.7 0 1 0 0-7.4 3.7 3.7 0 0 0 0 7.4ZM4.9 20c0-3.4 3.2-5.7 7.1-5.7s7.1 2.3 7.1 5.7',
};

export default function TabBarIcon({ tab, active }: TabBarIconProps) {
  const filled = active && tab === AppTab.Home;

  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d={pathByTab[tab]}
        stroke={active ? colors.ink : colors.smoke}
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={filled ? colors.ink : 'none'}
      />
    </Svg>
  );
}
