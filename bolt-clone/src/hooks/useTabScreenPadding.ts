import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  SCREEN_HORIZONTAL_PADDING,
  TAB_BAR_CONTENT_HEIGHT,
  TAB_SCREEN_BOTTOM_GAP,
  TAB_SCREEN_TOP_GAP,
} from '@/constants/layout';

export function useTabScreenPadding() {
  const insets = useSafeAreaInsets();

  return {
    paddingTop: insets.top + TAB_SCREEN_TOP_GAP,
    paddingBottom: TAB_BAR_CONTENT_HEIGHT + insets.bottom + TAB_SCREEN_BOTTOM_GAP,
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  };
}
