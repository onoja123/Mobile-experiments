import type { RecentDestination } from '@/interfaces';

export const RECENT_DESTINATIONS: RecentDestination[] = [
  { title: 'Akara Café', subtitle: 'Accra Street, Abuja', distance: '7.7 mi' },
  { title: 'Parris Royal Hotel Gwarinpa', subtitle: 'Jim Brown Street, Abuja', distance: '4.8 mi' },
  { title: 'Idu Railway Station', subtitle: 'Abuja', distance: '2.6 mi' },
  { title: '3 Sorotona Close', subtitle: 'Wuse, Abuja, Nigeria', distance: '9.4 mi' },
  {
    title: 'Street 13',
    subtitle: 'Obioma Onyeador Plaza, 1st Avenue, besid...',
    distance: '4.8 mi',
  },
  { title: '29 AY Ahmed Street', subtitle: 'Lugbe, Nigeria', distance: '8.7 mi' },
];

export const HOME_RECENT_DESTINATIONS = RECENT_DESTINATIONS.slice(1, 4);
