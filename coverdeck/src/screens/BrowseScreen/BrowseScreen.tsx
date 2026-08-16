import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

import { albums } from '@/data/albums';
import { tabBarController } from '@/tabBarController';
import { colors } from '@/theme';

export default function BrowseScreen() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const { scrollRef, onScroll } = tabBarController.useCollapsingScroll('browse');
  const tileSize = (width - 20 * 2 - 16) / 2;

  return (
    <Animated.ScrollView
      ref={scrollRef}
      onScroll={onScroll}
      scrollEventThrottle={16}
      style={styles.screen}
      contentContainerStyle={{
        paddingTop: insets.top + 16,
        paddingHorizontal: 20,
        paddingBottom: 150,
      }}>
      <Text style={styles.heading}>Browse</Text>
      <View style={styles.grid}>
        {albums.map((album) => (
          <View key={album.id} style={{ width: tileSize }}>
            <Image
              source={{ uri: album.imageUrl }}
              style={[styles.tile, { width: tileSize, height: tileSize }]}
              contentFit="cover"
              transition={200}
            />
            <Text style={styles.tileTitle} numberOfLines={1}>
              {album.title}
            </Text>
            <Text style={styles.tileArtist} numberOfLines={1}>
              {album.artist}
            </Text>
          </View>
        ))}
      </View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.label,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  tile: {
    borderRadius: 10,
    borderCurve: 'continuous',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.coverBorder,
  },
  tileTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.label,
    marginTop: 8,
  },
  tileArtist: {
    fontSize: 13,
    color: colors.secondaryLabel,
    marginTop: 2,
  },
});
