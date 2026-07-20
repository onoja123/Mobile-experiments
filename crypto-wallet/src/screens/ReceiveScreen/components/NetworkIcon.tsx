import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NetworkId } from '@/enums/networkId.enum';

type NetworkIconProps = {
  id: NetworkId;
  size?: number;
};

export function NetworkIcon({ id, size = 24 }: NetworkIconProps) {
  const frame = { width: size, height: size, borderRadius: size / 2 };
  const iconSize = size * 0.58;

  switch (id) {
    case NetworkId.Ethereum:
      return (
        <View className="items-center justify-center bg-[#627EEA]" style={frame}>
          <MaterialCommunityIcons name="ethereum" size={iconSize} color="#FFFFFF" />
        </View>
      );
    case NetworkId.Base:
      return (
        <View className="items-center justify-center bg-[#0052FF]" style={frame}>
          <View
            className="rounded-full border-white bg-[#0052FF]"
            style={{
              width: size * 0.55,
              height: size * 0.55,
              borderWidth: Math.max(2, size * 0.11),
            }}
          />
        </View>
      );
    case NetworkId.Solana:
      return (
        <View className="items-center justify-center bg-[#101014]" style={frame}>
          <View style={{ gap: size * 0.08 }}>
            <View
              className="rounded-sm bg-[#00FFA3]"
              style={{ height: size * 0.08, width: size * 0.4 }}
            />
            <View
              className="rounded-sm bg-[#8752F3]"
              style={{ height: size * 0.08, width: size * 0.4 }}
            />
            <View
              className="rounded-sm bg-[#DC1FFF]"
              style={{ height: size * 0.08, width: size * 0.4 }}
            />
          </View>
        </View>
      );
    case NetworkId.Polygon:
      return (
        <View className="items-center justify-center bg-[#8247E5]" style={frame}>
          <MaterialCommunityIcons name="hexagon-outline" size={iconSize} color="#FFFFFF" />
        </View>
      );
  }
}
