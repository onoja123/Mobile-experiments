import { useState } from 'react';
import { View } from 'react-native';
import { SheetStageProvider, useStageSheet } from 'react-native-stage-sheet';
import { RIDE_PANEL_HEIGHT } from '@/constants/panelLayout';
import { RIDE_OPTIONS } from '@/data/rideOptions';
import { PaymentMethod, RideOptionId } from '@/enums';
import type { RideOptionsScreenProps } from '@/interfaces';
import { colors } from '@/theme';
import DestinationBar from './components/DestinationBar';
import PaymentSheet from './components/PaymentSheet';
import PromoAppliedBanner from './components/PromoAppliedBanner';
import RideOptionList from './components/RideOptionList';
import RideOptionsFooter from './components/RideOptionsFooter';
import RouteMap from './components/RouteMap';

export default function RideOptionsScreen(props: RideOptionsScreenProps) {
  return (
    <SheetStageProvider handleColor={colors.white}>
      <RideOptionsContent {...props} />
    </SheetStageProvider>
  );
}

function RideOptionsContent({ destination, onClose }: RideOptionsScreenProps) {
  const { present } = useStageSheet();
  const [selectedId, setSelectedId] = useState<RideOptionId>(RideOptionId.BOLT);
  const [method, setMethod] = useState<PaymentMethod>(PaymentMethod.CASH);

  const openPaymentSheet = () =>
    present({
      render: ({ close, height, bottomInset }) => (
        <PaymentSheet
          close={close}
          height={height}
          bottomInset={bottomInset}
          method={method}
          onSelectMethod={setMethod}
        />
      ),
    });

  return (
    <View className="flex-1 bg-white">
      <RouteMap />

      <DestinationBar destination={destination} onClose={onClose} />

      <View className="absolute inset-x-0 bottom-0" style={{ height: RIDE_PANEL_HEIGHT }}>
        <PromoAppliedBanner />

        <View className="-mt-6 flex-1 rounded-t-3xl bg-white">
          <View className="items-center py-2.5">
            <View className="h-[5px] w-11 rounded-full bg-grabber-soft" />
          </View>

          <RideOptionList options={RIDE_OPTIONS} selectedId={selectedId} onSelect={setSelectedId} />

          <RideOptionsFooter method={method} onOpenPaymentSheet={openPaymentSheet} />
        </View>
      </View>
    </View>
  );
}
