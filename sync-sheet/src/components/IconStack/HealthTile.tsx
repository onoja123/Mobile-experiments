import { StyleSheet, View } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

import { usePalette } from '@/theme';

import { TILE_RADIUS, TILE_SIZE } from './IconStack.constants';

const HEART_PATH =
  'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';

export default function HealthTile() {
  const palette = usePalette();

  return (
    <View style={[styles.tile, { borderColor: palette.tileBorder }]}>
      <Svg width={34} height={34} viewBox="0 0 24 24">
        <Defs>
          <LinearGradient id="heart" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FF7AB6" />
            <Stop offset="1" stopColor="#FF2719" />
          </LinearGradient>
        </Defs>
        <Path d={HEART_PATH} fill="url(#heart)" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: TILE_SIZE,
    height: TILE_SIZE,
    borderRadius: TILE_RADIUS,
    borderCurve: 'continuous',
    backgroundColor: '#FFFFFF',
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
