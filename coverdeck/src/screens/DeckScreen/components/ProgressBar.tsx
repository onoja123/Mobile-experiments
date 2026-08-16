import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { colors } from '@/theme';

type ProgressBarProps = {
  playing: boolean;
  durationSec: number;
  resetKey: string;
};

function formatDuration(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export default function ProgressBar({ playing, durationSec, resetKey }: ProgressBarProps) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.set(0);
    if (playing) {
      progress.set(withTiming(1, { duration: durationSec * 1000, easing: Easing.linear }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey]);

  useEffect(() => {
    if (playing) {
      const remaining = (1 - progress.get()) * durationSec * 1000;
      progress.set(withTiming(1, { duration: remaining, easing: Easing.linear }));
    } else {
      cancelAnimation(progress);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  const fillStyle = useAnimatedStyle(() => ({
    width: `${progress.get() * 100}%`,
  }));

  return (
    <View style={styles.wrap}>
      <View style={styles.track}>
        <Animated.View style={[styles.fill, fillStyle]} />
      </View>
      <View style={styles.labels}>
        <Text style={styles.time}>0:00</Text>
        <Text style={styles.time}>{formatDuration(durationSec)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
  },
  track: {
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.track,
    overflow: 'hidden',
  },
  fill: {
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.label,
  },
  labels: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 12,
    fontVariant: ['tabular-nums'],
    color: colors.tertiaryLabel,
  },
});
