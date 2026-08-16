import { StyleSheet, View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { SymbolView } from 'expo-symbols';

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
      <SymbolView name="bolt.fill" size={30} tintColor="#FFFFFF" />
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
