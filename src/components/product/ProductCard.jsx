import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { useToast } from '../../contexts/ToastContext';
import { useAuth } from '../../contexts/AuthContext';
import { formatPrice } from '../../data/products';
import './ProductCard.css';

export default function ProductCard({ product, aosDelay }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { isAuthenticated } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      toast.warning('Silakan masuk atau daftar terlebih dahulu untuk berbelanja ✨');
      navigate('/masuk');
      return;
    }

    addToCart(product);
    toast.success(`${product.name} ditambahkan ke keranjang!`);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      toast.warning('Silakan masuk untuk menyimpan produk favoritmu ♡');
      navigate('/masuk');
      return;
    }

    toggleWishlist(product);
    toast.success(inWishlist ? 'Dihapus dari wishlist' : 'Ditambahkan ke wishlist ♡');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.floor(rating) ? 'star' : 'star star-empty'}>★</span>
    ));
  };

  return (
    <Link 
      to={`/produk/${product.slug}`} 
      className="product-card"
      data-aos="fade-up"
      data-aos-delay={aosDelay || 0}
    >
      <div className="product-card-image">
        <img src={product.images[0]} alt={product.name} loading="lazy" />
        
        {/* Badges */}
        <div className="product-card-badges">
          {product.discount > 0 && (
            <span className="badge badge-error">-{product.discount}%</span>
          )}
          {product.isNew && (
            <span className="badge badge-primary">Baru</span>
          )}
          {product.isBestSeller && !product.isNew && (
            <span className="badge badge-success">Best Seller</span>
          )}
        </div>

        {/* Wishlist */}
        <button
          className={`product-card-wishlist ${inWishlist ? 'active' : ''}`}
          onClick={handleToggleWishlist}
          aria-label="Toggle wishlist"
        >
          {inWishlist ? '❤️' : '🤍'}
        </button>

        {/* Quick add overlay */}
        <div className="product-card-overlay">
          <button className="btn btn-primary btn-sm" onClick={handleAddToCart}>
            + Keranjang
          </button>
        </div>
      </div>

      <div className="product-card-info">
        <p className="product-card-category">{product.subcategory}</p>
        <h3 className="product-card-name">{product.name}</h3>
        
        <div className="product-card-rating">
          <div className="stars">{renderStars(product.rating)}</div>
          <span className="rating-text">{product.rating} ({product.reviewCount})</span>
        </div>

        <div className="product-card-price">
          <span className="price">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="price-original">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
