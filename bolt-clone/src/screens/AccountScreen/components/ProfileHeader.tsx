import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import type { ProfileHeaderProps } from '@/interfaces';
import { colors } from '@/theme';

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <Pressable
      className="mt-6 flex-row items-center"
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
    >
      <View className="h-16 w-16 items-center justify-center rounded-full bg-brand-soft">
        <Text className="text-[22px] font-bold text-brand">{profile.initials}</Text>
      </View>
      <View className="ml-4 flex-1">
        <Text className="text-[20px] font-bold text-ink">{profile.fullName}</Text>
        <View className="mt-1 flex-row items-center gap-1">
          <Ionicons name="star" size={14} color={colors.ink} />
          <Text className="text-[14px] text-muted">
            {profile.rating} · {profile.phone}
          </Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color={colors.chevron} />
    </Pressable>
  );
}
