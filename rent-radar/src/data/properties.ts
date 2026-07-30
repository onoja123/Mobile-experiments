import { Property } from '@/interfaces/property.interface';

export const MAP_REGION = {
  latitude: 37.778,
  longitude: -122.435,
  latitudeDelta: 0.09,
  longitudeDelta: 0.06,
};

export const USER_LOCATION = {
  latitude: 37.771,
  longitude: -122.447,
};

export const PROPERTIES: Property[] = [
  {
    id: 'painted-lady-flat',
    name: 'Painted Lady Flat',
    address: 'Steiner St, Alamo Square',
    rating: 4.5,
    price: '$4,890',
    imageUrl: 'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?w=600&q=80',
    coordinate: { latitude: 37.776, longitude: -122.433 },
  },
  {
    id: 'marina-loft',
    name: 'Marina View Loft',
    address: 'Chestnut St, Marina District',
    rating: 4.8,
    price: '$4,500',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
    coordinate: { latitude: 37.8005, longitude: -122.437 },
  },
  {
    id: 'noe-valley-house',
    name: 'Noe Valley House',
    address: 'Church St, Noe Valley',
    rating: 4.6,
    price: '$5,000',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    coordinate: { latitude: 37.751, longitude: -122.427 },
  },
  {
    id: 'mission-duplex',
    name: 'Mission Duplex',
    address: 'Valencia St, Mission District',
    rating: 4.3,
    price: '$3,150',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
    coordinate: { latitude: 37.759, longitude: -122.421 },
  },
  {
    id: 'russian-hill-studio',
    name: 'Russian Hill Studio',
    address: 'Hyde St, Russian Hill',
    rating: 4.7,
    price: '$6,600',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80',
    coordinate: { latitude: 37.8015, longitude: -122.419 },
  },
  {
    id: 'sunset-bungalow',
    name: 'Sunset Bungalow',
    address: 'Irving St, Inner Sunset',
    rating: 4.2,
    price: '$2,450',
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    coordinate: { latitude: 37.7635, longitude: -122.469 },
  },
  {
    id: 'pacific-heights-manor',
    name: 'Pacific Heights Manor',
    address: 'Broadway, Pacific Heights',
    rating: 4.4,
    price: '$4,890',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
    coordinate: { latitude: 37.7935, longitude: -122.435 },
  },
];
