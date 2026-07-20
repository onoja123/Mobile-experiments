import React, { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { TokenId } from '@/enums/tokenId.enum';
import type { Token } from '@/interfaces/token.interface';
import { haptics } from '@/services/haptics.service';
import { BottomSheet } from '../BottomSheet';
import { TokenRow } from './TokenRow';
import { TokenSearchField } from './TokenSearchField';
import type { TokenSelectSheetProps } from './TokenSelectSheet.types';

const POPULAR: TokenId[] = [TokenId.Eth, TokenId.Usdc];

export function TokenSelectSheet({
  open,
  onClose,
  tokens,
  selectedId,
  onSelect,
  searchable = false,
}: TokenSelectSheetProps) {
  const [query, setQuery] = useState('');

  const { pinned, rest } = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (trimmed) {
      const matches = tokens.filter(
        (token) =>
          token.name.toLowerCase().includes(trimmed) ||
          token.symbol.toLowerCase().includes(trimmed),
      );
      return { pinned: [], rest: matches };
    }
    return {
      pinned: tokens.filter((token) => POPULAR.includes(token.id)),
      rest: tokens.filter((token) => !POPULAR.includes(token.id)),
    };
  }, [tokens, query]);

  const handleSelect = (token: Token) => {
    if (token.id !== selectedId) {
      onSelect(token);
      haptics.press();
    }
    setQuery('');
    onClose();
  };

  const renderRows = (list: Token[], offset: number) =>
    list.map((token, index) => (
      <TokenRow
        key={token.id}
        token={token}
        active={token.id === selectedId}
        index={offset + index}
        onPress={() => handleSelect(token)}
      />
    ));

  return (
    <BottomSheet
      open={open}
      onClose={() => {
        setQuery('');
        onClose();
      }}
      title="Choose asset"
    >
      {searchable && <TokenSearchField query={query} onChangeQuery={setQuery} />}

      <View className="gap-1">
        {pinned.length > 0 && (
          <>
            <Text className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-subtle">
              Popular
            </Text>
            {renderRows(pinned, 0)}
            <Text className="mb-1 mt-2 text-[11px] font-semibold uppercase tracking-wide text-subtle">
              All assets
            </Text>
          </>
        )}
        {renderRows(rest, pinned.length)}
        {rest.length === 0 && pinned.length === 0 && (
          <Text className="py-6 text-center text-[14px] text-subtle">
            No assets found
          </Text>
        )}
      </View>
    </BottomSheet>
  );
}
