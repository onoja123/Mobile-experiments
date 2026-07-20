import { Hotel } from '@/interfaces';

export const HOTELS: Hotel[] = [
  {
    id: 'movenpick-jakarta',
    name: 'Mövenpick Hotel Jakarta',
    area: 'Gambir',
    city: 'Jakarta',
    country: 'Indonesia',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80&auto=format&fit=crop',
    ],
    extraPhotos: 48,
    rating: 4.96,
    reviews: 217,
    distance: '3.8 km to center',
    perks: ['Cancellation', 'Breakfast'],
    price: 230,
    nights: 10,
    guests: 3,
    capacity: 4,
    sqm: 150,
    baths: 1,
    beds: 2,
    description:
      'Mövenpick Hotel Jakarta features 256 rooms and suites, diverse dining options, a spa, a fitness center and an outdoor pool with panoramic views over the city skyline. Located in the heart of Gambir, it is minutes away from the National Monument and Jakarta’s best shopping districts.',
    categories: [
      { label: 'Communication', score: 5.0 },
      { label: 'Cleanliness', score: 4.9 },
      { label: 'Location', score: 4.8 },
      { label: 'Value', score: 4.9 },
    ],
  },
  {
    id: 'loews-royal-pacific',
    name: 'Loews Royal Pacific',
    area: 'Kuningan',
    city: 'Jakarta',
    country: 'Indonesia',
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80&auto=format&fit=crop',
    ],
    extraPhotos: 32,
    rating: 4.8,
    reviews: 115,
    distance: '4.5 km to center',
    perks: ['Cancellation'],
    price: 460,
    nights: 10,
    guests: 2,
    capacity: 3,
    sqm: 120,
    baths: 2,
    beds: 1,
    description:
      'Loews Royal Pacific pairs lush tropical gardens with a lagoon-style pool, five restaurants and generously sized rooms. A calm resort escape that still keeps the energy of the city within easy reach.',
    categories: [
      { label: 'Communication', score: 4.8 },
      { label: 'Cleanliness', score: 4.9 },
      { label: 'Location', score: 4.6 },
      { label: 'Value', score: 4.7 },
    ],
  },
];

export const INITIAL_FAVORITE_HOTEL_IDS = ['movenpick-jakarta'];
