import { useEffect, useRef } from 'react';
import { useColorScheme, View } from 'react-native';
import MapView, { Region } from 'react-native-maps';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  TAB_BAR_BOTTOM_OFFSET,
  TAB_BAR_HEIGHT,
  ZOOM_STEP,
} from '@/constants/layout';
import { MAP_REGION, PROPERTIES } from '@/data/properties';
import { springs } from '@/theme';
import { ExploreMapScreenProps } from './ExploreMapScreen.types';
import CircleActionButton from './components/CircleActionButton';
import LocationPill from './components/LocationPill';
import PriceMarker from './components/PriceMarker';
import PropertyCarousel from './components/PropertyCarousel';
import UserLocationMarker from './components/UserLocationMarker';
import ZoomControls from './components/ZoomControls';

const PAN_DIRECTION_THRESHOLD = 6;

export default function ExploreMapScreen({ collapsed = false, onPanDirection }: ExploreMapScreenProps) {
  const insets = useSafeAreaInsets();
  const isDark = useColorScheme() === 'dark';
  const mapRef = useRef<MapView>(null);
  const regionRef = useRef<Region>(MAP_REGION);
  const lastPanY = useRef<number | null>(null);
  const collapseProgress = useSharedValue(0);

  useEffect(() => {
    collapseProgress.value = withSpring(collapsed ? 1 : 0, springs.collapse);
  }, [collapsed, collapseProgress]);

  const carouselStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(collapseProgress.value, [0, 1], [0, 14]) },
      { scale: interpolate(collapseProgress.value, [0, 1], [1, 0.96]) },
    ],
  }));

  const handlePanDrag = (y: number) => {
    if (lastPanY.current !== null) {
      const dy = y - lastPanY.current;
      if (Math.abs(dy) < PAN_DIRECTION_THRESHOLD) return;
      onPanDirection?.(dy < 0 ? 'up' : 'down');
    }
    lastPanY.current = y;
  };

  const carouselBottom = insets.bottom + TAB_BAR_BOTTOM_OFFSET + TAB_BAR_HEIGHT + 16;

  const zoomBy = (factor: number) => {
    const region = regionRef.current;
    mapRef.current?.animateToRegion(
      {
        ...region,
        latitudeDelta: region.latitudeDelta * factor,
        longitudeDelta: region.longitudeDelta * factor,
      },
      250,
    );
  };

  return (
    <View className="flex-1">
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        initialRegion={MAP_REGION}
        userInterfaceStyle={isDark ? 'dark' : 'light'}
        onTouchStart={() => {
          lastPanY.current = null;
        }}
        onPanDrag={(event) => handlePanDrag(event.nativeEvent.position.y)}
        onRegionChangeComplete={(region) => {
          regionRef.current = region;
        }}
      >
        {PROPERTIES.map((property) => (
          <PriceMarker key={property.id} property={property} />
        ))}
        <UserLocationMarker />
      </MapView>

      <View
        className="absolute left-5 right-5 flex-row items-start justify-between"
        style={{ top: insets.top + 8 }}
      >
        <LocationPill collapsed={collapsed} />
        <View className="flex-row gap-2.5">
          <CircleActionButton
            icon="locate"
            onPress={() => mapRef.current?.animateToRegion(MAP_REGION, 400)}
          />
          <CircleActionButton icon="swap" />
        </View>
      </View>

      <View className="absolute left-5" style={{ bottom: carouselBottom + 132 }}>
        <ZoomControls onZoomIn={() => zoomBy(1 / (1 + ZOOM_STEP))} onZoomOut={() => zoomBy(1 + ZOOM_STEP)} />
      </View>

      <Animated.View
        className="absolute left-0 right-0"
        style={[{ bottom: carouselBottom }, carouselStyle]}
      >
        <PropertyCarousel properties={PROPERTIES} />
      </Animated.View>
    </View>
  );
}
