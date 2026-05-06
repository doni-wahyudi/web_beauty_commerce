import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import { formatPrice } from '../data/products';
import './CheckoutPage.css';

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '',
    address: '', city: '', province: '', postalCode: '',
    paymentMethod: 'bank_bca', notes: ''
  });

  const shipping = subtotal >= 300000 ? 0 : 15000;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    const orderId = `GM-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${String(Math.floor(Math.random()*999)).padStart(3,'0')}`;
    clearCart();
    navigate('/pesanan-sukses', { state: { orderId, total } });
  };

  if (items.length === 0) {
    return (
      <div className="container empty-cart">
        <div className="empty-state">
          <span className="empty-icon">🛒</span>
          <h2>Keranjang Kosong</h2>
          <p>Tambahkan produk terlebih dahulu</p>
          <Link to="/kategori" className="btn btn-primary">Belanja Sekarang</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Beranda</Link>
          <span className="separator">›</span>
          <Link to="/keranjang">Keranjang</Link>
          <span className="separator">›</span>
          <span>Checkout</span>
        </div>
        <h1>Checkout</h1>

        {/* Steps */}
        <div className="checkout-steps">
          {['Pengiriman', 'Pembayaran', 'Konfirmasi'].map((s, i) => (
            <div key={i} className={`step ${step > i + 1 ? 'completed' : ''} ${step === i + 1 ? 'active' : ''}`}>
              <div className="step-number">{step > i + 1 ? '✓' : i + 1}</div>
              <span>{s}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="checkout-layout">
            <div className="checkout-form">
              {step === 1 && (
                <div className="form-section animate-fade-in">
                  <h2>📦 Alamat Pengiriman</h2>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Nama Lengkap *</label>
                      <input name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="Nama penerima" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">No. Telepon *</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} className="form-input" placeholder="08xxxxxxxxxx" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="email@example.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Alamat Lengkap *</label>
                    <textarea name="address" value={formData.address} onChange={handleChange} className="form-input" rows="3" placeholder="Nama jalan, nomor rumah, RT/RW" required></textarea>
                  </div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Kota *</label>
                      <input name="city" value={formData.city} onChange={handleChange} className="form-input" placeholder="Kota/Kabupaten" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Provinsi *</label>
                      <input name="province" value={formData.province} onChange={handleChange} className="form-input" placeholder="Provinsi" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Kode Pos</label>
                      <input name="postalCode" value={formData.postalCode} onChange={handleChange} className="form-input" placeholder="12345" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Catatan (opsional)</label>
                    <textarea name="notes" value={formData.notes} onChange={handleChange} className="form-input" rows="2" placeholder="Catatan untuk kurir"></textarea>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="form-section animate-fade-in">
                  <h2>💳 Metode Pembayaran</h2>
                  <div className="payment-methods">
                    {[
                      { id: 'bank_bca', label: 'Transfer Bank BCA', desc: 'Bayar melalui ATM, mobile, atau internet banking BCA' },
                      { id: 'bank_mandiri', label: 'Transfer Bank Mandiri', desc: 'Bayar melalui ATM, mobile, atau internet banking Mandiri' },
                      { id: 'gopay', label: 'GoPay', desc: 'Bayar menggunakan saldo GoPay' },
                      { id: 'ovo', label: 'OVO', desc: 'Bayar menggunakan saldo OVO' },
                      { id: 'dana', label: 'DANA', desc: 'Bayar menggunakan saldo DANA' },
                      { id: 'cod', label: 'Bayar di Tempat (COD)', desc: 'Bayar saat paket diterima' }
                    ].map(method => (
                      <label key={method.id} className={`payment-option ${formData.paymentMethod === method.id ? 'active' : ''}`}>
                        <input type="radio" name="paymentMethod" value={method.id} checked={formData.paymentMethod === method.id} onChange={handleChange} />
                        <div className="payment-option-content">
                          <strong>{method.label}</strong>
                          <span>{method.desc}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="form-section animate-fade-in">
                  <h2>📋 Konfirmasi Pesanan</h2>
                  <div className="confirmation-block">
                    <h4>Alamat Pengiriman</h4>
                    <p><strong>{formData.name}</strong></p>
                    <p>{formData.phone}</p>
                    <p>{formData.address}, {formData.city}, {formData.province} {formData.postalCode}</p>
                  </div>
                  <div className="confirmation-block">
                    <h4>Metode Pembayaran</h4>
                    <p>{formData.paymentMethod.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                  </div>
                  <div className="confirmation-block">
                    <h4>Produk</h4>
                    {items.map(item => (
                      <div key={item.id} className="confirm-item">
                        <img src={item.image} alt={item.name} />
                        <div>
                          <p className="confirm-item-name">{item.name}</p>
                          <span>{item.quantity}x {formatPrice(item.price)}</span>
                        </div>
                        <strong>{formatPrice(item.price * item.quantity)}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="checkout-nav">
                {step > 1 && (
                  <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>← Kembali</button>
                )}
                <button type="submit" className="btn btn-primary btn-lg" style={{ marginLeft: 'auto' }}>
                  {step < 3 ? 'Lanjutkan →' : '🔒 Bayar Sekarang'}
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="cart-summary">
              <div className="summary-card">
                <h3>Ringkasan</h3>
                {items.map(item => (
                  <div key={item.id} className="summary-item">
                    <span>{item.name} ×{item.quantity}</span>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
                <div className="summary-divider"></div>
                <div className="summary-row"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                <div className="summary-row"><span>Ongkir</span><span className={shipping === 0 ? 'text-success' : ''}>{shipping === 0 ? 'GRATIS' : formatPrice(shipping)}</span></div>
                <div className="summary-divider"></div>
                <div className="summary-row total"><span>Total</span><span>{formatPrice(total)}</span></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
