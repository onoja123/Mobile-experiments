import React from 'react';
import { Pressable } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { colors } from '@/theme';

import { IconCircleButtonProps } from './IconCircleButton.types';

export default function IconCircleButton({
  name,
  size = 20,
  color = colors.white,
  onPress,
  className,
}: IconCircleButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      className={`h-11 w-11 items-center justify-center rounded-full ${className ?? ''}`}
    >
      <Feather name={name} size={size} color={color} />
    </Pressable>
  );
}
