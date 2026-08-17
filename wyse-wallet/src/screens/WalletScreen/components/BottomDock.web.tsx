import { Pressable, Text, View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon, { IconName } from '@/components/Icon';
import { colors, dockShadow } from '@/theme';
import { tabBarController } from '../tabBarController';

const ITEMS: { key: string; label: string; icon: IconName }[] = [
  { key: 'wallet', label: 'Wallet', icon: 'wallet' },
  { key: 'coins', label: 'Coins', icon: 'coins' },
  { key: 'cash', label: 'Cash', icon: 'dollar' },
];

export default function BottomDock() {
  const insets = useSafeAreaInsets();
  const compact = tabBarController.useCompact();

  return (
    <>
      <Pressable
        className="absolute h-12 w-12 items-center justify-center rounded-2xl bg-accent"
        style={{ right: 20, bottom: insets.bottom + 96 }}
      >
        <Icon name="plus" size={20} color={colors.onAccent} strokeWidth={2.2} />
      </Pressable>
      <View
        className="absolute inset-x-0 items-center"
        style={{ bottom: insets.bottom + 12 }}
        pointerEvents="box-none"
      >
        <Animated.View
          layout={LinearTransition.springify().damping(20)}
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: colors.card,
              borderRadius: 26,
              paddingHorizontal: 8,
              paddingVertical: compact ? 6 : 8,
            },
            dockShadow,
          ]}
        >
          {ITEMS.map((item, index) => (
            <Pressable
              key={item.key}
              style={{
                alignItems: 'center',
                paddingHorizontal: compact ? 16 : 24,
                paddingVertical: 4,
              }}
            >
              <Icon
                name={item.icon}
                size={20}
                color={index === 0 ? colors.accentInk : colors.smoke}
                strokeWidth={2}
              />
              {!compact && (
                <Text
                  style={{
                    marginTop: 4,
                    fontFamily: 'Geist_500Medium',
                    fontSize: 11,
                    color: index === 0 ? colors.accentInk : colors.smoke,
                  }}
                >
                  {item.label}
                </Text>
              )}
            </Pressable>
          ))}
        </Animated.View>
      </View>
    </>
  );
}
