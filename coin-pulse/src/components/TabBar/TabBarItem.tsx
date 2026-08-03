import { Pressable, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { SWAP_BUTTON_SIZE } from '@/constants/layout';
import { AppTab } from '@/enums/appTab.enum';
import { colors } from '@/theme/colors';
import TabBarIcon from './TabBarIcon';
import { TabBarItemProps } from './TabBar.types';

export default function TabBarItem({ tab, active, onPress }: TabBarItemProps) {
  if (tab === AppTab.Swap) {
    return (
      <Pressable
        className="flex-1 items-center"
        style={{ marginTop: -SWAP_BUTTON_SIZE / 3 }}
        onPress={onPress}
      >
        <Pressable
          className="items-center justify-center rounded-2xl bg-ink shadow-lg"
          style={{ width: SWAP_BUTTON_SIZE, height: SWAP_BUTTON_SIZE, elevation: 6 }}
          onPress={onPress}
        >
          <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
            <Path
              d="M6.5 9h11m0 0-3-3m3 3-3 3m3.5 6h-11m0 0 3-3m-3 3 3 3"
              stroke={colors.white}
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </Pressable>
      </Pressable>
    );
  }

  return (
    <Pressable className="flex-1 items-center pt-2" onPress={onPress}>
      <TabBarIcon tab={tab} active={active} />
      <Text
        className={`mt-1 text-[9px] ${active ? 'font-semi text-ink' : 'font-sans text-smoke'}`}
      >
        {tab}
      </Text>
    </Pressable>
  );
}
