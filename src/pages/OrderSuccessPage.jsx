import { Link, useLocation } from 'react-router-dom';
import { formatPrice } from '../data/products';
import './OrderSuccessPage.css';

export default function OrderSuccessPage() {
  const location = useLocation();
  const { orderId, total } = location.state || { orderId: 'GM-000', total: 0 };

  return (
    <div className="order-success-page">
      <div className="container">
        <div className="success-card animate-scale-in">
          <div className="success-confetti">
            {Array.from({ length: 12 }, (_, i) => (
              <span key={i} className="confetti-piece" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                backgroundColor: ['#B76E79', '#D4A574', '#4A0E2E', '#E8C9A8', '#F8E8E0'][i % 5]
              }} />
            ))}
          </div>

          <div className="success-icon">✓</div>
          <h1>Pesanan Berhasil! 🎉</h1>
          <p className="success-subtitle">Terima kasih telah berbelanja di GlowMart</p>

          <div className="success-details">
            <div className="detail-row">
              <span>No. Pesanan</span>
              <strong>{orderId}</strong>
            </div>
            <div className="detail-row">
              <span>Total Pembayaran</span>
              <strong className="price">{formatPrice(total)}</strong>
            </div>
            <div className="detail-row">
              <span>Estimasi Pengiriman</span>
              <strong>2-4 hari kerja</strong>
            </div>
          </div>

          <p className="success-note">
            Konfirmasi pesanan telah dikirim ke email kamu. Kamu bisa melacak status pesanan melalui halaman "Akun Saya".
          </p>

          <div className="success-actions">
            <Link to="/akun/pesanan" className="btn btn-primary btn-lg">Lacak Pesanan</Link>
            <Link to="/" className="btn btn-secondary btn-lg">Kembali ke Beranda</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
