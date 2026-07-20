import { FeedSection } from '@/interfaces/feedSection.interface';

export const FEED_SECTIONS: FeedSection[] = [
  {
    id: 'style-inspiration',
    headline: 'style\ninspiration',
    cards: [
      {
        id: 'street-style',
        imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
        title: 'Street Style',
        subtitle: 'A selection of street style',
      },
      {
        id: 'night-looks',
        imageUrl: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&q=80',
        title: 'Night Looks',
        subtitle: 'A selection of night fits',
      },
    ],
  },
  {
    id: 'top-influencers',
    headline: 'top\ninfluencers',
    cards: [
      {
        id: 'jasmine-carter',
        imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80',
        title: 'Jasmine Carter',
        subtitle: '#1',
      },
      {
        id: 'marcus-reed',
        imageUrl: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80',
        title: 'Marcus Reed',
        subtitle: '#2',
      },
    ],
  },
  {
    id: 'trending-week',
    headline: 'trending\nof the week',
    cards: [
      {
        id: 'streetwear-today',
        imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
        title: 'Streetwear today',
        subtitle: 'March 17',
      },
      {
        id: 'hot-looks',
        imageUrl: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?w=800&q=80',
        title: 'Hot looks',
        subtitle: 'March 15',
      },
    ],
  },
  {
    id: 'expected-stuff',
    headline: 'expected\nstuff',
    cards: [
      {
        id: 'rare-items',
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        title: 'Rare items',
        subtitle: 'March 21',
      },
      {
        id: 'fresh-drops',
        imageUrl: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80',
        title: 'Fresh drops',
        subtitle: 'March 24',
      },
    ],
  },
];
