// Coral Reaper — Etsy accessories + reviews data
// Mirror of the live Etsy shop. Update prices/items as the shop grows.

export type EtsyProduct = {
  title: string;
  price: number;
  image: string;
  etsyUrl: string;
  tag?: string;
};

export type EtsyReview = {
  reviewer: string;
  date: string; // ISO yyyy-mm-dd
  stars: 1 | 2 | 3 | 4 | 5;
  text: string;
  product: string;
};

export const ETSY_SHOP_URL = 'https://www.etsy.com/shop/CoralReaper';
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61573634276556';

// Photo paths use placeholders for now; user can replace with real images
// dropped into /public/etsy/ later. Until then, cards still render with the
// frag photo placeholder so the layout is intact.
export const products: EtsyProduct[] = [
  {
    title: 'Frag rack — holds 70 coral plugs',
    price: 15.0,
    image: '/etsy/frag-rack.jpg',
    etsyUrl: ETSY_SHOP_URL,
    tag: 'Best seller',
  },
  {
    title: 'Photo box — fits PWC 20-hole frag rack',
    price: 10.0,
    image: '/etsy/photo-box.jpg',
    etsyUrl: ETSY_SHOP_URL,
  },
  {
    title: 'Frag tray 2-inch leg extensions',
    price: 2.5,
    image: '/etsy/leg-extensions.jpg',
    etsyUrl: ETSY_SHOP_URL,
  },
  {
    title: 'Viparspectra 165W reef light shade',
    price: 40.0,
    image: '/etsy/light-shade.jpg',
    etsyUrl: ETSY_SHOP_URL,
    tag: 'Free shipping',
  },
];

export const reviews: EtsyReview[] = [
  {
    reviewer: 'Thomas',
    date: '2026-03-26',
    stars: 5,
    text: 'Fast shipping, great product. Would buy again.',
    product: 'Viparspectra 165W reef light shade',
  },
  {
    reviewer: 'Vicki',
    date: '2026-03-22',
    stars: 5,
    text: 'It fits like a glove — so happy with the shade. Keeps the light from filtering into the room.',
    product: 'Viparspectra 165W reef light shade',
  },
  {
    reviewer: 'David',
    date: '2026-02-18',
    stars: 5,
    text: 'Works great and fits great.',
    product: 'Viparspectra 165W reef light shade',
  },
];
