import { StyleSheet, View } from 'react-native';
import { colors } from '@/theme';

export default function CarMarkerIcon() {
  return (
    <View style={styles.body}>
      <View style={styles.windshield} />
      <View style={styles.rearWindow} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: 15,
    height: 30,
    borderRadius: 5,
    backgroundColor: colors.car.body,
    borderWidth: 1.5,
    borderColor: colors.white,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 3,
  },
  windshield: {
    marginTop: 5,
    width: 9,
    height: 6,
    borderRadius: 2,
    backgroundColor: colors.car.windshield,
  },
  rearWindow: {
    position: 'absolute',
    bottom: 3.5,
    width: 9,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.car.rearWindow,
  },
});
