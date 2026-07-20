import { StyleSheet } from 'react-native';
import { colors } from '@/theme';

export const styles = StyleSheet.create({
  fill: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 27,
    shadowColor: colors.accent,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 18,
  },
  label: {
    fontSize: 17,
    fontWeight: '700',
  },
});
