import { Hotel } from '@/interfaces';

export const HOTELS: Hotel[] = [
  {
    id: 'gran-melia-victoria',
    name: 'Gran Meliá Victoria',
    area: 'Paseo Marítimo',
    city: 'Palma de Mallorca',
    country: 'Spain',
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80&auto=format&fit=crop',
    ],
    extraPhotos: 48,
    rating: 4.96,
    reviews: 217,
    distance: '1.4 km to center',
    perks: ['Cancellation', 'Breakfast'],
    price: 340,
    nights: 10,
    guests: 3,
    capacity: 4,
    sqm: 150,
    baths: 1,
    beds: 2,
    description:
      'Gran Meliá Victoria overlooks the marina on the Paseo Marítimo with sweeping views of Palma Bay and the cathedral. Rooms and suites come with private balconies, and the rooftop pool, spa and Mediterranean restaurants keep the old town just a short stroll away.',
    categories: [
      { label: 'Communication', score: 5.0 },
      { label: 'Cleanliness', score: 4.9 },
      { label: 'Location', score: 4.8 },
      { label: 'Value', score: 4.9 },
    ],
  },
  {
    id: 'mirabo-valldemossa',
    name: 'Mirabó de Valldemossa',
    area: 'Valldemossa',
    city: 'Mallorca',
    country: 'Spain',
    image:
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80&auto=format&fit=crop',
    ],
    extraPhotos: 32,
    rating: 4.8,
    reviews: 115,
    distance: '2.1 km to village',
    perks: ['Cancellation'],
    price: 520,
    nights: 10,
    guests: 2,
    capacity: 3,
    sqm: 120,
    baths: 2,
    beds: 1,
    description:
      'Mirabó de Valldemossa is a restored hillside finca facing the village and the Tramuntana mountains. Stone terraces, an infinity pool among olive trees and a handful of individually styled rooms make it a quiet escape with hiking trails at the doorstep.',
    categories: [
      { label: 'Communication', score: 4.8 },
      { label: 'Cleanliness', score: 4.9 },
      { label: 'Location', score: 4.6 },
      { label: 'Value', score: 4.7 },
    ],
  },
];

export const INITIAL_FAVORITE_HOTEL_IDS = ['gran-melia-victoria'];
