import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import type { RideOptionRowProps } from '@/interfaces';
import { colors } from '@/theme';

export default function RideOptionRow({ option, isSelected, onPress }: RideOptionRowProps) {
  const titleColor = option.isBusy ? 'text-faint' : 'text-ink';

  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center px-3 py-2.5 ${isSelected ? 'rounded-2xl border-[1.5px]' : ''}`}
      style={isSelected ? { borderColor: colors.boltGreen } : undefined}
    >
      <View className="w-14 items-center">
        <Text className="text-[38px]">{option.emoji}</Text>
      </View>
      <View className="ml-3 flex-1">
        <View className="flex-row items-start justify-between">
          <Text className={`text-[20px] font-bold ${titleColor}`}>{option.title}</Text>
          <Text className={`text-[20px] font-bold ${titleColor}`}>{option.price}</Text>
        </View>
        <View className="mt-0.5 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Text className="text-[16px] text-subtle">{option.eta}</Text>
            {option.seats != null && (
              <>
                <Ionicons
                  name="person"
                  size={13}
                  color={colors.subtle}
                  style={{ marginLeft: 10, marginRight: 2 }}
                />
                <Text className="text-[16px] text-subtle">{option.seats}</Text>
              </>
            )}
          </View>
          {option.originalPrice && (
            <Text className="text-[16px] text-faint line-through">{option.originalPrice}</Text>
          )}
        </View>
        {option.subtitle && <Text className="mt-0.5 text-[16px] text-subtle">{option.subtitle}</Text>}
        {option.tag && (
          <View className="mt-1.5 self-start rounded-md bg-mint px-2 py-1">
            <Text
              className="text-[12px] font-bold tracking-wide"
              style={{ color: colors.boltGreen }}
            >
              {option.tag}
            </Text>
          </View>
        )}
      </View>
    </Pressable>
  );
}
