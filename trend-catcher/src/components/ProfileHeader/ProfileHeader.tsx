import { Image, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/theme/colors';
import { ProfileHeaderProps } from './ProfileHeader.types';

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-5 pt-2">
      <View className="flex-row items-center">
        <Image source={{ uri: profile.avatarUrl }} className="h-10 w-10 rounded-full bg-mist" />
        <View className="ml-3">
          <Text className="text-sm font-semibold text-ink">{profile.name}</Text>
          <Text className="text-xs text-smoke">{profile.tagline}</Text>
        </View>
      </View>
      <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
        <Path
          d="M6 8h12l1 12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1L6 8Z"
          fill={colors.ink}
        />
        <Path
          d="M9 10V6a3 3 0 0 1 6 0v4"
          stroke={colors.ink}
          strokeWidth={1.8}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
}
