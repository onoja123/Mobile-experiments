import React from 'react';
import { Text, View } from 'react-native';

import { avatarSizes } from '@/constants/layout';
import { CURRENT_USER_AVATAR_URL } from '@/data/currentUser';
import { colors, typography } from '@/theme';

import Avatar from '../Avatar';
import IconCircleButton from '../IconCircleButton';
import { ScreenHeaderProps } from './ScreenHeader.types';

export default function ScreenHeader({
  title,
  actionIcon,
  actionIconSize = 20,
  className,
}: ScreenHeaderProps) {
  return (
    <View
      className={`flex-row items-center justify-between ${className ?? ''}`}
    >
      <Text className="font-semibold text-ink" style={typography.screenTitle}>
        {title}
      </Text>
      <View className="flex-row items-center gap-3">
        <IconCircleButton
          name={actionIcon}
          size={actionIconSize}
          color={colors.slate}
          className="bg-white"
        />
        <Avatar uri={CURRENT_USER_AVATAR_URL} size={avatarSizes.header} />
      </View>
    </View>
  );
}
