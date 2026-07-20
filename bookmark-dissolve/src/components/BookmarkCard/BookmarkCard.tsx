import { Text, View } from 'react-native';

import { shadows } from '@/theme';

import { CloseButton } from './CloseButton';
import type { BookmarkCardProps } from './BookmarkCard.types';

export function BookmarkCard({ title, icon, onClose, children, cardRef }: BookmarkCardProps) {
  return (
    <View className="flex-1 rounded-card bg-white" style={shadows.card}>
      <View
        ref={cardRef}
        collapsable={false}
        className="flex-1 overflow-hidden rounded-card bg-white">
        <View className="h-10 flex-row items-center gap-2 pl-2.5 pr-3">
          {icon}
          <Text className="flex-1 text-[14px] font-medium text-ink" numberOfLines={1}>
            {title}
          </Text>
          <CloseButton onPress={onClose} />
        </View>
        <View className="flex-1">{children}</View>
      </View>
    </View>
  );
}
