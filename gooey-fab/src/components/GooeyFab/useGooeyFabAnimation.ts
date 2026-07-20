import { useState } from "react";
import {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";

import {
  ACTION_STAGGER_MS,
  CLOSE_SPRING,
  FAB_CENTER_Y,
  OPEN_SPRING,
  PLUS_ICON_OPEN_ROTATION_DEG,
  VIDEO_ACTION_OFFSET_Y,
  VIDEO_OPEN_SPRING,
  VOICE_ACTION_OFFSET_Y,
} from "@/constants/gooeyFab";

export function useGooeyFabAnimation() {
  const [isOpen, setIsOpen] = useState(false);

  const progress = useSharedValue(0);
  const voiceDrive = useSharedValue(0);
  const videoDrive = useSharedValue(0);

  const toggle = () => {
    if (isOpen) {
      progress.value = withSpring(0, CLOSE_SPRING);
      videoDrive.value = withSpring(0, CLOSE_SPRING);
      voiceDrive.value = withDelay(ACTION_STAGGER_MS, withSpring(0, CLOSE_SPRING));
    } else {
      progress.value = withSpring(1, OPEN_SPRING);
      voiceDrive.value = withSpring(1, OPEN_SPRING);
      videoDrive.value = withDelay(ACTION_STAGGER_MS, withSpring(1, VIDEO_OPEN_SPRING));
    }
    setIsOpen(!isOpen);
  };

  const voiceCenterY = useDerivedValue(
    () => FAB_CENTER_Y + voiceDrive.value * VOICE_ACTION_OFFSET_Y,
  );
  const videoCenterY = useDerivedValue(
    () => FAB_CENTER_Y + videoDrive.value * VIDEO_ACTION_OFFSET_Y,
  );

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
  }));

  const plusIconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * PLUS_ICON_OPEN_ROTATION_DEG}deg` }],
  }));

  return {
    isOpen,
    toggle,
    voiceDrive,
    videoDrive,
    voiceCenterY,
    videoCenterY,
    backdropStyle,
    plusIconStyle,
  };
}
