import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ROUTE_RECENTS_SLIDE_DISTANCE } from '@/constants/animation';
import { ROUTE_HEADER_CONTENT_HEIGHT, SHEET_HANDLE_HEIGHT } from '@/constants/layout';
import { RIDE_OPTIONS_ROUTE } from '@/constants/routes';
import HomeMap from './components/HomeMap';
import HomeSheetContent from './components/HomeSheetContent';
import MyLocationButton from './components/MyLocationButton';
import RouteHeader from './components/RouteHeader';
import RouteRecents from './components/RouteRecents';
import { useHomeSheet } from './hooks/useHomeSheet';
import { useSheetChrome } from './hooks/useSheetChrome';

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const {
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
  } = useHomeSheet();
  const { renderBackground, renderHandle } = useSheetChrome(position, insets.top);

  const homeContentStyle = useAnimatedStyle(() => ({
    opacity: 1 - searchProgress.value,
  }));

  const routeContentStyle = useAnimatedStyle(() => ({
    opacity: searchProgress.value,
    transform: [{ translateY: (1 - searchProgress.value) * ROUTE_RECENTS_SLIDE_DISTANCE }],
  }));

  return (
    <View className="flex-1 bg-white">
      <HomeMap onTouch={collapseSheet} />

      <MyLocationButton />

      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        animatedPosition={position}
        animationConfigs={animationConfigs}
        backgroundComponent={renderBackground}
        handleComponent={renderHandle}
        enableDynamicSizing={false}
        enablePanDownToClose={false}
        onChange={handleSheetIndexChange}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <Animated.View
            style={[{ flex: 1 }, homeContentStyle]}
            pointerEvents={isSearchOpen ? 'none' : 'auto'}
          >
            <HomeSheetContent collapseProgress={collapseProgress} onSearchPress={openSearch} />
          </Animated.View>
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              { paddingTop: ROUTE_HEADER_CONTENT_HEIGHT - SHEET_HANDLE_HEIGHT },
              routeContentStyle,
            ]}
            pointerEvents={isSearchOpen ? 'auto' : 'none'}
          >
            <RouteRecents
              onSelect={(destination) =>
                router.push({ pathname: RIDE_OPTIONS_ROUTE, params: { destination } })
              }
            />
          </Animated.View>
        </BottomSheetView>
      </BottomSheet>

      <RouteHeader progress={searchProgress} active={isSearchOpen} onClose={closeSearch} />
    </View>
  );
}
