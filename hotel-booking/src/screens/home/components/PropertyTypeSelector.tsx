import { Pressable, Text, View } from 'react-native';
import * as Haptics from 'expo-haptics';

import { PropertyType } from '@/enums';

type PropertyTypeSelectorProps = {
  selected: PropertyType;
  onSelect: (type: PropertyType) => void;
};

export function PropertyTypeSelector({ selected, onSelect }: PropertyTypeSelectorProps) {
  return (
    <View className="mt-6 flex-row flex-wrap gap-2">
      {Object.values(PropertyType).map((type) => {
        const isSelected = type === selected;
        return (
          <Pressable
            key={type}
            className={`h-10 items-center justify-center rounded-full px-4 ${
              isSelected ? 'bg-pill' : 'border border-line bg-white'
            }`}
            onPress={() => {
              Haptics.selectionAsync();
              onSelect(type);
            }}
          >
            <Text
              className={`font-jakarta-medium text-[13px] ${
                isSelected ? 'text-white' : 'text-ink'
              }`}
            >
              {type}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
