import { Pressable, TextInput, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { SEARCH_FIELD_HEIGHT } from '@/constants/layout';
import { colors } from '@/theme/colors';
import { fonts } from '@/theme/fonts';
import { SearchFieldProps } from '../MarketsScreen.types';

export default function SearchField({ value, onChange }: SearchFieldProps) {
  return (
    <View
      className="flex-row items-center gap-2.5 rounded-2xl bg-mist px-4"
      style={{ height: SEARCH_FIELD_HEIGHT }}
    >
      <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
        <Circle cx={11} cy={11} r={6.4} stroke={colors.smoke} strokeWidth={1.8} />
        <Path
          d="m15.8 15.8 3.4 3.4"
          stroke={colors.smoke}
          strokeWidth={1.8}
          strokeLinecap="round"
        />
      </Svg>
      <TextInput
        className="flex-1 text-[14px] text-ink"
        style={{ fontFamily: fonts.sans }}
        placeholder="Search coins"
        placeholderTextColor={colors.smoke}
        value={value}
        onChangeText={onChange}
        autoCorrect={false}
        autoCapitalize="characters"
      />
      {value.length > 0 && (
        <Pressable className="active:opacity-60" onPress={() => onChange('')} hitSlop={8}>
          <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
            <Path
              d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5"
              stroke={colors.smoke}
              strokeWidth={2}
              strokeLinecap="round"
            />
          </Svg>
        </Pressable>
      )}
    </View>
  );
}
