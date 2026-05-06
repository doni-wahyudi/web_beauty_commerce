import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';
import { formatPrice } from '../data/products';
import './CartPage.css';

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, clearCart } = useCart();
  const toast = useToast();
  const shipping = subtotal >= 300000 ? 0 : 15000;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="container empty-cart">
        <div className="empty-state">
          <span className="empty-icon">🛒</span>
          <h2>Keranjangmu Masih Kosong</h2>
          <p>Yuk, temukan produk kecantikan yang kamu butuhkan!</p>
          <Link to="/kategori" className="btn btn-primary btn-lg">Mulai Belanja</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Beranda</Link>
          <span className="separator">›</span>
          <span>Keranjang</span>
        </div>
        <h1>Keranjang Belanja</h1>

        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <Link to={`/produk/${item.slug}`} className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </Link>
                <div className="cart-item-info">
                  <Link to={`/produk/${item.slug}`} className="cart-item-name">{item.name}</Link>
                  {item.variant && <span className="cart-item-variant">Varian: {item.variant}</span>}
                  <div className="cart-item-price">
                    <span className="price">{formatPrice(item.price)}</span>
                    {item.originalPrice && <span className="price-original">{formatPrice(item.originalPrice)}</span>}
                  </div>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <span className="cart-item-total">{formatPrice(item.price * item.quantity)}</span>
                  <button className="cart-item-remove" onClick={() => { removeItem(item.id); toast.info('Produk dihapus dari keranjang'); }}>🗑️</button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="cart-summary">
            <div className="summary-card">
              <h3>Ringkasan Pesanan</h3>
              <div className="summary-row">
                <span>Subtotal ({items.length} produk)</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="summary-row">
                <span>Ongkos Kirim</span>
                <span className={shipping === 0 ? 'text-success' : ''}>
                  {shipping === 0 ? 'GRATIS' : formatPrice(shipping)}
                </span>
              </div>
              {shipping > 0 && (
                <p className="shipping-note">
                  Gratis ongkir untuk pembelian di atas {formatPrice(300000)}
                </p>
              )}
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>

              <div className="promo-input-group">
                <input type="text" placeholder="Kode Promo" className="form-input" />
                <button className="btn btn-secondary btn-sm">Gunakan</button>
              </div>

              <Link to="/checkout" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Lanjut ke Checkout
              </Link>
              <Link to="/kategori" className="btn btn-secondary" style={{ width: '100%', marginTop: '8px' }}>
                Lanjut Belanja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
