import { Collection } from '@/interfaces/collection.interface';

export const collections: Collection[] = [
  {
    id: 'maskfolk',
    name: 'Maskfolk.eth',
    avatar: 'maskfolk',
    items: [
      { id: 'balaclava', art: 'balaclava', name: 'Maskfolk #04', price: '2.4 ETH', usd: '$6,080' },
      { id: 'prism', art: 'prism', name: 'Spectra #17', price: '1.8 ETH', usd: '$4,560' },
    ],
  },
  {
    id: 'dahlia',
    name: 'Sol Dahlia',
    avatar: 'dahlia',
    items: [
      { id: 'clouds', art: 'clouds', name: 'Nimbus #09', price: '0.9 ETH', usd: '$2,280' },
      { id: 'flora', art: 'flora', name: 'Dahlia #23', price: '1.2 ETH', usd: '$3,040' },
    ],
  },
];
