import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text } from 'react-native';
import type { MenuRowProps } from '@/interfaces';
import { colors } from '@/theme';

export default function MenuRow({ icon, label }: MenuRowProps) {
  return (
    <Pressable
      className="flex-row items-center py-3.5"
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
    >
      <Ionicons name={icon} size={24} color={colors.inkSoft} />
      <Text className="ml-4 flex-1 text-[17px] text-ink">{label}</Text>
      <Ionicons name="chevron-forward" size={20} color={colors.chevron} />
    </Pressable>
  );
}
