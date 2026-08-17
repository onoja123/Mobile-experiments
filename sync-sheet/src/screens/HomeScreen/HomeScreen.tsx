import { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurTargetView } from 'expo-blur';

import Fab from '@/components/Fab';
import HealthSyncSheet from '@/components/HealthSyncSheet';
import { colors } from '@/theme';

import MetricCard from './components/MetricCard';

export default function HomeScreen() {
  const [sheetVisible, setSheetVisible] = useState(false);
  const insets = useSafeAreaInsets();
  // Everything inside this view is what the sheet's blur samples on Android.
  const blurTarget = useRef<View>(null);

  const today = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <BlurTargetView
        ref={blurTarget}
        style={[styles.screen, { paddingTop: insets.top + 8 }]}>
        <Text style={[styles.eyebrow, { color: colors.secondaryLabel }]}>
          {today.toUpperCase()}
        </Text>
        <Text style={[styles.title, { color: colors.label }]}>Summary</Text>
        <View style={styles.cards}>
          <MetricCard
            symbol="flame.fill"
            tint="#FF9F0A"
            label="Move"
            value="428"
            unit="kcal"
            caption="Goal 520 kcal"
          />
          <MetricCard
            symbol="heart.fill"
            tint="#FF375F"
            label="Heart Rate"
            value="72"
            unit="bpm"
            caption="Resting, 5 min ago"
          />
          <MetricCard
            symbol="bed.double.fill"
            tint="#5E5CE6"
            label="Sleep"
            value="7 h 12 m"
            unit=""
            caption="In bed 11:48 PM – 7:26 AM"
          />
        </View>
        <Fab onPress={() => setSheetVisible(true)} />
      </BlurTargetView>
      <HealthSyncSheet
        visible={sheetVisible}
        onDismiss={() => setSheetVisible(false)}
        blurTarget={blurTarget}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  screen: {
    flex: 1,
    paddingHorizontal: 20,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    marginTop: 2,
  },
  cards: {
    marginTop: 20,
    rowGap: 12,
  },
});
