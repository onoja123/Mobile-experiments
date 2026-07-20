import { StyleSheet } from 'react-native';
import { colors } from '@/theme';

export const RING = 136;

export const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: StyleSheet.absoluteFillObject,
  blur: {
    flex: 1,
  },
  card: {
    width: '80%',
    alignItems: 'center',
    borderRadius: 28,
    backgroundColor: colors.card,
    paddingHorizontal: 28,
    paddingVertical: 32,
    shadowColor: colors.ink,
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.16,
    shadowRadius: 28,
    elevation: 10,
  },
  ringZone: {
    width: RING,
    height: RING,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
