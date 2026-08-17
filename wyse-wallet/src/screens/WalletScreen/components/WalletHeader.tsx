import { Pressable, Text, View } from 'react-native';

import Icon from '@/components/Icon';
import { colors } from '@/theme';
import WalletAvatar from './WalletAvatar';

export default function WalletHeader() {
  return (
    <View className="flex-row items-center py-2 pl-2.5 pr-4">
      <WalletAvatar size={42} />
      <View className="ml-3 flex-1">
        <Pressable className="flex-row items-center self-start">
          <Text className="font-heading text-[16px] text-ink">Nova Vault</Text>
          <View className="ml-1.5 mt-0.5">
            <Icon name="chevron-down" size={14} color={colors.smoke} strokeWidth={2.2} />
          </View>
        </Pressable>
        <Text className="mt-0.5 font-sans text-[12px] text-smoke">0x7F2a...9cE41b</Text>
      </View>
      <Pressable hitSlop={8}>
        <Icon name="bell" size={20} />
      </Pressable>
    </View>
  );
}
