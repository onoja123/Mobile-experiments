import { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';

import Coverflow, { type CoverflowHandle } from '@/components/Coverflow';
import { albums } from '@/data/albums';
import { colors } from '@/theme';

import ProgressBar from './components/ProgressBar';
import TransportControls from './components/TransportControls';

const WASH_INPUT = albums.map((_, index) => index);
const WASH_OUTPUT = albums.map((album) => album.wash);

export default function DeckScreen() {
  const insets = useSafeAreaInsets();
  const coverflowRef = useRef<CoverflowHandle>(null);
  const scrollX = useSharedValue(0);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const album = albums[index];

  const backdropStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(scrollX.get(), WASH_INPUT, WASH_OUTPUT),
  }));

  const handleIndexChange = (next: number) => {
    Haptics.selectionAsync();
    setIndex(next);
  };

  const handleSkip = (direction: -1 | 1) => {
    const next = Math.min(Math.max(index + direction, 0), albums.length - 1);
    coverflowRef.current?.scrollTo(next);
  };

  return (
    <Animated.View style={[styles.screen, backdropStyle, { paddingTop: insets.top + 12 }]}>
      <Text style={styles.eyebrow}>Now Playing</Text>
      <View style={styles.body}>
        <Coverflow
          ref={coverflowRef}
          albums={albums}
          onIndexChange={handleIndexChange}
          progress={scrollX}
        />
        <View style={styles.meta}>
          <Text style={styles.title} numberOfLines={1}>
            {album.title}
          </Text>
          <Text style={styles.artist} numberOfLines={1}>
            {album.artist}
          </Text>
        </View>
      </View>
      <View style={styles.player}>
        <ProgressBar playing={playing} durationSec={album.durationSec} resetKey={album.id} />
        <TransportControls
          playing={playing}
          onTogglePlay={() => setPlaying((p) => !p)}
          onSkip={handleSkip}
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    color: colors.tertiaryLabel,
    textAlign: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    rowGap: 8,
  },
  meta: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.label,
  },
  artist: {
    fontSize: 16,
    marginTop: 4,
    color: colors.secondaryLabel,
  },
  player: {
    marginTop: 'auto',
    paddingHorizontal: 32,
    paddingBottom: 148,
    rowGap: 18,
  },
});
