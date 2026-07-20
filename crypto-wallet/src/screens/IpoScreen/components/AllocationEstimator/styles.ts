import { StyleSheet } from 'react-native';
import { colors } from '@/theme';

export const KNOB = 26;
export const TRACK = 8;

export const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    backgroundColor: colors.card,
    padding: 20,
  },
  sliderHitArea: {
    height: 40,
    justifyContent: 'center',
  },
  track: {
    height: TRACK,
    borderRadius: TRACK / 2,
    backgroundColor: colors.chip,
    overflow: 'hidden',
  },
  fill: {
    height: TRACK,
    borderRadius: TRACK / 2,
    backgroundColor: colors.accent,
    width: '100%',
  },
  knob: {
    position: 'absolute',
    height: KNOB,
    width: KNOB,
    borderRadius: KNOB / 2,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: colors.outline,
    shadowColor: colors.ink,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4,
  },
});
