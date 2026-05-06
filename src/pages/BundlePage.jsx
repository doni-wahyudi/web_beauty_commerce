import { Link, useNavigate } from 'react-router-dom';
import { bundles } from '../data/bundles';
import { getProductById, formatPrice } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';
import { useAuth } from '../contexts/AuthContext';
import './BundlePage.css';

export default function BundlePage() {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const handleAddBundle = (bundle) => {
    if (!isAuthenticated) {
      toast.warning('Silakan masuk untuk membeli paket hemat ✨');
      navigate('/masuk');
      return;
    }

    bundle.products.forEach(pid => {
      const product = getProductById(pid);
      if (product) addToCart(product);
    });
    toast.success(`Paket "${bundle.name}" ditambahkan ke keranjang!`);
  };

  return (
    <div className="bundle-page">
      <div className="bundle-header">
        <div className="container">
          <h1>🎁 Paket Hemat</h1>
          <p>Hemat lebih banyak dengan membeli paket bundling produk pilihan</p>
        </div>
      </div>

      <div className="container section">
        <div className="bundle-grid">
          {bundles.map((bundle, idx) => (
            <div key={bundle.id} className="bundle-card" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="bundle-image">
                <img src={bundle.image} alt={bundle.name} />
                <span className="bundle-tag">{bundle.tag}</span>
                <span className="bundle-discount">-{bundle.discountPercent}%</span>
              </div>
              <div className="bundle-content">
                <h2>{bundle.name}</h2>
                <p>{bundle.description}</p>

                <div className="bundle-products">
                  {bundle.products.map(pid => {
                    const p = getProductById(pid);
                    return p ? (
                      <Link to={`/produk/${p.slug}`} key={pid} className="bundle-product-item">
                        <img src={p.images[0]} alt={p.name} />
                        <div>
                          <span>{p.name}</span>
                          <small>{formatPrice(p.price)}</small>
                        </div>
                      </Link>
                    ) : null;
                  })}
                </div>

                <ul className="bundle-features">
                  {bundle.features.map((f, i) => <li key={i}>✅ {f}</li>)}
                </ul>

                <div className="bundle-pricing">
                  <div className="bundle-price-main">
                    <span className="price-original">{formatPrice(bundle.originalTotal)}</span>
                    <span className="bundle-price">{formatPrice(bundle.bundlePrice)}</span>
                  </div>
                  <span className="bundle-savings">Hemat {formatPrice(bundle.savings)}</span>
                </div>

                <button className="btn btn-primary btn-lg" style={{ width: '100%' }} onClick={() => handleAddBundle(bundle)}>
                  🛒 Beli Paket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
