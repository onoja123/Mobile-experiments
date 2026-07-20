import { StyleSheet } from 'react-native';
import { colors } from '@/theme';

export const styles = StyleSheet.create({
  backdrop: StyleSheet.absoluteFillObject,
  blur: {
    flex: 1,
  },
  sheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.card,
    paddingHorizontal: 24,
    paddingTop: 12,
  },
});
