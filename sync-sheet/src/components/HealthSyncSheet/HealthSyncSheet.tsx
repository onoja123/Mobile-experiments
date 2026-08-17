import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import * as Haptics from 'expo-haptics';

import BottomSheet from '@/components/BottomSheet';
import ContinueButton from '@/components/ContinueButton';
import IconStack from '@/components/IconStack';
import SyncRows, { ROW_COUNT, ROWS_PER_PRESS } from '@/components/SyncRows';
import { colors } from '@/theme';

import type { HealthSyncSheetProps } from './HealthSyncSheet.types';

// Keep the rows at their revealed height until the sheet has fully left,
// otherwise it visibly shrinks mid-dismissal.
const DISMISS_CLEANUP_DELAY_MS = 450;

export default function HealthSyncSheet({
  visible,
  onDismiss,
  blurTarget,
}: HealthSyncSheetProps) {
  const [visibleRows, setVisibleRows] = useState(0);
  const allShown = visibleRows >= ROW_COUNT;

  useEffect(() => {
    if (visible) return;
    const cleanup = setTimeout(() => setVisibleRows(0), DISMISS_CLEANUP_DELAY_MS);
    return () => clearTimeout(cleanup);
  }, [visible]);

  const handleContinue = () => {
    const next = Math.min(visibleRows + ROWS_PER_PRESS, ROW_COUNT);
    setVisibleRows(next);
    if (next >= ROW_COUNT) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  };

  return (
    <BottomSheet visible={visible} onDismiss={onDismiss} blurTarget={blurTarget}>
      <IconStack synced={visibleRows > 0} />
      <Text style={[styles.title, { color: colors.label }]}>Apple Health Sync</Text>
      <Text style={[styles.caption, { color: colors.secondaryLabel }]}>
        Connect with Apple Health so both apps can gossip about your workouts behind your back.
      </Text>
      <SyncRows count={visibleRows} />
      <ContinueButton
        label={allShown ? 'Done' : 'Continue'}
        onPress={allShown ? onDismiss : handleContinue}
      />
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 10,
  },
  caption: {
    fontSize: 15,
    lineHeight: 20,
    marginTop: 8,
    marginBottom: 16,
    height: 40,
  },
});
