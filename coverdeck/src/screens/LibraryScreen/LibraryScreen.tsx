import { StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

import Icon from '@/components/Icon';
import { albums } from '@/data/albums';
import { tabBarController } from '@/tabBarController';
import { colors } from '@/theme';

const PLAYLISTS = [
  { name: 'Heavy Rotation', count: 34, coverIndex: 0 },
  { name: 'Late Night Static', count: 21, coverIndex: 3 },
  { name: 'Front Row', count: 18, coverIndex: 4 },
  { name: 'Tape Deck Gold', count: 47, coverIndex: 6 },
  { name: 'Slow Mornings', count: 26, coverIndex: 9 },
  { name: 'Encore Material', count: 15, coverIndex: 7 },
  { name: 'Wires & Choirs', count: 31, coverIndex: 10 },
  { name: 'Afterglow', count: 22, coverIndex: 11 },
];

export default function LibraryScreen() {
  const insets = useSafeAreaInsets();
  const { scrollRef, onScroll } = tabBarController.useCollapsingScroll('library');

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
      <Text style={styles.heading}>Library</Text>
      {PLAYLISTS.map((playlist) => (
        <View key={playlist.name} style={styles.row}>
          <Image
            source={{ uri: albums[playlist.coverIndex].imageUrl }}
            style={styles.rowCover}
            contentFit="cover"
            transition={200}
          />
          <View style={styles.rowText}>
            <Text style={styles.rowTitle} numberOfLines={1}>
              {playlist.name}
            </Text>
            <Text style={styles.rowSubtitle}>{playlist.count} songs</Text>
          </View>
          <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
        </View>
      ))}
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
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    columnGap: 14,
  },
  rowCover: {
    width: 56,
    height: 56,
    borderRadius: 8,
    borderCurve: 'continuous',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.coverBorder,
  },
  rowText: {
    flex: 1,
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.label,
  },
  rowSubtitle: {
    fontSize: 13,
    color: colors.secondaryLabel,
    marginTop: 2,
  },
});
