import { Marker } from 'react-native-maps';
import { CAR_POSITION_TICK_MS } from '@/constants/animation';
import { NEARBY_CAR_ROUTES } from '@/data/nearbyCarRoutes';
import { interpolateRoutePosition } from '@/helpers/interpolateRoutePosition';
import { useElapsedMs } from '@/hooks/useElapsedMs';
import CarMarkerIcon from './CarMarkerIcon';

export default function NearbyCars() {
  const elapsedMs = useElapsedMs(CAR_POSITION_TICK_MS);

  return (
    <>
      {NEARBY_CAR_ROUTES.map((car) => {
        const { coordinate, heading } = interpolateRoutePosition(
          car.path,
          car.legDurationMs,
          elapsedMs + car.startOffsetMs,
        );
        return (
          <Marker
            key={car.id}
            coordinate={coordinate}
            anchor={{ x: 0.5, y: 0.5 }}
            flat
            rotation={heading}
            tracksViewChanges={false}
          >
            <CarMarkerIcon />
          </Marker>
        );
      })}
    </>
  );
}
