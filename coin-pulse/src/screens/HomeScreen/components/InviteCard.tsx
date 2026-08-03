import { Text, View } from 'react-native';

import { PANEL_RADIUS } from '@/constants/layout';
import { INVITE_COPY } from '@/data/portfolio';
import LinkedRingsIllustration from './LinkedRingsIllustration';

export default function InviteCard() {
  return (
    <View
      className="flex-row items-center overflow-hidden bg-white"
      style={{ borderRadius: PANEL_RADIUS }}
    >
      <Text className="flex-1 py-9 pl-5 text-[17px] font-strong leading-[23px] text-ink">
        {INVITE_COPY}
      </Text>
      <View className="-mr-4">
        <LinkedRingsIllustration />
      </View>
    </View>
  );
}
