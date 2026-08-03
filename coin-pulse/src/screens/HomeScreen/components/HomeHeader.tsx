import { Text, View } from 'react-native';

import Avatar from '@/components/Avatar';
import { PROFILE } from '@/data/profile';
import BellIcon from './BellIcon';

export default function HomeHeader() {
  return (
    <View className="flex-row items-center">
      <Avatar name={PROFILE.name} />
      <View className="ml-3 flex-1">
        <Text className="text-[15px] font-strong text-ink">{PROFILE.name}</Text>
        <Text className="font-sans mt-0.5 text-[11px] text-smoke">{PROFILE.plan}</Text>
      </View>
      <BellIcon />
    </View>
  );
}
