import { Text, View } from 'react-native';

import { serifFontFamily, shadows } from '@/theme';

const TAGLINE_LINES = ['A quiet home', 'for everything', 'you save.'];
const LINE_FADE_STEP = 0.18;

export function MymindIcon() {
  return (
    <View className="h-[22px] w-[22px] items-center justify-center rounded-[6px] bg-mymind-orange">
      <View style={{ width: 11, height: 10 }}>
        <View
          className="absolute rounded-full bg-white"
          style={{ width: 6.5, height: 6.5, left: 0, top: 0 }}
        />
        <View
          className="absolute rounded-full bg-white"
          style={{ width: 6.5, height: 6.5, right: 0, top: 0 }}
        />
        <View
          className="absolute bg-white"
          style={{ width: 6.5, height: 6.5, left: 2.25, top: 2.5, transform: [{ rotate: '45deg' }] }}
        />
      </View>
    </View>
  );
}

export function MymindBody() {
  return (
    <View className="flex-1 items-center overflow-hidden bg-white pt-2.5">
      <View className="items-center">
        {TAGLINE_LINES.map((line, index) => (
          <Text
            key={line}
            className="text-center text-[22px] text-mymind-text"
            style={{ fontFamily: serifFontFamily, lineHeight: 26, opacity: 1 - index * LINE_FADE_STEP }}>
            {line}
          </Text>
        ))}
      </View>

      <View
        className="absolute -bottom-1 right-2.5 h-[52%] w-[68%] rounded-2xl bg-white p-2"
        style={shadows.floating}>
        <View className="flex-row items-center justify-between px-0.5">
          <Text className="text-[5px] tracking-[0.5px] text-[#A9A49D]">SHOP · Soap</Text>
          <View className="h-[13px] w-[13px] items-center justify-center rounded-full border-[0.8px] border-[#C8C2B8]">
            <View className="h-[5px] w-[4.5px] rounded-[1px] border-[0.8px] border-[#C8C2B8]" />
          </View>
        </View>
        <View className="mt-1.5 flex-1 flex-row overflow-hidden rounded-lg bg-[#F4EDE4]">
          <View className="flex-1 items-center justify-center">
            <View className="h-9 w-8 rounded-[3px] bg-[#E3D0B7]" />
            <View className="h-[7px] w-10 rounded-full bg-[#E9DFD0] opacity-70" />
          </View>
          <View className="w-4 items-center justify-center">
            <Text
              className="text-[4.5px] tracking-[1px] text-[#9A948B]"
              style={{ transform: [{ rotate: '90deg' }], width: 40, textAlign: 'center' }}
              numberOfLines={1}>
              BINU BINU
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
