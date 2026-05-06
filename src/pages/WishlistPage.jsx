import { Link } from 'react-router-dom';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';
import { getProductById, formatPrice } from '../data/products';

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const toast = useToast();

  if (items.length === 0) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="empty-state">
          <span className="empty-icon">♡</span>
          <h2>Wishlist Kosong</h2>
          <p>Simpan produk favoritmu untuk nanti</p>
          <Link to="/kategori" className="btn btn-primary" style={{ marginTop: 16 }}>Jelajahi Produk</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: 'var(--space-2xl) 0 var(--space-4xl)' }}>
      <h1 style={{ fontSize: 'var(--fs-2xl)', marginBottom: 'var(--space-xl)' }}>Wishlist ({items.length})</h1>
      <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
        {items.map(item => {
          const product = getProductById(item.productId);
          return (
            <div key={item.productId} className="card" style={{ position: 'relative' }}>
              <Link to={`/produk/${item.slug}`}>
                <img src={item.image} alt={item.name} className="card-image" />
              </Link>
              <div className="card-body">
                <Link to={`/produk/${item.slug}`} style={{ fontWeight: 600, fontSize: 'var(--fs-sm)', display: 'block', marginBottom: 8 }}>{item.name}</Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span className="price">{formatPrice(item.price)}</span>
                  {item.originalPrice && <span className="price-original">{formatPrice(item.originalPrice)}</span>}
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn btn-primary btn-sm" style={{ flex: 1 }} onClick={() => { if(product) { addToCart(product); toast.success('Ditambahkan ke keranjang!'); } }}>
                    + Keranjang
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={() => { removeFromWishlist(item.productId); toast.info('Dihapus dari wishlist'); }}>
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
