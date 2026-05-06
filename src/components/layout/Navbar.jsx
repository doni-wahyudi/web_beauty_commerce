import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { useAuth } from '../../contexts/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location]);

  return (
    <>
      {/* Promo Bar */}
      <div className="promo-bar">
        <div className="container">
          <span>✨ Gratis ongkir untuk pembelian di atas Rp 300.000 · Gunakan kode: <strong>GLOWUP</strong></span>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Mobile menu toggle */}
          <button className="navbar-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <span className={`hamburger ${mobileOpen ? 'open' : ''}`}>
              <span></span><span></span><span></span>
            </span>
          </button>

          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <span className="logo-icon">✦</span>
            <span className="logo-text">GlowMart</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className={`navbar-links ${mobileOpen ? 'mobile-open' : ''}`}>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Beranda</Link></li>
            <li className="has-dropdown">
              <Link to="/kategori" className={location.pathname.startsWith('/kategori') ? 'active' : ''}>Kategori</Link>
              <div className="dropdown-menu">
                <Link to="/kategori/skincare">🧴 Skincare</Link>
                <Link to="/kategori/makeup">💄 Makeup</Link>
                <Link to="/kategori/haircare">💇‍♀️ Haircare</Link>
                <Link to="/kategori/bodycare">🛁 Body Care</Link>
                <Link to="/kategori/fragrance">🌸 Fragrance</Link>
                <Link to="/kategori/tools">🪞 Tools & Aksesoris</Link>
              </div>
            </li>
            <li><Link to="/bundle" className={location.pathname === '/bundle' ? 'active' : ''}>Paket Hemat</Link></li>
            <li><Link to="/blog" className={location.pathname.startsWith('/blog') ? 'active' : ''}>Blog</Link></li>
            <li><Link to="/tentang-kami" className={location.pathname === '/tentang-kami' ? 'active' : ''}>Tentang</Link></li>
          </ul>

          {/* Action Icons */}
          <div className="navbar-actions">
            <button className="nav-icon-btn" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
              🔍
            </button>
            
            <Link to="/wishlist" className="nav-icon-btn" aria-label="Wishlist">
              ♡
              {wishlistCount > 0 && <span className="icon-badge">{wishlistCount}</span>}
            </Link>
            
            <Link to="/keranjang" className="nav-icon-btn" aria-label="Cart">
              🛒
              {itemCount > 0 && <span className="icon-badge">{itemCount}</span>}
            </Link>
            
            <Link to={isAuthenticated ? '/akun' : '/masuk'} className="nav-icon-btn user-btn" aria-label="Account">
              {isAuthenticated ? (
                <span className="user-avatar">{user?.name?.charAt(0)?.toUpperCase()}</span>
              ) : (
                <span>👤</span>
              )}
            </Link>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="search-overlay animate-fade-in-down">
            <div className="container">
                <form 
                  className="search-bar" 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (searchQuery.trim()) {
                      // Navigate to kategori with search query
                      navigate(`/kategori?search=${encodeURIComponent(searchQuery.trim())}`);
                    }
                  }}
                >
                  <span className="search-icon">🔍</span>
                  <input
                    type="text"
                    placeholder="Cari produk, brand, atau kategori..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="search-input"
                  />
                  <button type="button" className="search-close" onClick={() => setSearchOpen(false)}>✕</button>
                </form>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}
    </>
  );
}
