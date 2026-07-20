import React from 'react';
import { View } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { TokenId } from '@/enums/tokenId.enum';
import type { TokenIconProps } from './TokenIcon.types';

export function TokenIcon({ id, size = 44 }: TokenIconProps) {
  const iconSize = size * 0.52;
  const frame = { width: size, height: size, borderRadius: size / 2 };

  switch (id) {
    case TokenId.Eth:
      return (
        <View className="items-center justify-center bg-[#627EEA]" style={frame}>
          <MaterialCommunityIcons name="ethereum" size={iconSize} color="#FFFFFF" />
        </View>
      );
    case TokenId.Usdc:
      return (
        <View className="items-center justify-center bg-[#2775CA]" style={frame}>
          <FontAwesome5 name="dollar-sign" size={iconSize * 0.8} color="#FFFFFF" />
        </View>
      );
    case TokenId.Btc:
      return (
        <View className="items-center justify-center bg-[#F7931A]" style={frame}>
          <MaterialCommunityIcons name="bitcoin" size={iconSize * 1.15} color="#FFFFFF" />
        </View>
      );
    case TokenId.Sol:
      return (
        <View className="items-center justify-center bg-[#101014]" style={frame}>
          <View style={{ gap: size * 0.07 }}>
            <View
              className="rounded-sm bg-[#00FFA3]"
              style={{ height: size * 0.07, width: size * 0.36 }}
            />
            <View
              className="rounded-sm bg-[#8752F3]"
              style={{ height: size * 0.07, width: size * 0.36 }}
            />
            <View
              className="rounded-sm bg-[#DC1FFF]"
              style={{ height: size * 0.07, width: size * 0.36 }}
            />
          </View>
        </View>
      );
  }
}
