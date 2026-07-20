import { Text, View } from 'react-native';

export function PlayIcon() {
  return (
    <View className="h-[22px] w-[22px] items-center justify-center rounded-[6px] bg-black">
      <View
        style={{
          width: 0,
          height: 0,
          borderTopWidth: 5,
          borderBottomWidth: 5,
          borderLeftWidth: 8.5,
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent',
          borderLeftColor: '#B9A2F7',
          marginLeft: 2,
        }}
      />
    </View>
  );
}

export function PlayBody() {
  return (
    <View className="flex-1 overflow-hidden bg-[#050506] px-3 pt-3.5">
      <Text className="text-center text-[12px] font-bold leading-[15px] text-play-purple">
        Design interfaces that{'\n'}feel alive, on your phone.
      </Text>
      <Text className="mt-2 px-2 text-center text-[6.5px] leading-[9px] text-play-gray">
        Sketch, prototype and ship native interactions directly from your pocket — with all the
        craft and fidelity of a full design studio.
      </Text>
      <Text className="mt-2.5 text-center text-[7px] font-semibold text-white">
        Start Creating Today{'  '}→
      </Text>

      <View className="mt-3.5 flex-1 flex-row gap-1.5">
        <View className="w-7 rounded-t-[5px] bg-[#151517]" />
        <View className="flex-1 rounded-t-[5px] bg-[#131315] px-2 pt-2">
          <View className="h-[3px] w-10 rounded-full bg-[#2A2A2E]" />
          <View className="mt-1.5 h-[3px] w-14 rounded-full bg-[#232327]" />
          <View className="mt-2.5 h-4 w-11 flex-row items-center justify-center gap-[3px] rounded-[4px] bg-[#1D1D20]">
            <View className="h-[5px] w-[5px] rounded-[1.5px] bg-[#4A4A50]" />
            <View className="h-[5px] w-[5px] rounded-full bg-[#3A3A40]" />
            <View className="h-[5px] w-[5px] rounded-[1.5px] bg-[#333338]" />
          </View>
        </View>
      </View>

      <View
        className="absolute bottom-1.5 right-4"
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 5,
          borderRightWidth: 5,
          borderBottomWidth: 13,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: '#FFFFFF',
          transform: [{ rotate: '-38deg' }],
        }}
      />
    </View>
  );
}
