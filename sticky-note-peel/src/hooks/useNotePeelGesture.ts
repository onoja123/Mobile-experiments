import { Gesture } from 'react-native-gesture-handler';
import {
  Easing,
  runOnJS,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

import { DURATIONS, REMOVAL_SHRINK_DELAY, SPRINGS } from '@/constants/animations';
import { DOCK_HOVER_RADIUS } from '@/constants/dock';
import { FOLD_REST_INSET, PEEL_LONG_PRESS_MS } from '@/constants/fold';
import { INITIAL_NOTE_HEIGHT } from '@/constants/layout';
import { NOTE_ACTIONS } from '@/constants/noteActions';
import { getDockButtonCenterX } from '@/helpers/getDockButtonCenterX';
import { getDockRowCenterY } from '@/helpers/getDockRowCenterY';

const triggerFocusHaptic = () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
const triggerHoverHaptic = () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
const triggerDropHaptic = () =>
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

type NotePeelGestureConfig = {
  width: number;
  onFocus: () => void;
  onBlur: () => void;
  onAction: (actionIndex: number) => void;
};

export function useNotePeelGesture({ width, onFocus, onBlur, onAction }: NotePeelGestureConfig) {
  const noteHeight = useSharedValue(INITIAL_NOTE_HEIGHT);
  const dragX = useSharedValue(width - FOLD_REST_INSET);
  const dragY = useSharedValue(FOLD_REST_INSET);
  const lift = useSharedValue(0);
  const hoveredAction = useSharedValue(-1);
  const triggeredAction = useSharedValue(-1);
  const removal = useSharedValue(0);
  const removalShiftX = useSharedValue(0);
  const shimmer = useSharedValue(0);

  const settleBack = () => {
    'worklet';
    hoveredAction.value = -1;
    dragX.value = withSpring(width - FOLD_REST_INSET, SPRINGS.snapBack);
    dragY.value = withSpring(FOLD_REST_INSET, SPRINGS.snapBack);
    lift.value = withTiming(0, { duration: DURATIONS.settle });
    shimmer.value = 0;
    shimmer.value = withTiming(1, {
      duration: DURATIONS.noteShimmer,
      easing: Easing.inOut(Easing.quad),
    });
    runOnJS(onBlur)();
  };

  const panGesture = Gesture.Pan()
    .activateAfterLongPress(PEEL_LONG_PRESS_MS)
    .onStart(() => {
      lift.value = withTiming(1, { duration: DURATIONS.lift });
      runOnJS(triggerFocusHaptic)();
      runOnJS(onFocus)();
    })
    .onUpdate((event) => {
      dragX.value = width - FOLD_REST_INSET + event.translationX;
      dragY.value = FOLD_REST_INSET + event.translationY;

      const dockCenterY = getDockRowCenterY(noteHeight.value);
      let hovered = -1;
      for (let i = 0; i < NOTE_ACTIONS.length; i++) {
        const distance = Math.hypot(
          dragX.value - getDockButtonCenterX(i, width),
          dragY.value - dockCenterY
        );
        if (distance < DOCK_HOVER_RADIUS) hovered = i;
      }
      if (hovered !== hoveredAction.value) {
        hoveredAction.value = hovered;
        if (hovered >= 0) runOnJS(triggerHoverHaptic)();
      }
    })
    .onEnd(() => {
      const actionIndex = hoveredAction.value;
      if (actionIndex < 0) {
        settleBack();
        return;
      }
      triggeredAction.value = actionIndex;
      const targetX = getDockButtonCenterX(actionIndex, width);
      removalShiftX.value = targetX - width / 2;
      dragX.value = withTiming(targetX, { duration: DURATIONS.removalTravel });
      dragY.value = withTiming(getDockRowCenterY(noteHeight.value), {
        duration: DURATIONS.removalTravel,
      });
      removal.value = withDelay(
        REMOVAL_SHRINK_DELAY,
        withTiming(1, { duration: DURATIONS.removalShrink }, (finished) => {
          if (finished) runOnJS(onAction)(actionIndex);
        })
      );
      runOnJS(triggerDropHaptic)();
    })
    .onFinalize((_event, success) => {
      if (!success && triggeredAction.value < 0) settleBack();
    });

  return {
    panGesture,
    noteHeight,
    dragX,
    dragY,
    lift,
    hoveredAction,
    triggeredAction,
    removal,
    removalShiftX,
    shimmer,
  };
}
