import { StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  type SharedValue,
} from 'react-native-reanimated';
import MaskedView from '@react-native-masked-view/masked-view';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

import type { Album } from '@/data/albums';
import { colors } from '@/theme';

import { MAX_TILT_DEG, PERSPECTIVE, REFLECTION_RATIO, SIDE_SCALE } from './Coverflow.constants';

type CoverCardProps = {
  album: Album;
  index: number;
  scrollX: SharedValue<number>;
  size: number;
  spacing: number;
  centerGap: number;
  containerWidth: number;
};

export default function CoverCard({
  album,
  index,
  scrollX,
  size,
  spacing,
  centerGap,
  containerWidth,
}: CoverCardProps) {
  const reflectionHeight = size * REFLECTION_RATIO;

  const cardStyle = useAnimatedStyle(() => {
    const d = index - scrollX.get();
    // tanh eases the extra center gap in smoothly, so the focused cover
    // separates from the stack without a jump at the crossover.
    const translateX = d * spacing + Math.tanh(d * 1.6) * centerGap;
    const rotateY = interpolate(d, [-1, 0, 1], [MAX_TILT_DEG, 0, -MAX_TILT_DEG], Extrapolation.CLAMP);
    const scale = interpolate(
      Math.abs(d),
      [0, 1, 4],
      [1, SIDE_SCALE, SIDE_SCALE * 0.94],
      Extrapolation.CLAMP,
    );
    const opacity = interpolate(Math.abs(d), [0, 1, 4.5, 5.5], [1, 0.92, 0.6, 0], Extrapolation.CLAMP);

    return {
      zIndex: Math.round(1000 - Math.abs(d) * 10),
      opacity,
      transform: [
        { perspective: PERSPECTIVE },
        { translateX },
        { rotateY: `${rotateY}deg` },
        { scale },
      ],
    };
  });

  return (
    <Animated.View
      style={[styles.card, { left: containerWidth / 2 - size / 2, width: size }, cardStyle]}>
      <Image
        source={{ uri: album.imageUrl }}
        style={[styles.cover, { width: size, height: size }]}
        contentFit="cover"
        transition={200}
        recyclingKey={album.id}
      />
      {/* Alpha-masked so the reflection fades into whatever the animated
          backdrop happens to be, instead of a fixed background color. */}
      <MaskedView
        style={[styles.reflection, { width: size, height: reflectionHeight }]}
        maskElement={
          <LinearGradient
            colors={['rgba(0,0,0,0.45)', 'rgba(0,0,0,0.12)', 'transparent']}
            locations={[0, 0.55, 1]}
            style={StyleSheet.absoluteFill}
          />
        }>
        <Image
          source={{ uri: album.imageUrl }}
          style={{ width: size, height: size, transform: [{ scaleY: -1 }] }}
          contentFit="cover"
        />
      </MaskedView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    top: 0,
  },
  cover: {
    borderRadius: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.coverBorder,
  },
  reflection: {
    marginTop: 3,
    borderRadius: 6,
    overflow: 'hidden',
  },
});
