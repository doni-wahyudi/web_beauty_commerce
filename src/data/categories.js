export const categories = [
  {
    id: 'skincare',
    name: 'Skincare',
    description: 'Perawatan kulit wajah & tubuh untuk kulit sehat bercahaya',
    icon: '🧴',
    image: '/images/cat-skincare.jpg',
    productCount: 48,
    subcategories: ['Pembersih Wajah', 'Pelembab', 'Serum', 'Sunscreen', 'Masker', 'Toner']
  },
  {
    id: 'makeup',
    name: 'Makeup',
    description: 'Koleksi makeup lengkap untuk tampilan sempurna setiap hari',
    icon: '💄',
    image: '/images/cat-makeup.jpg',
    productCount: 36,
    subcategories: ['Foundation', 'Lipstik', 'Eyeshadow', 'Mascara', 'Blush On', 'Concealer']
  },
  {
    id: 'haircare',
    name: 'Haircare',
    description: 'Solusi perawatan rambut untuk rambut kuat dan berkilau',
    icon: '💇‍♀️',
    image: '/images/cat-haircare.jpg',
    productCount: 24,
    subcategories: ['Shampoo', 'Conditioner', 'Hair Mask', 'Hair Oil', 'Hair Serum', 'Styling']
  },
  {
    id: 'bodycare',
    name: 'Body Care',
    description: 'Perawatan tubuh lengkap dari ujung kepala hingga kaki',
    icon: '🛁',
    image: '/images/cat-bodycare.jpg',
    productCount: 30,
    subcategories: ['Body Lotion', 'Body Wash', 'Body Scrub', 'Hand Cream', 'Deodorant', 'Body Oil']
  },
  {
    id: 'fragrance',
    name: 'Fragrance',
    description: 'Parfum & body mist dengan aroma mewah tahan lama',
    icon: '🌸',
    image: '/images/cat-fragrance.jpg',
    productCount: 18,
    subcategories: ['Eau de Parfum', 'Eau de Toilette', 'Body Mist', 'Perfume Oil', 'Gift Set']
  },
  {
    id: 'tools',
    name: 'Tools & Aksesoris',
    description: 'Alat kecantikan berkualitas untuk hasil profesional',
    icon: '🪞',
    image: '/images/cat-tools.jpg',
    productCount: 20,
    subcategories: ['Brush Set', 'Sponge', 'Eyelash Curler', 'Mirror', 'Pouch', 'Alat Perawatan']
  }
];

export const getCategoryById = (id) => categories.find(c => c.id === id);
