import React from 'react';
import { Text, View } from 'react-native';
import { formatQuantity } from '@/helpers/formatQuantity';
import { formatSigned } from '@/helpers/formatSigned';
import { formatUsd } from '@/helpers/formatUsd';
import type { Asset } from '@/interfaces/wallet.interface';
import { colors } from '@/theme';
import { AssetIcon } from './AssetIcon';

type AssetListProps = {
  assets: Asset[];
};

function AssetRow({ asset }: { asset: Asset }) {
  const changeColor = asset.change >= 0 ? colors.gain : colors.loss;
  return (
    <View className="flex-row items-center px-5 py-3.5">
      <AssetIcon id={asset.id} />
      <View className="ml-3.5 flex-1">
        <Text className="text-[16px] font-bold text-ink">{asset.name}</Text>
        <Text className="mt-0.5 text-sm text-subtle">
          {formatQuantity(asset.quantity, asset.symbol)}
        </Text>
      </View>
      <View className="items-end">
        <Text className="text-[16px] font-bold text-ink">
          {formatUsd(asset.value)}
        </Text>
        <Text className="mt-0.5 text-sm font-medium" style={{ color: changeColor }}>
          {formatSigned(asset.change)}
        </Text>
      </View>
    </View>
  );
}

export function AssetList({ assets }: AssetListProps) {
  return (
    <View className="flex-1 rounded-t-[28px] bg-white pt-2">
      {assets.map((asset) => (
        <AssetRow key={asset.id} asset={asset} />
      ))}
    </View>
  );
}
