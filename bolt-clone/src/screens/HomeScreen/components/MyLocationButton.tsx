import { Feather } from '@expo/vector-icons';
import { Dimensions, Pressable } from 'react-native';
import { MY_LOCATION_BUTTON_TOP_RATIO } from '@/constants/homeMap';
import { colors } from '@/theme';

const BUTTON_TOP = Dimensions.get('window').height * MY_LOCATION_BUTTON_TOP_RATIO;

export default function MyLocationButton() {
  return (
    <Pressable
      className="absolute right-5 h-14 w-14 items-center justify-center rounded-full bg-white shadow-md"
      style={{ top: BUTTON_TOP }}
    >
      <Feather name="send" size={22} color={colors.ink} />
    </Pressable>
  );
}
