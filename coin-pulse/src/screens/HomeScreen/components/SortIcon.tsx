import Svg, { Path } from 'react-native-svg';

import { colors } from '@/theme/colors';

const BARS_PATH = 'M4 7.5h9M4 12h6M4 16.5h3.5';

const ARROW_PATH = 'M17.2 6.4v11.2m0 0-2.7-2.7m2.7 2.7 2.7-2.7';

export default function SortIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path d={BARS_PATH} stroke={colors.ink} strokeWidth={1.7} strokeLinecap="round" />
      <Path
        d={ARROW_PATH}
        stroke={colors.ink}
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
