import { Pressable, Text, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PressableScale } from '@/components';
import { MIN_BOTTOM_INSET } from '@/constants/layout';
import { BottomTab } from '@/enums';
import { palette, shadows } from '@/theme';

const TAB_ICONS: Record<BottomTab, keyof typeof Feather.glyphMap> = {
  [BottomTab.Home]: 'home',
  [BottomTab.Saved]: 'heart',
  [BottomTab.Chat]: 'message-circle',
  [BottomTab.Profile]: 'user',
};

type BottomNavProps = {
  active: BottomTab;
  onChange: (tab: BottomTab) => void;
};

export function BottomNav({ active, onChange }: BottomNavProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="absolute left-5 right-5 flex-row items-center"
      style={{ bottom: Math.max(insets.bottom, MIN_BOTTOM_INSET) }}
    >
      <View
        className="h-[62px] flex-1 flex-row items-center rounded-full bg-pill px-1.5"
        style={shadows.floatingBar}
      >
        {Object.values(BottomTab).map((tab) => {
          if (tab === active) {
            return (
              <View
                key={tab}
                className="h-[50px] flex-row items-center gap-2 rounded-full bg-white px-5"
              >
                <Feather name={TAB_ICONS[tab]} size={17} color={palette.ink} />
                <Text className="font-jakarta-semibold text-[13px] capitalize text-ink">{tab}</Text>
              </View>
            );
          }
          return (
            <Pressable
              key={tab}
              className="h-[50px] flex-1 items-center justify-center"
              onPress={() => {
                Haptics.selectionAsync();
                onChange(tab);
              }}
            >
              <Feather name={TAB_ICONS[tab]} size={20} color={palette.white} />
            </Pressable>
          );
        })}
      </View>

      <PressableScale
        scaleTo={0.92}
        className="ml-3 h-[62px] w-[62px] items-center justify-center rounded-full bg-pill"
        onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
      >
        <Ionicons name="paper-plane-outline" size={21} color={palette.white} />
      </PressableScale>
    </View>
  );
}
