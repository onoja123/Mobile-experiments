import type { Destination } from '@/types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'tarkwa-bay',
    title: 'Tarkwa Bay Beach Escapes and Island Picnics',
    price: '₦85,000.00',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop',
    description:
      'A sheltered island beach just off the Lagos harbour, reached by a short boat ride from Victoria Island. Calm waters, soft sand and palm shade make it perfect for weekend picnics and first-time surfers.',
    reviews: [
      {
        id: 'r1',
        name: 'Chidi O.',
        avatar: 'https://i.pravatar.cc/96?img=12',
        text: 'The boat ride over is half the fun. Clean sand, calm water and suya on the beach — perfect Saturday.',
      },
      {
        id: 'r2',
        name: 'Amaka E.',
        avatar: 'https://i.pravatar.cc/96?img=32',
        text: 'Went with friends for a picnic and stayed till sunset. Quiet, safe and the locals were so welcoming.',
      },
    ],
  },
  {
    id: 'obudu',
    title: 'Obudu Mountain Resort Cable Cars and Cloud Hills',
    price: '₦210,000.00',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop',
    description:
      'Up in the Sankwala mountains of Cross River, Obudu sits above the clouds with one of the longest cable car rides in Africa, misty morning hikes and cool highland air all year round.',
    reviews: [
      {
        id: 'r1',
        name: 'Tunde B.',
        avatar: 'https://i.pravatar.cc/96?img=15',
        text: 'The cable car view is unreal — you literally ride through the clouds. Bring a jacket, it gets cold!',
      },
      {
        id: 'r2',
        name: 'Ngozi K.',
        avatar: 'https://i.pravatar.cc/96?img=5',
        text: 'Waking up above the clouds felt like another country. The canopy walk and waterfall are must-dos.',
      },
    ],
  },
  {
    id: 'lekki',
    title: 'Lekki Conservation Centre Canopy Walks and Trails',
    price: '₦15,000.00',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1400&auto=format&fit=crop',
    description:
      'A 78-hectare nature reserve in the heart of Lekki with the longest canopy walkway in Africa. Spot monkeys, monitor lizards and peacocks along raised wooden trails through wetland forest.',
    reviews: [
      {
        id: 'r1',
        name: 'Seyi A.',
        avatar: 'https://i.pravatar.cc/96?img=47',
        text: 'The canopy walk tests your nerves in the best way. Go early to catch the monkeys before the crowds.',
      },
      {
        id: 'r2',
        name: 'Fatima Y.',
        avatar: 'https://i.pravatar.cc/96?img=53',
        text: 'Such a peaceful escape from Lagos traffic. The treehouse and picnic spots are lovely for families.',
      },
    ],
  },
];
