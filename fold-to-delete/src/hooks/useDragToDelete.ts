import { useCallback, useRef, useState } from "react";
import { View } from "react-native";
import * as Haptics from "expo-haptics";
import { Gesture } from "react-native-gesture-handler";
import {
  Easing,
  Extrapolation,
  interpolate,
  runOnJS,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import {
  DRAG_ACTIVATION_DELAY_MS,
  GRAB_SPRING,
  REMOVAL_DELAY_MS,
  VANISH_DURATION_MS,
  ZONE_PROXIMITY_RESET_MS,
} from "@/constants/animations";
import { DELETE_ZONE_HEIGHT, ZONE_PROXIMITY_TRACK_DISTANCE } from "@/constants/layout";
import type { ActiveDrag, Folder } from "@/types";

import { useDragSharedValues } from "./useDragSharedValues";

export function useDragToDelete(zoneTop: number, onDelete: (item: Folder) => void) {
  const [active, setActive] = useState<ActiveDrag | null>(null);
  const activeRef = useRef<ActiveDrag | null>(null);
  const cellRefs = useRef<Record<string, View | null>>({});

  const dragValues = useDragSharedValues();
  const { translationX, translationY, lift, vanish, dragging, hover, zoneProximity } =
    dragValues;

  const registerCell = useCallback((id: string, ref: View | null) => {
    cellRefs.current[id] = ref;
  }, []);

  const resetDragValues = useCallback(() => {
    translationX.value = 0;
    translationY.value = 0;
    hover.value = 0;
    zoneProximity.value = 0;
  }, []);

  const pickUp = useCallback((item: Folder) => {
    const cell = cellRefs.current[item.id];
    if (!cell) return;
    cell.measureInWindow((x, y, width) => {
      const drag = { item, x, y, width };
      activeRef.current = drag;
      setActive(drag);
      lift.value = withSpring(1, GRAB_SPRING);
      dragging.value = 1;
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    });
  }, []);

  const settleBack = useCallback(() => {
    activeRef.current = null;
    setActive(null);
    resetDragValues();
  }, [resetDragValues]);

  const confirmDelete = useCallback(() => {
    const drag = activeRef.current;
    if (!drag) return;
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    vanish.value = withTiming(1, {
      duration: VANISH_DURATION_MS,
      easing: Easing.in(Easing.quad),
    });
    dragging.value = 0;
    setTimeout(() => {
      onDelete(drag.item);
      activeRef.current = null;
      setActive(null);
      lift.value = 0;
      vanish.value = 0;
      resetDragValues();
    }, REMOVAL_DELAY_MS);
  }, [onDelete, resetDragValues]);

  const buildPanGesture = (item: Folder) =>
    Gesture.Pan()
      .activateAfterLongPress(DRAG_ACTIVATION_DELAY_MS)
      .maxPointers(1)
      .shouldCancelWhenOutside(false)
      .onStart(() => {
        runOnJS(pickUp)(item);
      })
      .onUpdate((e) => {
        translationX.value = e.translationX;
        translationY.value = e.translationY;
        hover.value = e.absoluteY > zoneTop ? 1 : 0;
        zoneProximity.value = interpolate(
          e.absoluteY,
          [zoneTop - ZONE_PROXIMITY_TRACK_DISTANCE, zoneTop + DELETE_ZONE_HEIGHT / 2],
          [0, 1],
          Extrapolation.CLAMP
        );
      })
      .onEnd(() => {
        if (hover.value === 1) {
          runOnJS(confirmDelete)();
        } else {
          lift.value = withSpring(0, GRAB_SPRING);
          dragging.value = 0;
          zoneProximity.value = withTiming(0, { duration: ZONE_PROXIMITY_RESET_MS });
          translationX.value = withSpring(0, GRAB_SPRING);
          translationY.value = withSpring(0, GRAB_SPRING, (finished) => {
            if (finished) runOnJS(settleBack)();
          });
        }
      });

  return { active, dragValues, registerCell, buildPanGesture };
}
