import { Platform, Text, View } from 'react-native';

export function ArcIcon() {
  return (
    <View className="h-[22px] w-[22px] items-center justify-center rounded-full bg-[#EDEDFB]">
      <Text className="text-[11px] leading-[13px] text-[#7A5AF8]">✦</Text>
    </View>
  );
}

export function ArcBody() {
  return (
    <View className="flex-1 items-center overflow-hidden bg-arc-blue pt-2.5">
      <Text className="text-center text-[17px] font-extrabold leading-[20px] text-white">
        Arc makes every{'\n'}other browser feel{'\n'}like a relic.
      </Text>
      <Text className="mt-1.5 text-[6px] font-extrabold tracking-[0.5px] text-white">
        WIRED
      </Text>

      <View className="mt-2.5 flex-row items-center gap-1">
        <View className="rounded-[4px] bg-white px-2 py-[5px]">
          <Text className="text-[6px] font-bold text-arc-blue">
            {Platform.OS === 'ios' ? ' ' : ''}Download Arc for Mac
          </Text>
        </View>
        <View className="rounded-[4px] bg-arc-navy px-2 py-[5px]">
          <Text className="text-[6px] font-bold text-white">⊞ Download Arc for Windows</Text>
        </View>
      </View>

      <View className="mt-3 w-[86%] flex-1 flex-row overflow-hidden rounded-t-[10px] bg-[#F6D9DC] pl-2 pt-2">
        <View className="w-8 pt-1">
          {[24, 18, 21, 14, 19].map((width, index) => (
            <View
              key={index}
              className="mb-[5px] h-[3px] rounded-full bg-[#E2AEB6]"
              style={{ width }}
            />
          ))}
        </View>
        <View className="ml-1 flex-1 items-center justify-end overflow-hidden rounded-tl-[6px] bg-white">
          <View className="h-[70%] w-[80%] items-center">
            <View className="flex-row flex-wrap items-center justify-center gap-[1px] px-1 pt-1">
              <View className="h-[9px] w-[9px] rounded-full bg-[#C4485C]" />
              <View className="h-[11px] w-[11px] rounded-full bg-[#A93248]" />
              <View className="h-2 w-2 rounded-full bg-[#E2707F]" />
              <View className="h-[7px] w-[7px] rounded-full bg-[#8A2C3B]" />
              <View className="h-2 w-2 rounded-full bg-[#D05A6A]" />
            </View>
            <View className="h-[5px] w-[2px] bg-[#7E9463]" />
            <View className="h-7 w-5 rounded-b-[3px] rounded-t-[1px] bg-[#DED7CC]" />
          </View>
        </View>
      </View>
    </View>
  );
}
