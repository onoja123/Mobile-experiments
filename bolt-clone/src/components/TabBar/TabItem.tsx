import { Pressable, Text } from 'react-native';
import type { TabItemProps } from '@/interfaces';
import { colors } from '@/theme';

export default function TabItem({ label, icon, active, onPress }: TabItemProps) {
  const color = active ? colors.ink : colors.muted;

  return (
    <Pressable className="flex-1 items-center justify-center gap-1" onPress={onPress}>
      {icon(color)}
      <Text className={`text-[12px] ${active ? 'font-semibold text-ink' : 'text-muted'}`}>
        {label}
      </Text>
    </Pressable>
  );
}
