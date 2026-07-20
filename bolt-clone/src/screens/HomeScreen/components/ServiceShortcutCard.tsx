import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import type { ServiceShortcutCardProps } from '@/interfaces';
import { colors } from '@/theme';

export default function ServiceShortcutCard({ shortcut }: ServiceShortcutCardProps) {
  return (
    <View className="flex-1">
      <View className="h-[132px] items-center justify-end rounded-2xl bg-field pb-2.5">
        <Text className="text-[44px]">{shortcut.emoji}</Text>
        <Text className="mt-1 text-[16px] font-semibold text-ink">{shortcut.title}</Text>
        <Text className="mt-px text-[13px] text-muted">{shortcut.subtitle}</Text>
      </View>
      {shortcut.hasPromoBadge && (
        <View className="absolute -top-2.5 left-0 h-7 w-9 items-center justify-center rounded-lg bg-brand">
          <Ionicons name="pricetag" size={13} color={colors.white} />
        </View>
      )}
    </View>
  );
}
