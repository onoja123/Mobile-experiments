import { ScrollView, View } from 'react-native';
import type { RideOptionListProps } from '@/interfaces';
import RideOptionRow from './RideOptionRow';

export default function RideOptionList({ options, selectedId, onSelect }: RideOptionListProps) {
  return (
    <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
      {options.map((option, index) => {
        const showDivider =
          index > 0 && options[index - 1].id !== selectedId && option.id !== selectedId;
        return (
          <View key={option.id}>
            {showDivider && <View className="ml-[80px] h-px bg-hairline" />}
            <RideOptionRow
              option={option}
              isSelected={selectedId === option.id}
              onPress={() => !option.isBusy && onSelect(option.id)}
            />
          </View>
        );
      })}
    </ScrollView>
  );
}
