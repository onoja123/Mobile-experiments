import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/theme/colors';

const BELL_PATH =
  'M6.2 10.4a5.8 5.8 0 1 1 11.6 0c0 2.9.8 4.6 1.6 5.7.4.6 0 1.4-.7 1.4H5.3c-.7 0-1.1-.8-.7-1.4.8-1.1 1.6-2.8 1.6-5.7Z';

const CLAPPER_PATH = 'M10.1 19.7a2.1 2.1 0 0 0 3.8 0';

export default function BellIcon() {
  return (
    <View>
      <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
        <Path
          d={BELL_PATH}
          stroke={colors.ink}
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d={CLAPPER_PATH} stroke={colors.ink} strokeWidth={1.7} strokeLinecap="round" />
      </Svg>
      <View className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-danger" />
    </View>
  );
}
