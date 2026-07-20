import { View } from 'react-native';
import { colors } from '@/theme';

export default function EndpointDot() {
  return (
    <View className="h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm">
      <View
        className="h-[15px] w-[15px] rounded-full border-[4px] bg-white"
        style={{ borderColor: colors.labelGreen }}
      />
    </View>
  );
}
