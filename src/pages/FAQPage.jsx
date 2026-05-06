import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    category: "Pemesanan",
    questions: [
      { q: "Bagaimana cara memesan produk?", a: "Pilih produk yang kamu inginkan, tambahkan ke keranjang, dan ikuti langkah checkout untuk melakukan pembayaran." },
      { q: "Apakah saya bisa membatalkan pesanan?", a: "Pesanan dapat dibatalkan selama statusnya masih 'Diproses'. Silakan hubungi CS kami melalui WhatsApp untuk bantuan pembatalan." }
    ]
  },
  {
    category: "Pembayaran",
    questions: [
      { q: "Metode pembayaran apa saja yang tersedia?", a: "Kami menerima transfer bank (BCA, Mandiri), E-Wallet (GoPay, OVO, DANA), dan Bayar di Tempat (COD)." },
      { q: "Kenapa pembayaran saya belum terverifikasi?", a: "Verifikasi otomatis biasanya memakan waktu 5-15 menit. Jika lebih dari itu, silakan unggah bukti transfer melalui halaman detail pesanan." }
    ]
  },
  {
    category: "Pengiriman",
    questions: [
      { q: "Berapa lama estimasi pengiriman?", a: "Untuk wilayah Jabodetabek estimasi 1-3 hari kerja. Di luar itu 3-7 hari kerja tergantung lokasi dan jenis layanan ekspedisi." },
      { q: "Apakah ada promo gratis ongkir?", a: "Ya! Kami memberikan gratis ongkir (maks. Rp 20.000) untuk setiap pembelian di atas Rp 300.000." }
    ]
  },
  {
    category: "Produk & Lainnya",
    questions: [
      { q: "Apakah produk GlowMart sudah BPOM?", a: "Tentu saja! Semua produk yang kami jual 100% original dan telah memiliki izin edar dari BPOM RI." },
      { q: "Bagaimana jika produk yang diterima rusak?", a: "Jangan khawatir! Kamu bisa mengajukan return dalam 7 hari setelah barang diterima. Pastikan kamu memiliki video unboxing." }
    ]
  }
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div style={{ paddingBottom: 'var(--space-4xl)' }}>
      <div style={{ background: 'linear-gradient(135deg, var(--color-cream), var(--color-blush))', padding: 'var(--space-3xl) 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'var(--fs-3xl)' }}>🙋 FAQ (Tanya Jawab)</h1>
          <p style={{ color: 'var(--color-gray-500)', marginTop: 'var(--space-sm)' }}>Temukan jawaban dari pertanyaan yang sering ditanyakan pelanggan kami</p>
        </div>
      </div>

      <div className="container section" style={{ maxWidth: 800 }}>
        {faqData.map((cat, catIdx) => (
          <div key={catIdx} style={{ marginBottom: 'var(--space-2xl)' }} data-aos="fade-up" data-aos-delay={catIdx * 100}>
            <h2 style={{ fontSize: 'var(--fs-lg)', marginBottom: 'var(--space-lg)', borderBottom: '2px solid var(--color-primary-light)', display: 'inline-block', paddingBottom: 4 }}>{cat.category}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {cat.questions.map((item, qIdx) => {
                const index = `${catIdx}-${qIdx}`;
                const isOpen = activeIndex === index;
                return (
                  <div key={qIdx} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                    <button 
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      style={{
                        width: '100%',
                        padding: 'var(--space-lg)',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: 'var(--fs-sm)',
                        color: isOpen ? 'var(--color-primary)' : 'var(--color-dark)',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <span>{item.q}</span>
                      <span style={{ fontSize: 'var(--fs-lg)', transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
                    </button>
                    {isOpen && (
                      <div style={{ 
                        padding: '0 var(--space-lg) var(--space-lg)', 
                        fontSize: 'var(--fs-sm)', 
                        color: 'var(--color-gray-500)', 
                        lineHeight: 'var(--lh-relaxed)',
                        borderTop: '1px solid var(--color-gray-100)',
                        paddingTop: 'var(--space-md)'
                      }}>
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div style={{ marginTop: 'var(--space-3xl)', textAlign: 'center', padding: 'var(--space-2xl)', background: 'var(--color-cream)', borderRadius: 'var(--radius-xl)' }} data-aos="zoom-in">
          <h3>Masih punya pertanyaan lain?</h3>
          <p style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-lg)', marginTop: 'var(--space-sm)' }}>Tim Customer Service kami siap membantu kamu 24/7</p>
          <Link to="/kontak" className="btn btn-primary">Hubungi Customer Service</Link>
        </div>
      </div>
    </div>
  );
}
