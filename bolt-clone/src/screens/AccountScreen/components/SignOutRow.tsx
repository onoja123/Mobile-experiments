import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text } from 'react-native';
import { colors } from '@/theme';

export default function SignOutRow() {
  return (
    <Pressable
      className="flex-row items-center py-3.5"
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
    >
      <Ionicons name="log-out-outline" size={24} color={colors.danger} />
      <Text className="ml-4 text-[17px] text-danger">Log out</Text>
    </Pressable>
  );
}
