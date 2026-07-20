import { useLocalSearchParams, useRouter } from 'expo-router';
import RideOptionsScreen from '@/screens/RideOptionsScreen';

export default function RideOptionsRoute() {
  const router = useRouter();
  const { destination } = useLocalSearchParams<{ destination?: string }>();

  return (
    <RideOptionsScreen
      destination={typeof destination === 'string' ? destination : ''}
      onClose={() => router.back()}
    />
  );
}
