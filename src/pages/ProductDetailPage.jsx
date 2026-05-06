import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getProductBySlug, getProductsByCategory, formatPrice } from '../data/products';
import { getReviewsByProduct } from '../data/reviews';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { useToast } from '../contexts/ToastContext';
import { useAuth } from '../contexts/AuthContext';
import { getImagePath } from '../utils/imageUtils';
import ProductCard from '../components/product/ProductCard';
import './ProductDetailPage.css';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { isAuthenticated } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Produk tidak ditemukan</h2>
        <Link to="/kategori" className="btn btn-primary" style={{ marginTop: '20px' }}>Kembali ke Katalog</Link>
      </div>
    );
  }

  const reviews = getReviewsByProduct(product.id);
  const relatedProducts = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.warning('Silakan masuk untuk mulai berbelanja ✨');
      navigate('/masuk');
      return;
    }

    if (product.variants && !selectedVariant) {
      toast.warning('Silakan pilih varian terlebih dahulu');
      return;
    }
    addToCart(product, quantity, selectedVariant);
    toast.success(`${product.name} ditambahkan ke keranjang!`);
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.floor(rating) ? 'star' : 'star star-empty'}>★</span>
    ));

  return (
    <div className="product-detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Beranda</Link>
          <span className="separator">›</span>
          <Link to={`/kategori/${product.category}`}>{product.category}</Link>
          <span className="separator">›</span>
          <span>{product.name}</span>
        </div>

        {/* Product Main */}
        <div className="product-detail-main">
          {/* Gallery */}
          <div className="product-gallery" data-aos="fade-right">
            <div className="gallery-main">
              <img src={getImagePath(product.images[selectedImage])} alt={product.name} />
              {product.discount > 0 && (
                <span className="badge badge-error gallery-badge">-{product.discount}%</span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="gallery-thumbs">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`gallery-thumb ${selectedImage === idx ? 'active' : ''}`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img src={getImagePath(img)} alt={`${product.name} ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="product-info" data-aos="fade-left">
            {product.isNew && <span className="badge badge-primary">Produk Baru</span>}
            {product.isBestSeller && <span className="badge badge-success">Best Seller</span>}

            <h1>{product.name}</h1>

            <div className="product-meta">
              <div className="stars">{renderStars(product.rating)}</div>
              <span className="meta-text">{product.rating} ({product.reviewCount} ulasan)</span>
              <span className="meta-divider">|</span>
              <span className="meta-text">{product.sold} terjual</span>
            </div>

            <div className="product-price-block">
              <span className="product-price">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="price-original">{formatPrice(product.originalPrice)}</span>
                  <span className="badge badge-error">Hemat {formatPrice(product.originalPrice - product.price)}</span>
                </>
              )}
            </div>

            <p className="product-description">{product.description}</p>

            {/* Variants */}
            {product.variants && (
              <div className="product-variants">
                <h4>Pilih Varian:</h4>
                <div className="variant-options">
                  {product.variants.map(v => (
                    <button
                      key={v.name}
                      className={`variant-btn ${selectedVariant === v.name ? 'active' : ''}`}
                      onClick={() => setSelectedVariant(v.name)}
                    >
                      <span className="variant-color" style={{ background: v.color }}></span>
                      {v.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="product-quantity">
              <h4>Jumlah:</h4>
              <div className="quantity-control">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}>+</button>
              </div>
              <span className="stock-info">Stok: {product.stock}</span>
            </div>

            {/* Actions */}
            <div className="product-actions">
              <button className="btn btn-primary btn-lg" onClick={handleAddToCart} style={{ flex: 1 }}>
                🛒 Tambah ke Keranjang
              </button>
              <button
                className={`btn btn-secondary btn-icon-lg ${inWishlist ? 'wishlisted' : ''}`}
                onClick={() => {
                  if (!isAuthenticated) {
                    toast.warning('Silakan masuk untuk menyimpan produk favoritmu ♡');
                    navigate('/masuk');
                    return;
                  }
                  toggleWishlist(product);
                  toast.success(inWishlist ? 'Dihapus dari wishlist' : 'Ditambahkan ke wishlist ♡');
                }}
              >
                {inWishlist ? '❤️' : '🤍'}
              </button>
            </div>

            {/* Info badges */}
            <div className="product-guarantees">
              <div className="guarantee-item">
                <span>✅</span> 100% Original
              </div>
              <div className="guarantee-item">
                <span>🚚</span> Gratis Ongkir min. Rp 300rb
              </div>
              <div className="guarantee-item">
                <span>🔄</span> 7 Hari Pengembalian
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="product-tabs" data-aos="fade-up" data-aos-offset="100">
          <div className="tabs-header">
            {['description', 'howToUse', 'ingredients', 'reviews'].map(tab => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'description' && 'Deskripsi'}
                {tab === 'howToUse' && 'Cara Pakai'}
                {tab === 'ingredients' && 'Komposisi'}
                {tab === 'reviews' && `Ulasan (${reviews.length})`}
              </button>
            ))}
          </div>
          <div className="tab-content">
            {activeTab === 'description' && <p>{product.description}</p>}
            {activeTab === 'howToUse' && <p>{product.howToUse}</p>}
            {activeTab === 'ingredients' && <p>{product.ingredients}</p>}
            {activeTab === 'reviews' && (
              <div className="reviews-list">
                {reviews.length > 0 ? reviews.map(review => (
                  <div key={review.id} className="review-card">
                    <div className="review-header">
                      <div className="review-avatar">{review.userName.charAt(0)}</div>
                      <div>
                        <strong>{review.userName}</strong>
                        {review.verified && <span className="badge badge-success" style={{ marginLeft: 8 }}>Terverifikasi</span>}
                        <div className="stars" style={{ marginTop: 4 }}>{renderStars(review.rating)}</div>
                      </div>
                      <span className="review-date">{new Date(review.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <h4 className="review-title">{review.title}</h4>
                    <p>{review.content}</p>
                    <button className="review-helpful">👍 Membantu ({review.helpful})</button>
                  </div>
                )) : (
                  <p className="text-muted">Belum ada ulasan untuk produk ini.</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="section">
            <div className="section-header">
              <h2>Produk Terkait</h2>
            </div>
            <div className="products-grid">
              {relatedProducts.map((p, idx) => <ProductCard key={p.id} product={p} aosDelay={idx * 100} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
