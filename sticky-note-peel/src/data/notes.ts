import type { Note } from '@/types';

export const NOTES: Note[] = [
  {
    id: 'design',
    color: '#FFD54A',
    title: 'Useful hints to build a perfect design for iPhone Xs',
    body: 'Apple presents new gadgets every year and each of this device deserves the attention. But when iPhone X was presented to the public, rules of app designing were changed. With iPhone Xs announcement this year, UI/UX designers',
    tags: ['Design'],
  },
  {
    id: 'travel',
    color: '#CFDA5E',
    title: 'Europe travel packing list',
    checklist: [
      'Suitcase/travel backpack',
      '3-4 t-shirts',
      'Sweater',
      'Lightweight jacket',
      'Pair of dark wash jeans',
      'Theft-proof backpack',
      'Plug converters',
      'Passport and ID',
    ],
    tags: ['Travel'],
  },
  {
    id: 'weekend',
    color: '#A3DEDF',
    title: 'Weekend checklist',
    checklist: [
      'Call mom and dad',
      'Prep the meals for the week',
      'Tidy up living spaces',
      'Plan the week + month ahead',
    ],
    meta: '+5 checked items',
    tags: ['Things to do'],
    date: 'May 3 2020, 00:00',
  },
  {
    id: 'wakeup',
    color: '#F4A6C0',
    title: '10 Reasons You Should Wake-Up At 5AM For 30 Days Straight',
    body: "For the remainder of this article, I'm going to make you specific promises about what will happen if you do this.\nTo be absolutely clear: if you wake up at 5AM for 30 days straight, your entire life will change",
  },
  {
    id: 'business',
    color: '#C3B4E2',
    title: 'Understanding Business Value',
    body: 'A designer that understands how to continually bring value to the business while also advocating for the user is a golden egg for organisations',
    tags: ['Article'],
  },
  {
    id: 'grocery',
    color: '#F6C99F',
    title: 'Grocery Shopping',
    checklist: [
      'Peanut Butter',
      '16 oz Cottage Cheese',
      '6.5 lbs Chicken Breast',
      'Greek Yogurt',
      'Frozen Berries',
    ],
  },
];
