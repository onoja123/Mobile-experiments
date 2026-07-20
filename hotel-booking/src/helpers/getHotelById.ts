import { HOTELS } from '@/data/hotels';
import { Hotel } from '@/interfaces';

export function getHotelById(id: string | undefined): Hotel {
  return HOTELS.find((hotel) => hotel.id === id) ?? HOTELS[0];
}
