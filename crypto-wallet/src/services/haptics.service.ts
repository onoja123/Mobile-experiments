import { Platform } from 'react-native';
import * as Haptics from 'expo-haptics';

const enabled = Platform.OS !== 'web';

function fire(action: () => Promise<void>) {
  if (!enabled) return;
  action().catch(() => {});
}

export const haptics = {
  tap: () => fire(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)),
  press: () => fire(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)),
  selection: () => fire(() => Haptics.selectionAsync()),
  success: () =>
    fire(() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)),
};
