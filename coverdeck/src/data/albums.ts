export type Album = {
  id: string;
  title: string;
  artist: string;
  durationSec: number;
  imageUrl: string;
  tint: string;
  wash: string;
};

function cover(id: string) {
  return `https://images.unsplash.com/photo-${id}?w=640&q=80&auto=format&fit=crop`;
}

// tint is each cover's dominant color; wash is its pastel blend used for the
// deck backdrop as the focused cover changes.
export const albums: Album[] = [
  {
    id: 'midnight-static',
    title: 'Midnight Static',
    artist: 'Neon Harbor',
    durationSec: 214,
    imageUrl: cover('1470225620780-dba8ba36b745'),
    tint: '#250252',
    wash: '#D9D1E4',
  },
  {
    id: 'crowd-theory',
    title: 'Crowd Theory',
    artist: 'The Velvet Antennas',
    durationSec: 187,
    imageUrl: cover('1493225457124-a3eb161ffa5f'),
    tint: '#6F312E',
    wash: '#EAD9D8',
  },
  {
    id: 'open-mic-elegy',
    title: 'Open Mic Elegy',
    artist: 'June Casette',
    durationSec: 243,
    imageUrl: cover('1511671782779-c97d3d27a1d4'),
    tint: '#FBDFCD',
    wash: '#FFF1E8',
  },
  {
    id: 'violet-hours',
    title: 'Violet Hours',
    artist: 'Prism Motel',
    durationSec: 201,
    imageUrl: cover('1514320291840-2e0a9bf2a9ae'),
    tint: '#534037',
    wash: '#E3DEDB',
  },
  {
    id: 'encore-weather',
    title: 'Encore Weather',
    artist: 'Fjord Radio',
    durationSec: 229,
    imageUrl: cover('1459749411175-04bf5292ceea'),
    tint: '#C19020',
    wash: '#FCEFD2',
  },
  {
    id: 'signs-of-life',
    title: 'Signs of Life',
    artist: 'Marquee Ghosts',
    durationSec: 195,
    imageUrl: cover('1508700115892-45ecd05ae2ad'),
    tint: '#472922',
    wash: '#E2D9D7',
  },
  {
    id: 'b-side-weather',
    title: 'B-Side Weather',
    artist: 'Analog Meadow',
    durationSec: 252,
    imageUrl: cover('1446057032654-9d8885db76c6'),
    tint: '#D05C29',
    wash: '#FCE2D7',
  },
  {
    id: 'last-set',
    title: 'Last Set',
    artist: 'Copper Choir',
    durationSec: 218,
    imageUrl: cover('1445985543470-41fba5c3144a'),
    tint: '#4B3C31',
    wash: '#E2DDDA',
  },
  {
    id: 'festival-physics',
    title: 'Festival Physics',
    artist: 'Slow Comet',
    durationSec: 206,
    imageUrl: cover('1470019693664-1d202d2c0907'),
    tint: '#202020',
    wash: '#D9D9D9',
  },
  {
    id: 'tape-hiss-hotel',
    title: 'Tape Hiss Hotel',
    artist: 'The Reverb Society',
    durationSec: 234,
    imageUrl: cover('1506157786151-b8491531f063'),
    tint: '#74548E',
    wash: '#E8E0EF',
  },
  {
    id: 'chorus-of-wires',
    title: 'Chorus of Wires',
    artist: 'Little Amplitude',
    durationSec: 191,
    imageUrl: cover('1484755560615-a4c64e778a6c'),
    tint: '#FF91B2',
    wash: '#FFE8EE',
  },
  {
    id: 'afterglow-index',
    title: 'Afterglow Index',
    artist: 'Paper Sirens',
    durationSec: 226,
    imageUrl: cover('1526478806334-5fd488fcaabc'),
    tint: '#1E224F',
    wash: '#D6D7E4',
  },
];
