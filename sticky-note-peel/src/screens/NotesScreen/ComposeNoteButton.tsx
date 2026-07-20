import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COMPOSE_BUTTON_BOTTOM_MARGIN } from '@/constants/layout';
import { useChromeDimStyle } from '@/hooks/useChromeDimStyle';
import { colors, shadows } from '@/theme';
import type { ComposeNoteButtonProps } from './NotesScreen.types';

export default function ComposeNoteButton({ dim, isInteractive }: ComposeNoteButtonProps) {
  const insets = useSafeAreaInsets();
  const chromeStyle = useChromeDimStyle(dim);

  return (
    <Animated.View
      pointerEvents={isInteractive ? 'auto' : 'none'}
      style={[
        {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: insets.bottom + COMPOSE_BUTTON_BOTTOM_MARGIN,
          alignItems: 'center',
        },
        chromeStyle,
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.85}
        className="h-[58px] w-[58px] items-center justify-center rounded-full bg-white"
        style={shadows.composeButton}
      >
        <Feather name="edit-2" size={20} color={colors.noteText} />
      </TouchableOpacity>
    </Animated.View>
  );
}
