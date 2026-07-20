import { Text, View } from 'react-native';

import { serifFontFamily, shadows } from '@/theme';

const CHECKLIST_ROWS: [string, number][] = [
  ['#DDD9D1', 44],
  ['#E7E4DE', 58],
  ['#EDEAE4', 36],
];

export function NotionIcon() {
  return (
    <View className="h-[22px] w-[22px] items-center justify-center rounded-[6px] border border-[#E3E1DC] bg-white">
      <Text className="text-[13px] font-bold text-ink" style={{ fontFamily: serifFontFamily }}>
        N
      </Text>
    </View>
  );
}

export function NotionBody() {
  return (
    <View className="flex-1 items-center overflow-hidden bg-[#FFFEFB] pt-3">
      <Text
        className="text-center text-[19px] font-bold text-ink"
        style={{ fontFamily: serifFontFamily }}>
        Write. Plan. Build.
      </Text>
      <Text className="mt-1 px-6 text-center text-[6.5px] leading-[9px] text-ink-muted">
        One connected workspace for your notes, docs and projects — where better, faster work
        happens together.
      </Text>

      <View
        className="mt-3 w-[74%] flex-1 rounded-t-[10px] border border-b-0 border-[#ECEAE5] bg-white px-3 pt-2.5"
        style={shadows.panel}>
        <Text className="text-[8px]">🚀</Text>
        <View className="mt-1.5 h-[4px] w-20 rounded-full bg-[#E7E4DE]" />
        <View className="mt-2 gap-[5px]">
          {CHECKLIST_ROWS.map(([color, width], index) => (
            <View key={index} className="flex-row items-center gap-1.5">
              <View className="h-[6px] w-[6px] rounded-[2px] border border-[#D5D1C9]" />
              <View className="h-[3px] rounded-full" style={{ backgroundColor: color, width }} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
