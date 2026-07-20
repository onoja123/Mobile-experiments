import { View } from 'react-native';
import type { MenuSectionProps } from '@/interfaces';

export default function MenuSection({ children }: MenuSectionProps) {
  return <View className="mt-4 border-t border-hairline pt-2">{children}</View>;
}
