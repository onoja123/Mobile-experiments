import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  CARD_DECK_TOP_MARGIN,
  CARD_HEIGHT,
  HEADER_HEIGHT,
  SCREEN_HORIZONTAL_PADDING,
  TRANSACTION_LIST_TOP_MARGIN,
} from "@/constants/layout";
import { CARDS, TRANSACTIONS } from "@/data";
import { WalletViewMode } from "@/enums";
import { useWalletViewMode } from "@/hooks/useWalletViewMode";

import AddCardButton from "./components/AddCardButton";
import TransactionList from "./components/TransactionList";
import WalletCard from "./components/WalletCard";
import WalletHeader from "./components/WalletHeader";

export default function WalletScreen() {
  const insets = useSafeAreaInsets();
  const { mode, activeIndex, selectCard, showList } = useWalletViewMode(
    CARDS.length - 1,
  );

  const deckTop = insets.top + HEADER_HEIGHT + CARD_DECK_TOP_MARGIN;
  const transactionsTop = insets.top + CARD_HEIGHT + TRANSACTION_LIST_TOP_MARGIN;

  return (
    <View className="flex-1 bg-white">
      <WalletHeader mode={mode} topInset={insets.top} />

      {mode === WalletViewMode.Detail && (
        <TransactionList
          transactions={TRANSACTIONS}
          topOffset={transactionsTop}
          bottomInset={insets.bottom}
        />
      )}

      <View
        style={{
          position: "absolute",
          top: deckTop,
          left: SCREEN_HORIZONTAL_PADDING,
          right: SCREEN_HORIZONTAL_PADDING,
        }}
        pointerEvents="box-none"
      >
        {CARDS.map((card, index) => (
          <WalletCard
            key={card.id}
            card={card}
            index={index}
            activeIndex={activeIndex}
            cardCount={CARDS.length}
            mode={mode}
            onPress={() => selectCard(index)}
          />
        ))}
      </View>

      <AddCardButton
        visible={mode === WalletViewMode.Stack}
        bottomInset={insets.bottom}
        onPress={showList}
      />
    </View>
  );
}
