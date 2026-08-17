import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeInDown, SlideInRight, SlideOutRight } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DOCK_CLEARANCE } from '@/constants/layout';
import { WalletTab } from '@/enums/walletTab.enum';
import { Collectible, Collection } from '@/interfaces/collection.interface';
import CollectibleScreen from '@/screens/CollectibleScreen';
import { colors } from '@/theme';
import ActivityTab from './components/ActivityTab';
import ActionsRow from './components/ActionsRow';
import BalanceCard from './components/BalanceCard';
import BottomDock from './components/BottomDock';
import CollectiblesTab from './components/CollectiblesTab';
import SegmentTabs from './components/SegmentTabs';
import TokensTab from './components/TokensTab';
import WalletHeader from './components/WalletHeader';
import { tabBarController } from './tabBarController';

export default function WalletScreen() {
  const insets = useSafeAreaInsets();
  const [tab, setTab] = useState(WalletTab.Gallery);
  const [openItem, setOpenItem] = useState<{ collection: Collection; item: Collectible } | null>(
    null
  );
  const [pinnedHeight, setPinnedHeight] = useState(0);
  const { scrollRef, onScroll } = tabBarController.useCollapsingScroll('wallet');

  return (
    <View className="flex-1 bg-paper">
      <Animated.ScrollView
        ref={scrollRef}
        onScroll={onScroll}
        scrollEventThrottle={16}
        bounces={false}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: pinnedHeight, paddingBottom: DOCK_CLEARANCE }}
      >
        <ActionsRow />
        <SegmentTabs active={tab} onChange={setTab} />
        <Animated.View key={tab} entering={FadeInDown.duration(240)}>
          {tab === WalletTab.Assets && <TokensTab />}
          {tab === WalletTab.Gallery && (
            <CollectiblesTab onOpenItem={(collection, item) => setOpenItem({ collection, item })} />
          )}
          {tab === WalletTab.History && <ActivityTab />}
        </Animated.View>
      </Animated.ScrollView>
      <View
        pointerEvents="box-none"
        className="absolute inset-x-0 top-0"
        onLayout={(e) => setPinnedHeight(e.nativeEvent.layout.height)}
      >
        <View className="bg-paper px-2.5 pb-1" style={{ paddingTop: insets.top + 4 }}>
          <WalletHeader />
        </View>
        <BalanceCard />
      </View>
      <BottomDock />
      {openItem && (
        <Animated.View
          entering={SlideInRight.duration(280)}
          exiting={SlideOutRight.duration(240)}
          style={[StyleSheet.absoluteFill, { backgroundColor: colors.paper, zIndex: 20 }]}
        >
          <CollectibleScreen
            collection={openItem.collection}
            item={openItem.item}
            onBack={() => setOpenItem(null)}
          />
        </Animated.View>
      )}
    </View>
  );
}
