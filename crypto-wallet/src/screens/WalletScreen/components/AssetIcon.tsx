import React from 'react';
import { View } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { TokenId } from '@/enums/tokenId.enum';

type AssetIconProps = {
  id: TokenId;
};

export function AssetIcon({ id }: AssetIconProps) {
  switch (id) {
    case TokenId.Eth:
      return (
        <View className="h-11 w-11 items-center justify-center rounded-full bg-chip">
          <MaterialCommunityIcons name="ethereum" size={24} color="#454A54" />
        </View>
      );
    case TokenId.Usdc:
      return (
        <View className="h-11 w-11 items-center justify-center rounded-full bg-[#2775CA]">
          <FontAwesome5 name="dollar-sign" size={18} color="#FFFFFF" />
        </View>
      );
    case TokenId.Sol:
      return (
        <View className="h-11 w-11 items-center justify-center rounded-full bg-[#101014]">
          <View className="gap-[3px]">
            <View className="h-[3px] w-4 rounded-sm bg-[#00FFA3]" />
            <View className="h-[3px] w-4 rounded-sm bg-[#8752F3]" />
            <View className="h-[3px] w-4 rounded-sm bg-[#DC1FFF]" />
          </View>
        </View>
      );
    default:
      return <View className="h-11 w-11 rounded-full bg-chip" />;
  }
}
