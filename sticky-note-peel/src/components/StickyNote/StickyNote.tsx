import React, { useMemo } from 'react';
import { View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  LinearTransition,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import {
  DIMMED_NOTE_OPACITY,
  DURATIONS,
  NOTE_LIFT,
  NOTE_SHIMMER,
  SPRINGS,
} from '@/constants/animations';
import { DOCK_GAP } from '@/constants/dock';
import { FOLD_HANDLE_SIZE, NOTE_FLAP_SHADE } from '@/constants/fold';
import { ACTIVE_NOTE_Z_INDEX } from '@/constants/layout';
import { NOTE_ACTIONS } from '@/constants/noteActions';
import { computeFoldGeometry } from '@/helpers/computeFoldGeometry';
import { useNotePeelGesture } from '@/hooks/useNotePeelGesture';
import { colors, shadows } from '@/theme';
import { shade } from '@/utils/color';
import ActionDock from '../ActionDock';
import Shimmer from '../Shimmer';
import FoldTriangle from './FoldTriangle';
import NoteContent from './NoteContent';
import type { StickyNoteProps } from './StickyNote.types';

const FOLD_FAN_INDICES = [0, 1, 2];

export default function StickyNote({
  note,
  width,
  isActive,
  isDimmed,
  onFocus,
  onBlur,
  onRemove,
}: StickyNoteProps) {
  const {
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
  } = useNotePeelGesture({
    width,
    onFocus: () => onFocus(note.id),
    onBlur,
    onAction: (actionIndex) => onRemove(note.id, NOTE_ACTIONS[actionIndex].label),
  });

  const geometry = useDerivedValue(() =>
    computeFoldGeometry(width, noteHeight.value, dragX.value, dragY.value)
  );

  const flapColor = useMemo(() => shade(note.color, NOTE_FLAP_SHADE), [note.color]);

  const dimStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isDimmed ? DIMMED_NOTE_OPACITY : 1, { duration: DURATIONS.dim }),
  }));

  const liftStyle = useAnimatedStyle(() => ({
    opacity: 1 - removal.value,
    transform: [
      { translateY: removal.value * (noteHeight.value / 2 + DOCK_GAP) },
      { translateX: removal.value * removalShiftX.value },
      { scale: (1 + NOTE_LIFT.scaleDelta * lift.value) * (1 - NOTE_LIFT.shrink * removal.value) },
    ],
    shadowOpacity: NOTE_LIFT.shadowOpacity * lift.value,
  }));

  return (
    <Animated.View
      layout={LinearTransition.springify()
        .damping(SPRINGS.noteListLayout.damping)
        .stiffness(SPRINGS.noteListLayout.stiffness)}
      style={[
        { zIndex: isActive ? ACTIVE_NOTE_Z_INDEX : 0, elevation: isActive ? ACTIVE_NOTE_Z_INDEX : 0 },
        dimStyle,
      ]}
    >
      <Animated.View style={[shadows.liftedNote, liftStyle]}>
        <View
          className="overflow-hidden rounded-2xl px-4 pb-4 pt-[14px]"
          style={{ backgroundColor: note.color }}
          onLayout={(event) => {
            noteHeight.value = event.nativeEvent.layout.height;
          }}
        >
          <NoteContent note={note} />

          <Shimmer
            progress={shimmer}
            width={width}
            height={NOTE_SHIMMER.height}
            band={NOTE_SHIMMER.band}
            opacity={NOTE_SHIMMER.opacity}
            skew={NOTE_SHIMMER.skew}
          />
        </View>

        {FOLD_FAN_INDICES.map((index) => (
          <FoldTriangle
            key={`clipped-${index}`}
            geometry={geometry}
            polygon="clipped"
            index={index}
            fill={colors.ink}
          />
        ))}
        {FOLD_FAN_INDICES.map((index) => (
          <FoldTriangle
            key={`flap-${index}`}
            geometry={geometry}
            polygon="flap"
            index={index}
            fill={flapColor}
          />
        ))}

        <GestureDetector gesture={panGesture}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: FOLD_HANDLE_SIZE,
              height: FOLD_HANDLE_SIZE,
            }}
          />
        </GestureDetector>
      </Animated.View>

      {isActive ? <ActionDock hovered={hoveredAction} triggered={triggeredAction} /> : null}
    </Animated.View>
  );
}
