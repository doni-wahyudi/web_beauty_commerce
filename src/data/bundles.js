export const bundles = [
  {
    id: 1,
    name: 'Paket Glowing Starter',
    slug: 'paket-glowing-starter',
    description: 'Paket lengkap untuk memulai skincare routine-mu! Terdiri dari cleanser, serum, dan moisturizer.',
    image: '/images/bundle-starter.jpg',
    products: [6, 1, 3],
    bundlePrice: 549000,
    originalTotal: 669000,
    savings: 120000,
    discountPercent: 18,
    tag: 'Best Seller',
    features: ['Cocok untuk pemula', 'Step-by-step guide', 'Pouch cantik gratis']
  },
  {
    id: 2,
    name: 'Paket Daily Makeup Essential',
    slug: 'paket-daily-makeup',
    description: 'Semua yang kamu butuhkan untuk daily makeup look yang natural dan flawless.',
    image: '/images/bundle-makeup.jpg',
    products: [4, 2, 10],
    bundlePrice: 499000,
    originalTotal: 633000,
    savings: 134000,
    discountPercent: 21,
    tag: 'Hemat 21%',
    features: ['Look natural sehari-hari', 'Tutorial video gratis', 'Brush set mini']
  },
  {
    id: 3,
    name: 'Paket Self-Care Sunday',
    slug: 'paket-self-care-sunday',
    description: 'Ritual perawatan lengkap untuk me-time yang menyenangkan. Manjakan diri dari ujung rambut hingga ujung kaki.',
    image: '/images/bundle-selfcare.jpg',
    products: [5, 9, 8],
    bundlePrice: 649000,
    originalTotal: 785000,
    savings: 136000,
    discountPercent: 17,
    tag: 'Fan Favorite',
    features: ['Hair to toe care', 'Aromatherapy candle gratis', 'Gift-ready packaging']
  },
  {
    id: 4,
    name: 'Paket UV Protection Pro',
    slug: 'paket-uv-protection',
    description: 'Perlindungan UV maksimal untuk kulit yang sehat dan terjaga. Cocok untuk aktivitas outdoor.',
    image: '/images/bundle-uv.jpg',
    products: [7, 3, 6],
    bundlePrice: 469000,
    originalTotal: 578000,
    savings: 109000,
    discountPercent: 19,
    tag: 'Outdoor Ready',
    features: ['Full UV protection', 'Waterproof formula', 'Travel pouch gratis']
  }
];

export const getBundleById = (id) => bundles.find(b => b.id === Number(id));
export const getBundleBySlug = (slug) => bundles.find(b => b.slug === slug);
