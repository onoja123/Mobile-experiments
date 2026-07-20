import BottomSheet, { useBottomSheetTimingConfigs } from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Dimensions, Keyboard } from 'react-native';
import {
  Extrapolation,
  interpolate,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  SEARCH_CLOSE_DURATION_MS,
  SEARCH_OPEN_DURATION_MS,
  SHEET_SETTLE_EASING,
} from '@/constants/animation';
import {
  COLLAPSED_SHEET_BOTTOM_GAP,
  SEARCH_BAR_HEIGHT,
  SHEET_HANDLE_HEIGHT,
  SHEET_MID_SCREEN_RATIO,
  TAB_BAR_CONTENT_HEIGHT,
} from '@/constants/layout';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SHEET_MID_HEIGHT = Math.round(SCREEN_HEIGHT * SHEET_MID_SCREEN_RATIO);

const SNAP_COLLAPSED = 0;
const SNAP_MID = 1;
const SNAP_FULL = 2;

export function useHomeSheet() {
  const insets = useSafeAreaInsets();
  const sheetRef = useRef<BottomSheet>(null);
  const currentIndex = useRef(SNAP_MID);
  const returnIndex = useRef(SNAP_MID);

  const tabBarHeight = TAB_BAR_CONTENT_HEIGHT + insets.bottom;
  const collapsedHeight =
    SHEET_HANDLE_HEIGHT + SEARCH_BAR_HEIGHT + COLLAPSED_SHEET_BOTTOM_GAP + tabBarHeight;
  const snapPoints = useMemo(
    () => [collapsedHeight, SHEET_MID_HEIGHT, SCREEN_HEIGHT],
    [collapsedHeight],
  );

  const position = useSharedValue(SCREEN_HEIGHT - SHEET_MID_HEIGHT);

  const collapseProgress = useDerivedValue(() =>
    interpolate(
      position.value,
      [SCREEN_HEIGHT - SHEET_MID_HEIGHT, SCREEN_HEIGHT - collapsedHeight],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  );

  const collapseSheet = useCallback(() => {
    if (currentIndex.current !== SNAP_COLLAPSED) {
      currentIndex.current = SNAP_COLLAPSED;
      sheetRef.current?.snapToIndex(SNAP_COLLAPSED);
    }
  }, []);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchProgress = useSharedValue(0);

  const openSearch = useCallback(() => {
    returnIndex.current = Math.min(currentIndex.current, SNAP_MID);
    setIsSearchOpen(true);
    searchProgress.value = withTiming(1, {
      duration: SEARCH_OPEN_DURATION_MS,
      easing: SHEET_SETTLE_EASING,
    });
    sheetRef.current?.snapToIndex(SNAP_FULL);
  }, [searchProgress]);

  const closeSearch = useCallback(() => {
    Keyboard.dismiss();
    setIsSearchOpen(false);
    searchProgress.value = withTiming(0, {
      duration: SEARCH_CLOSE_DURATION_MS,
      easing: SHEET_SETTLE_EASING,
    });
    sheetRef.current?.snapToIndex(returnIndex.current);
  }, [searchProgress]);

  const animationConfigs = useBottomSheetTimingConfigs({
    duration: SEARCH_OPEN_DURATION_MS,
    easing: SHEET_SETTLE_EASING,
  });

  const handleSheetIndexChange = (index: number) => {
    currentIndex.current = index;
    if (isSearchOpen && index < SNAP_FULL) {
      Keyboard.dismiss();
      setIsSearchOpen(false);
      searchProgress.value = withTiming(0, {
        duration: SEARCH_CLOSE_DURATION_MS,
        easing: SHEET_SETTLE_EASING,
      });
    }
  };

  return {
    sheetRef,
    snapPoints,
    position,
    collapseProgress,
    collapseSheet,
    isSearchOpen,
    searchProgress,
    openSearch,
    closeSearch,
    animationConfigs,
    handleSheetIndexChange,
  };
}
