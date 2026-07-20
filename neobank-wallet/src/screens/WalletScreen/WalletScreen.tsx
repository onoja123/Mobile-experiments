import { Pressable, View } from "react-native";
import Animated from "react-native-reanimated";

import { NioCard, NioCardGhost } from "@/components/NioCard";
import { TransactionList } from "@/components/TransactionList";
import { useWalletExpansion } from "@/hooks/useWalletExpansion";
import { cardShadow, spacing } from "@/theme";

import { WalletHeader } from "./components/WalletHeader";
import { WalletHero } from "./components/WalletHero";

export function WalletScreen() {
  const { expanded, open, close, insets, layout, styles } = useWalletExpansion();

  const cardFrame = {
    position: "absolute" as const,
    top: 0,
    left: spacing.screenHorizontal,
    width: layout.cardWidth,
    height: layout.cardHeight,
  };

  return (
    <View className="flex-1 bg-canvas">
      <WalletHeader
        expanded={expanded}
        onClose={close}
        topInset={insets.top}
        scanStyle={styles.scanButton}
        closeStyle={styles.closeButton}
        trailingStyle={styles.trailingButtons}
      />

      <WalletHero expanded={expanded} onAddToWallet={open} style={styles.hero} />

      <Animated.View
        style={[
          { position: "absolute", top: layout.listTop, left: 0, right: 0, bottom: 0 },
          styles.list,
        ]}
        pointerEvents={expanded ? "auto" : "none"}
      >
        <TransactionList bottomInset={insets.bottom} />
      </Animated.View>

      <Animated.View style={[cardFrame, cardShadow, styles.card]}>
        <Pressable onPress={expanded ? undefined : open} className="h-full w-full">
          <NioCard />
        </Pressable>
      </Animated.View>

      <Animated.View
        style={[cardFrame, cardShadow, styles.ghost]}
        pointerEvents={expanded ? "none" : "auto"}
      >
        <Pressable onPress={open} className="h-full w-full">
          <NioCardGhost />
        </Pressable>
      </Animated.View>
    </View>
  );
}
