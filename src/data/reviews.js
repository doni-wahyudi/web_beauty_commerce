export const reviews = [
  {
    id: 1,
    productId: 1,
    userName: 'Anisa Putri',
    avatar: null,
    rating: 5,
    date: '2025-04-28',
    title: 'Serum terbaik yang pernah saya coba!',
    content: 'Setelah 2 minggu pemakaian, kulit saya terasa lebih cerah dan glowing. Teksturnya ringan, cepat meresap, dan tidak lengket. Worth every penny!',
    helpful: 45,
    verified: true,
    images: []
  },
  {
    id: 2,
    productId: 1,
    userName: 'Diana Maharani',
    avatar: null,
    rating: 4,
    date: '2025-04-15',
    title: 'Bagus, tapi perlu waktu',
    content: 'Hasilnya memang bagus untuk mencerahkan, tapi butuh sekitar 3-4 minggu untuk benar-benar terlihat hasilnya. Teksturnya enak, tidak bikin breakout.',
    helpful: 23,
    verified: true,
    images: []
  },
  {
    id: 3,
    productId: 3,
    userName: 'Rina Sari',
    avatar: null,
    rating: 5,
    date: '2025-04-20',
    title: 'Pelembab favorit sepanjang masa',
    content: 'Sudah repurchase 3x! Kulit saya yang kering jadi lembab sepanjang hari. Tidak berminyak, cocok dipakai sebelum makeup. Love it!',
    helpful: 67,
    verified: true,
    images: []
  },
  {
    id: 4,
    productId: 2,
    userName: 'Kartika Dewi',
    avatar: null,
    rating: 5,
    date: '2025-04-25',
    title: 'Warnanya cantik banget!',
    content: 'Shade Rose Petal jadi favorit saya. Formulanya ringan, nggak bikin bibir kering, dan tahan lama. Packagingnya juga mewah.',
    helpful: 34,
    verified: true,
    images: []
  },
  {
    id: 5,
    productId: 7,
    userName: 'Mega Wulandari',
    avatar: null,
    rating: 5,
    date: '2025-04-22',
    title: 'No white cast, beneran!',
    content: 'Akhirnya nemu sunscreen yang beneran no white cast dan ringan. Cocok buat kulit berminyak, nggak bikin tambah greasy. SPF 50 jadi aman untuk outdoor.',
    helpful: 89,
    verified: true,
    images: []
  },
  {
    id: 6,
    productId: 6,
    userName: 'Fitri Handayani',
    avatar: null,
    rating: 4,
    date: '2025-04-18',
    title: 'Lembut dan tidak bikin kering',
    content: 'Cocok untuk kulit sensitif saya. Busanya lembut, wanginya subtle, dan setelah bilas kulit tetap terasa lembab, tidak tight sama sekali.',
    helpful: 28,
    verified: true,
    images: []
  },
  {
    id: 7,
    productId: 12,
    userName: 'Sarah Amelia',
    avatar: null,
    rating: 5,
    date: '2025-05-01',
    title: 'Cushion dengan finish paling natural',
    content: 'Baru coba dan langsung jatuh cinta! Finishnya dewy natural, coverage-nya bisa di-build up, dan tahan seharian. Shade Medium pas banget di kulit saya.',
    helpful: 52,
    verified: true,
    images: []
  },
  {
    id: 8,
    productId: 8,
    userName: 'Laras Puspita',
    avatar: null,
    rating: 5,
    date: '2025-04-30',
    title: 'Aroma mewah dan tahan lama',
    content: 'Parfum ini benar-benar amazing. Aromanya feminim dan elegan, tahan dari pagi sampai malam. Sering dapat pujian kalau pakai ini.',
    helpful: 41,
    verified: true,
    images: []
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'dr. Amelia Zahra',
    role: 'Dermatologis',
    content: 'Saya merekomendasikan produk GlowMart kepada pasien saya karena formulasinya yang evidence-based dan aman untuk berbagai jenis kulit. Ingredient-nya berkualitas tinggi.',
    rating: 5,
    image: '/images/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Putri Maharani',
    role: 'Beauty Influencer',
    content: 'GlowMart berhasil membuat skincare routine saya jadi lebih simple tapi hasilnya maksimal. Produknya gentle tapi powerful. Highly recommended!',
    rating: 5,
    image: '/images/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Ratna Sari',
    role: 'Ibu Rumah Tangga',
    content: 'Sebagai ibu yang sibuk, saya butuh produk yang efektif tapi nggak ribet. GlowMart jawabannya! Harganya juga terjangkau dengan kualitas premium.',
    rating: 5,
    image: '/images/testimonial-3.jpg'
  },
  {
    id: 4,
    name: 'Indah Permata',
    role: 'Makeup Artist',
    content: 'Untuk base makeup, saya selalu pakai produk GlowMart. Foundation dan cushionnya bikin kulit klien terlihat flawless dan tahan seharian.',
    rating: 5,
    image: '/images/testimonial-4.jpg'
  },
  {
    id: 5,
    name: 'dr. Sarah Wijaya',
    role: 'Aesthetic Specialist',
    content: 'Kombinasi bahan aktif dalam serum GlowMart sangat stabil dan efektif untuk mencerahkan tanpa iritasi. Ini adalah standar baru dalam perawatan kulit lokal.',
    rating: 5,
    image: '/images/testimonial-5.jpg'
  },
  {
    id: 6,
    name: 'dr. Budiman Santoso',
    role: 'Spesialis Kulit',
    content: 'Keunggulan GlowMart ada pada transparansi formulasi mereka. Tidak ada bahan berbahaya, menjadikannya pilihan aman bagi mereka dengan kulit sensitif sekalipun.',
    rating: 5,
    image: '/images/testimonial-6.jpg'
  }
];

export const getReviewsByProduct = (productId) => reviews.filter(r => r.productId === Number(productId));
