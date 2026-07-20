import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Canvas, RadialGradient, Rect, vec } from '@shopify/react-native-skia';
import { Feather, Ionicons } from '@expo/vector-icons';
import type { WalletProfile } from '@/interfaces/wallet.interface';
import { colors } from '@/theme';

const AVATAR_SIZE = 48;

type WalletHeaderProps = {
  profile: WalletProfile;
  onQrPress?: () => void;
  onSearchPress?: () => void;
};

function ProfileAvatar() {
  return (
    <View
      className="overflow-hidden rounded-2xl"
      style={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
    >
      <Canvas style={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}>
        <Rect x={0} y={0} width={AVATAR_SIZE} height={AVATAR_SIZE}>
          <RadialGradient
            c={vec(AVATAR_SIZE * 0.42, AVATAR_SIZE * 0.62)}
            r={AVATAR_SIZE * 0.85}
            colors={['#3D0A54', '#B01BD6', '#E44BE0', '#F26BD8']}
            positions={[0, 0.45, 0.8, 1]}
          />
        </Rect>
      </Canvas>
    </View>
  );
}

export function WalletHeader({
  profile,
  onQrPress,
  onSearchPress,
}: WalletHeaderProps) {
  return (
    <View className="flex-row items-center px-5">
      <View>
        <ProfileAvatar />
        <View className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#34C759]" />
      </View>

      <View className="ml-3 flex-1">
        <Text className="text-base font-bold text-ink">
          @{profile.username}
        </Text>
        <Text className="mt-0.5 text-sm text-subtle">{profile.address}</Text>
      </View>

      <Pressable
        onPress={onQrPress}
        hitSlop={8}
        accessibilityLabel="Show QR code"
        className="mr-5"
      >
        <Ionicons name="qr-code-outline" size={22} color={colors.ink} />
      </Pressable>
      <Pressable onPress={onSearchPress} hitSlop={8} accessibilityLabel="Search">
        <Feather name="search" size={22} color={colors.ink} />
      </Pressable>
    </View>
  );
}
