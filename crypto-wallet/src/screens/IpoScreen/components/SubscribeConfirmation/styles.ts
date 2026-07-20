import { StyleSheet } from 'react-native';
import { colors } from '@/theme';

export const RING = 120;

export const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  backdrop: StyleSheet.absoluteFillObject,
  blur: {
    flex: 1,
  },
  card: {
    marginHorizontal: 12,
    borderRadius: 32,
    backgroundColor: colors.card,
    paddingHorizontal: 24,
    paddingTop: 24,
    shadowColor: colors.ink,
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.18,
    shadowRadius: 30,
    elevation: 12,
  },
  ringZone: {
    width: RING,
    height: RING,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    right: -6,
    bottom: -6,
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: colors.gain,
    borderWidth: 3,
    borderColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
