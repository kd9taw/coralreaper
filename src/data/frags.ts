// Coral Reaper — frag inventory manifest
// Single source of truth for /frags and /frags/[id] pages.
// Edit names, prices, types, and notes as you fill in real details.
// Drop new photos in /public/frags/ and add an entry below.

export type FragType =
  | 'zoa'
  | 'lps'
  | 'sps'
  | 'soft'
  | 'mushroom'
  | 'other';

export type FragStatus = 'available' | 'reserved' | 'sold';

export type Frag = {
  id: string;
  name: string;
  price: number | null;
  image: string;
  type: FragType;
  status: FragStatus;
  notes?: string;
};

export const frags: Frag[] = [
  {
    id: 'frag-01',
    name: 'Frag #01',
    price: null,
    image: '/frags/0d80af73-4293-42d4-bbc4-9047b5c1b27d.jpg',
    type: 'zoa',
    status: 'available',
    notes: 'Yellow-skirted zoa cluster, 3–4 polyps. Photographed in our hex frag rack.',
  },
  {
    id: 'frag-02',
    name: 'Frag #02',
    price: null,
    image: '/frags/131c87d2-2f0c-44bd-ade1-954f01243d35.jpg',
    type: 'zoa',
    status: 'available',
    notes: 'Yellow-skirted zoa colony with dark centers — ~10 polyps. Sunny D / Whammin Watermelon style.',
  },
  {
    id: 'frag-03',
    name: 'Frag #03',
    price: null,
    image: '/frags/21acd7ce-a93d-4b99-b451-67a2e34fe27f.jpg',
    type: 'zoa',
    status: 'available',
    notes: 'Yellow-fringed zoa colony, photographed closed in our hex rack.',
  },
  {
    id: 'frag-04',
    name: 'Frag #04',
    price: null,
    image: '/frags/2701002e-22ad-4e6d-a0a5-a8a9bc1ad2b4.jpg',
    type: 'zoa',
    status: 'available',
    notes: 'Fire-ring style zoas — orange/red rimmed with bright yellow centers.',
  },
  {
    id: 'frag-05',
    name: 'Frag #05',
    price: null,
    image: '/frags/3698fa0d-0fda-4df2-89ab-3d4a697f9da8.jpg',
    type: 'lps',
    status: 'available',
    notes: 'Plate coral (Fungia / Cycloseris). Fine radial septa, photographed in our hex rack.',
  },
  {
    id: 'frag-06',
    name: 'Frag #06',
    price: null,
    image: '/frags/38d658b8-f959-4236-80e0-eb99a2e760fe.jpg',
    type: 'sps',
    status: 'available',
    notes: 'Orange branching SPS — Montipora digitata or similar finger-like encrusting growth.',
  },
  {
    id: 'frag-07',
    name: 'Frag #07',
    price: null,
    image: '/frags/40d6cf04-7124-44a4-a387-8b9029d9a29e.jpg',
    type: 'lps',
    status: 'available',
    notes: 'Purple-and-red LPS with bright yellow polyp centers — Acanthastrea or Cynarina-style.',
  },
  {
    id: 'frag-08',
    name: 'Frag #08',
    price: null,
    image: '/frags/470968d6-9dcb-4647-8f5a-81711373edbf.jpg',
    type: 'sps',
    status: 'available',
    notes: 'Encrusting SPS with dense small polyps across the surface — Cyphastrea or Pavona-style.',
  },
  {
    id: 'frag-10',
    name: 'Frag #10',
    price: null,
    image: '/frags/b4308627-e061-45a9-baa5-5632490760df.jpg',
    type: 'zoa',
    status: 'available',
    notes: 'Dense zoa colony with orange skirts and small yellow center punches — 30+ polyps.',
  },
  {
    id: 'frag-11',
    name: 'Frag #11',
    price: null,
    image: '/frags/befcd57c-c76d-4298-88d9-f2351b7bc4ff.jpg',
    type: 'zoa',
    status: 'available',
    notes: 'Green-skirted zoas with bright yellow eyes — Eagle Eye / Aussie Gold style. Big polyps.',
  },
  {
    id: 'frag-12',
    name: 'Frag #12',
    price: null,
    image: '/frags/c7108fe0-f4a7-4378-a7f4-b06458528566.jpg',
    type: 'lps',
    status: 'available',
    notes: 'Green meandering brain coral — Platygyra-style maze pattern.',
  },
  {
    id: 'frag-13',
    name: 'Frag #13',
    price: null,
    image: '/frags/d612fc03-52a4-47b1-b004-2641f4011233.jpg',
    type: 'sps',
    status: 'available',
    notes: 'Orange encrusting SPS — Echinopora or Montipora capricornis with raised corallites.',
  },
  {
    id: 'frag-15',
    name: 'Frag #15',
    price: null,
    image: '/frags/f591ddfd-fc29-4e65-86f4-8311aadfa4f1.jpg',
    type: 'lps',
    status: 'available',
    notes: 'Orange/pink Caulastrea (Trumpet) coral — display tank shot, large fleshy polyps.',
  },
  {
    id: 'frag-16',
    name: 'Frag #16',
    price: null,
    image: '/frags/ff95b56a-cfe5-42c6-9ba5-17526c330144.jpg',
    type: 'zoa',
    status: 'available',
    notes: 'Orange-skirted zoas with green centers — Rastas or similar bright tropical morph.',
  },
];

export function getFrag(id: string): Frag | undefined {
  return frags.find((f) => f.id === id);
}

export const fragTypeLabels: Record<FragType, string> = {
  zoa: 'Zoa',
  lps: 'LPS',
  sps: 'SPS',
  soft: 'Soft',
  mushroom: 'Mushroom',
  other: 'Other',
};
