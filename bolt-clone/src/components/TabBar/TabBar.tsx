import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TAB_BAR_CONTENT_HEIGHT } from '@/constants/layout';
import { TabKey } from '@/enums';
import type { TabBarProps } from '@/interfaces';
import TabItem from './TabItem';

export default function TabBar({ active, onSelect }: TabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="absolute inset-x-0 bottom-0 border-t border-hairline bg-white"
      style={{ paddingBottom: insets.bottom }}
    >
      <View className="flex-row" style={{ height: TAB_BAR_CONTENT_HEIGHT }}>
        <TabItem
          label="Home"
          active={active === TabKey.HOME}
          onPress={() => onSelect(TabKey.HOME)}
          icon={(color) => (
            <Ionicons name={active === TabKey.HOME ? 'home' : 'home-outline'} size={24} color={color} />
          )}
        />
        <TabItem
          label="Rides"
          active={active === TabKey.RIDES}
          onPress={() => onSelect(TabKey.RIDES)}
          icon={(color) => (
            <MaterialCommunityIcons name="calendar-clock-outline" size={26} color={color} />
          )}
        />
        <TabItem
          label="Account"
          active={active === TabKey.ACCOUNT}
          onPress={() => onSelect(TabKey.ACCOUNT)}
          icon={(color) => (
            <Ionicons
              name={active === TabKey.ACCOUNT ? 'person-circle' : 'person-circle-outline'}
              size={26}
              color={color}
            />
          )}
        />
      </View>
    </View>
  );
}
