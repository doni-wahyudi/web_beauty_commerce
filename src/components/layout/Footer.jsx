import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Dapatkan Tips & Promo Eksklusif ✨</h3>
              <p>Bergabung dengan 50.000+ beauty enthusiast lainnya</p>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="Masukkan email kamu..." className="newsletter-input" />
              <button className="btn btn-primary">Berlangganan</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid" data-aos="fade-up">
            {/* Brand */}
            <div className="footer-col footer-brand">
              <Link to="/" className="footer-logo">
                <span className="logo-icon">✦</span>
                <span>GlowMart</span>
              </Link>
              <p>Toko kecantikan online terpercaya dengan produk berkualitas premium. Kami berkomitmen menghadirkan produk terbaik untuk kecantikan dan kepercayaan dirimu.</p>
              <div className="footer-socials">
                <a href="#" aria-label="Instagram" className="social-link">📷</a>
                <a href="#" aria-label="TikTok" className="social-link">🎵</a>
                <a href="#" aria-label="WhatsApp" className="social-link">💬</a>
                <a href="#" aria-label="YouTube" className="social-link">▶️</a>
              </div>
            </div>

            {/* Shop */}
            <div className="footer-col">
              <h4>Belanja</h4>
              <ul>
                <li><Link to="/kategori/skincare">Skincare</Link></li>
                <li><Link to="/kategori/makeup">Makeup</Link></li>
                <li><Link to="/kategori/haircare">Haircare</Link></li>
                <li><Link to="/kategori/bodycare">Body Care</Link></li>
                <li><Link to="/kategori/fragrance">Fragrance</Link></li>
                <li><Link to="/bundle">Paket Hemat</Link></li>
              </ul>
            </div>

            {/* Info */}
            <div className="footer-col">
              <h4>Informasi</h4>
              <ul>
                <li><Link to="/tentang-kami">Tentang Kami</Link></li>
                <li><Link to="/kontak">Hubungi Kami</Link></li>
                <li><Link to="/blog">Blog & Artikel</Link></li>
                <li><Link to="/testimoni">Testimoni</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-col">
              <h4>Kebijakan</h4>
              <ul>
                <li><Link to="/kebijakan-privasi">Kebijakan Privasi</Link></li>
                <li><Link to="/syarat-ketentuan">Syarat & Ketentuan</Link></li>
                <li><Link to="/kebijakan-pengiriman">Pengiriman & Return</Link></li>
              </ul>
              <div className="footer-payment">
                <h4>Metode Pembayaran</h4>
                <div className="payment-icons">
                  <span className="payment-badge">BCA</span>
                  <span className="payment-badge">Mandiri</span>
                  <span className="payment-badge">GoPay</span>
                  <span className="payment-badge">OVO</span>
                  <span className="payment-badge">DANA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>© 2025 GlowMart. Semua hak dilindungi undang-undang.</p>
          <p>Dibuat dengan ❤️ di Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
