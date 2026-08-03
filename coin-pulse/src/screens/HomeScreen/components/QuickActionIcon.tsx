import { ReactNode } from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { ACTION_ICON_SIZE } from '@/constants/layout';
import { colors } from '@/theme/colors';
import { QuickAction, QuickActionIconProps } from './QuickActions.types';

const glyphByAction: Record<QuickAction, ReactNode> = {
  'Top up': (
    <Path
      d="M15 9.6v10.8M9.6 15h10.8"
      stroke={colors.white}
      strokeWidth={2.2}
      strokeLinecap="round"
    />
  ),
  Send: (
    <Path
      d="M10.6 19.4 19.4 10.6m0 0h-6.1m6.1 0v6.1"
      stroke={colors.white}
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Earn: (
    <>
      <Path d="M19.6 10.4 10.4 19.6" stroke={colors.white} strokeWidth={2.2} strokeLinecap="round" />
      <Circle cx={11.8} cy={11.8} r={1.9} stroke={colors.white} strokeWidth={2} />
      <Circle cx={18.2} cy={18.2} r={1.9} stroke={colors.white} strokeWidth={2} />
    </>
  ),
};

export default function QuickActionIcon({ action }: QuickActionIconProps) {
  return (
    <Svg width={ACTION_ICON_SIZE} height={ACTION_ICON_SIZE} viewBox="0 0 30 30" fill="none">
      <Rect width={30} height={30} rx={10} fill={colors.ink} />
      {glyphByAction[action]}
    </Svg>
  );
}
