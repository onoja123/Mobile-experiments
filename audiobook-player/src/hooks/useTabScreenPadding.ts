import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  MINI_PLAYER_HEIGHT,
  SCREEN_TOP_PADDING,
  SCROLL_BOTTOM_CLEARANCE,
  TAB_BAR_HEIGHT,
} from "@/constants/layout";

export function useTabScreenPadding() {
  const insets = useSafeAreaInsets();
  return {
    paddingTop: insets.top + SCREEN_TOP_PADDING,
    paddingBottom: TAB_BAR_HEIGHT + insets.bottom + MINI_PLAYER_HEIGHT + SCROLL_BOTTOM_CLEARANCE,
  };
}
