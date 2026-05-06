export const blogs = [
  {
    id: 1,
    title: '10 Langkah Skincare Routine untuk Pemula',
    slug: '10-langkah-skincare-routine-pemula',
    excerpt: 'Bingung mulai skincare dari mana? Simak panduan lengkap 10 langkah skincare routine yang cocok untuk pemula.',
    content: `
      <h2>Memulai Perjalanan Skincare-mu</h2>
      <p>Memulai skincare routine bisa terasa overwhelming dengan banyaknya produk yang tersedia. Tapi tenang, kamu tidak perlu langsung menggunakan semuanya. Yang penting adalah memahami kebutuhan kulitmu dan memulai dari langkah-langkah dasar.</p>
      
      <h3>1. Pembersih (Cleanser)</h3>
      <p>Langkah pertama dan terpenting adalah membersihkan wajah. Pilih pembersih yang sesuai dengan jenis kulitmu. Untuk kulit kering, gunakan milk cleanser. Untuk kulit berminyak, foam cleanser bisa jadi pilihan.</p>
      
      <h3>2. Toner</h3>
      <p>Toner membantu menyeimbangkan pH kulit setelah mencuci muka dan mempersiapkan kulit untuk menyerap produk selanjutnya.</p>
      
      <h3>3. Serum</h3>
      <p>Serum mengandung konsentrasi tinggi bahan aktif yang menargetkan masalah kulit spesifik. Vitamin C untuk brightening, Niacinamide untuk pori-pori, atau Retinol untuk anti-aging.</p>
      
      <h3>4. Pelembab (Moisturizer)</h3>
      <p>Semua jenis kulit butuh pelembab! Pilih yang ringan untuk kulit berminyak, dan yang lebih rich untuk kulit kering.</p>
      
      <h3>5. Sunscreen</h3>
      <p>Ini adalah langkah WAJIB di pagi hari. Sunscreen melindungi kulit dari kerusakan akibat sinar UV yang bisa menyebabkan penuaan dini dan hiperpigmentasi.</p>
    `,
    category: 'Skincare Tips',
    image: '/images/blog-skincare-routine.jpg',
    author: 'dr. Amelia Zahra',
    date: '2025-04-28',
    readTime: '8 menit',
    tags: ['skincare', 'pemula', 'routine']
  },
  {
    id: 2,
    title: 'Cara Memilih Foundation yang Tepat untuk Kulitmu',
    slug: 'cara-memilih-foundation-tepat',
    excerpt: 'Foundation yang salah bisa merusak seluruh makeup look-mu. Pelajari cara memilih shade, formula, dan finish yang pas.',
    content: `
      <h2>Panduan Lengkap Memilih Foundation</h2>
      <p>Foundation adalah base dari seluruh makeup look-mu. Memilih yang tepat bisa membuat perbedaan besar antara tampilan natural-flawless dan cakey.</p>
      
      <h3>Kenali Jenis Kulitmu</h3>
      <p>Langkah pertama adalah mengetahui jenis kulitmu: kering, berminyak, kombinasi, atau normal. Ini akan menentukan formula foundation yang cocok.</p>
      
      <h3>Tentukan Coverage yang Diinginkan</h3>
      <p>Light coverage untuk everyday natural look, medium untuk menutupi kemerahan dan noda ringan, full coverage untuk acara spesial atau jika kamu ingin menutupi bekas jerawat.</p>
      
      <h3>Pilih Finish yang Tepat</h3>
      <p>Dewy finish memberikan efek glowing, matte finish cocok untuk kulit berminyak, dan satin finish ada di tengah-tengah keduanya.</p>
    `,
    category: 'Makeup Guide',
    image: '/images/blog-foundation.jpg',
    author: 'Putri Maharani',
    date: '2025-04-20',
    readTime: '6 menit',
    tags: ['makeup', 'foundation', 'guide']
  },
  {
    id: 3,
    title: 'Ingredients yang Wajib Ada di Skincare-mu',
    slug: 'ingredients-wajib-skincare',
    excerpt: 'Dari Niacinamide hingga Retinol, kenali bahan aktif yang proven secara ilmiah untuk berbagai masalah kulit.',
    content: `
      <h2>Bahan Aktif yang Harus Kamu Ketahui</h2>
      <p>Memahami ingredients dalam skincare membantumu memilih produk yang benar-benar efektif untuk masalah kulitmu.</p>
      
      <h3>Niacinamide (Vitamin B3)</h3>
      <p>Multitasker sejati! Mencerahkan, mengecilkan pori, mengontrol minyak, dan memperkuat skin barrier. Cocok untuk hampir semua jenis kulit.</p>
      
      <h3>Hyaluronic Acid</h3>
      <p>Magnet kelembaban yang bisa menarik dan menahan air hingga 1000x beratnya. Essential untuk kulit yang terhidrasi dan plump.</p>
      
      <h3>Vitamin C (Ascorbic Acid)</h3>
      <p>Antioksidan powerful yang mencerahkan kulit, meratakan warna kulit, dan melindungi dari kerusakan akibat radikal bebas.</p>
    `,
    category: 'Edukasi',
    image: '/images/blog-ingredients.jpg',
    author: 'dr. Amelia Zahra',
    date: '2025-04-15',
    readTime: '10 menit',
    tags: ['ingredients', 'skincare', 'edukasi']
  },
  {
    id: 4,
    title: 'Self-Care Sunday: Ritual Perawatan di Rumah',
    slug: 'self-care-sunday-ritual',
    excerpt: 'Manjakan diri di akhir pekan dengan ritual self-care yang mudah dilakukan di rumah.',
    content: `
      <h2>Me-Time yang Berkualitas</h2>
      <p>Di tengah kesibukan sehari-hari, penting untuk menyisihkan waktu untuk merawat diri sendiri. Self-care Sunday bisa jadi ritual mingguan yang menyegarkan pikiran dan tubuh.</p>
      
      <h3>Langkah 1: Double Cleansing</h3>
      <p>Mulai dengan oil cleanser untuk membersihkan sisa makeup dan sunscreen, lalu lanjutkan dengan water-based cleanser.</p>
      
      <h3>Langkah 2: Exfoliate</h3>
      <p>Gunakan chemical exfoliant (AHA/BHA) atau physical scrub yang lembut untuk mengangkat sel kulit mati.</p>
      
      <h3>Langkah 3: Sheet Mask</h3>
      <p>Pilih sheet mask sesuai kebutuhan kulitmu. Diamkan 15-20 menit sambil relax.</p>
    `,
    category: 'Lifestyle',
    image: '/images/blog-selfcare.jpg',
    author: 'Ratna Sari',
    date: '2025-04-10',
    readTime: '5 menit',
    tags: ['self-care', 'lifestyle', 'perawatan']
  }
];

export const getBlogById = (id) => blogs.find(b => b.id === Number(id));
export const getBlogBySlug = (slug) => blogs.find(b => b.slug === slug);
