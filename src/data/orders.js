export const mockOrders = [
  {
    id: 'GM-20250428-001',
    date: '2025-04-28',
    status: 'delivered',
    statusLabel: 'Selesai',
    items: [
      { productId: 1, name: 'Radiant Glow Serum', price: 289000, quantity: 1, image: '/images/prod-serum-1.jpg' },
      { productId: 3, name: 'Hydra Boost Moisturizer', price: 245000, quantity: 1, image: '/images/prod-moisturizer-1.jpg' }
    ],
    subtotal: 534000,
    shipping: 15000,
    discount: 50000,
    total: 499000,
    shippingAddress: {
      name: 'Anisa Putri',
      phone: '08123456789',
      address: 'Jl. Sudirman No. 123, Senayan',
      city: 'Jakarta Selatan',
      province: 'DKI Jakarta',
      postalCode: '12190'
    },
    paymentMethod: 'Transfer Bank BCA',
    tracking: {
      courier: 'JNE Regular',
      trackingNumber: 'JNE1234567890',
      estimatedDelivery: '2025-05-01',
      history: [
        { date: '2025-04-28 10:00', status: 'Pesanan dibuat', description: 'Pesanan berhasil dibuat dan menunggu pembayaran' },
        { date: '2025-04-28 11:30', status: 'Pembayaran dikonfirmasi', description: 'Pembayaran telah diterima dan diverifikasi' },
        { date: '2025-04-28 14:00', status: 'Pesanan diproses', description: 'Pesanan sedang dikemas oleh tim kami' },
        { date: '2025-04-29 09:00', status: 'Dikirim', description: 'Paket telah diserahkan ke kurir JNE' },
        { date: '2025-04-30 16:00', status: 'Dalam perjalanan', description: 'Paket sedang dalam perjalanan ke kota tujuan' },
        { date: '2025-05-01 10:30', status: 'Diterima', description: 'Paket telah diterima oleh penerima' }
      ]
    }
  },
  {
    id: 'GM-20250502-002',
    date: '2025-05-02',
    status: 'shipped',
    statusLabel: 'Dikirim',
    items: [
      { productId: 2, name: 'Velvet Matte Lipstick', price: 159000, quantity: 2, image: '/images/prod-lipstick-1.jpg' },
      { productId: 7, name: 'Sunscreen Glow SPF 50', price: 198000, quantity: 1, image: '/images/prod-sunscreen-1.jpg' }
    ],
    subtotal: 516000,
    shipping: 0,
    discount: 0,
    total: 516000,
    shippingAddress: {
      name: 'Anisa Putri',
      phone: '08123456789',
      address: 'Jl. Sudirman No. 123, Senayan',
      city: 'Jakarta Selatan',
      province: 'DKI Jakarta',
      postalCode: '12190'
    },
    paymentMethod: 'GoPay',
    tracking: {
      courier: 'SiCepat Express',
      trackingNumber: 'SCP9876543210',
      estimatedDelivery: '2025-05-05',
      history: [
        { date: '2025-05-02 09:00', status: 'Pesanan dibuat', description: 'Pesanan berhasil dibuat' },
        { date: '2025-05-02 09:05', status: 'Pembayaran dikonfirmasi', description: 'Pembayaran melalui GoPay berhasil' },
        { date: '2025-05-02 15:00', status: 'Pesanan diproses', description: 'Pesanan sedang dikemas' },
        { date: '2025-05-03 08:00', status: 'Dikirim', description: 'Paket telah diserahkan ke kurir SiCepat' },
        { date: '2025-05-04 12:00', status: 'Dalam perjalanan', description: 'Paket sedang dalam perjalanan' }
      ]
    }
  },
  {
    id: 'GM-20250505-003',
    date: '2025-05-05',
    status: 'processing',
    statusLabel: 'Diproses',
    items: [
      { productId: 8, name: 'Midnight Rose Eau de Parfum', price: 485000, quantity: 1, image: '/images/prod-perfume-1.jpg' }
    ],
    subtotal: 485000,
    shipping: 15000,
    discount: 0,
    total: 500000,
    shippingAddress: {
      name: 'Anisa Putri',
      phone: '08123456789',
      address: 'Jl. Sudirman No. 123, Senayan',
      city: 'Jakarta Selatan',
      province: 'DKI Jakarta',
      postalCode: '12190'
    },
    paymentMethod: 'Transfer Bank Mandiri',
    tracking: {
      courier: 'JNE Regular',
      trackingNumber: null,
      estimatedDelivery: '2025-05-08',
      history: [
        { date: '2025-05-05 14:00', status: 'Pesanan dibuat', description: 'Pesanan berhasil dibuat dan menunggu pembayaran' },
        { date: '2025-05-05 15:30', status: 'Pembayaran dikonfirmasi', description: 'Pembayaran telah diterima' },
        { date: '2025-05-05 17:00', status: 'Pesanan diproses', description: 'Pesanan sedang dikemas oleh tim kami' }
      ]
    }
  }
];

export const getOrderById = (id) => mockOrders.find(o => o.id === id);

export const getStatusColor = (status) => {
  const colors = {
    pending: 'warning',
    processing: 'info',
    shipped: 'primary',
    delivered: 'success',
    cancelled: 'error'
  };
  return colors[status] || 'info';
};
