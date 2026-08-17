import { StyleSheet, View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

import Icon from '@/components/Icon';

import { TILE_RADIUS, TILE_SIZE } from './IconStack.constants';

export default function AppTile() {
  return (
    <View style={styles.tile}>
      <Svg width={TILE_SIZE} height={TILE_SIZE} style={StyleSheet.absoluteFill}>
        <Defs>
          <LinearGradient id="app" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#6E6BFF" />
            <Stop offset="1" stopColor="#3B39C9" />
          </LinearGradient>
        </Defs>
        <Rect width={TILE_SIZE} height={TILE_SIZE} rx={TILE_RADIUS} fill="url(#app)" />
      </Svg>
      {/* Absolute too: on web an absolutely-positioned sibling paints over
          static ones, which would bury the glyph under the gradient. */}
      <View style={[StyleSheet.absoluteFill, styles.tile]}>
        <Icon name="bolt.fill" size={30} color="#FFFFFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: TILE_SIZE,
    height: TILE_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
