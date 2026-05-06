import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useWishlist } from '../contexts/WishlistContext';
import { useToast } from '../contexts/ToastContext';
import { mockOrders } from '../data/orders';
import './AccountPage.css';

export default function AccountPage() {
  const { user, logout, isAuthenticated } = useAuth();
  const { wishlistCount } = useWishlist();
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <div className="container empty-cart">
        <div className="empty-state">
          <span className="empty-icon">👤</span>
          <h2>Silakan Masuk</h2>
          <p>Masuk atau daftar untuk mengakses akun kamu</p>
          <Link to="/masuk" className="btn btn-primary btn-lg">Masuk</Link>
        </div>
      </div>
    );
  }

  const isExact = location.pathname === '/akun';
  const menuItems = [
    { path: '/akun', label: '📊 Dashboard', exact: true },
    { path: '/akun/pesanan', label: '📦 Riwayat Pesanan' },
    { path: '/akun/tracking', label: '🚚 Lacak Pesanan' },
    { path: '/wishlist', label: `♡ Wishlist (${wishlistCount})` },
  ];

  const handleLogout = async () => {
    await logout();
    toast.success('Berhasil keluar. Sampai jumpa! 👋');
    navigate('/');
  };

  return (
    <div className="account-page">
      <div className="container">
        <div className="account-layout">
          {/* Sidebar */}
          <aside className="account-sidebar">
            <div className="account-profile">
              <div className="account-avatar">{user?.name?.charAt(0)?.toUpperCase()}</div>
              <div>
                <strong>{user?.name}</strong>
                <span>{user?.email}</span>
              </div>
            </div>
            <nav className="account-nav">
              {menuItems.map(item => (
                <Link key={item.path} to={item.path}
                  className={`account-nav-link ${
                    item.exact ? (location.pathname === item.path ? 'active' : '') :
                    location.pathname.startsWith(item.path) ? 'active' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button className="account-nav-link logout-btn" onClick={handleLogout}>
                🚪 Keluar
              </button>
            </nav>
          </aside>

          {/* Content */}
          <main className="account-content">
            {isExact ? (
              <div className="dashboard animate-fade-in">
                <h1>Selamat Datang, {user?.name?.split(' ')[0]}! ✨</h1>
                <p className="dashboard-subtitle">Kelola akun dan pesananmu dari sini</p>

                <div className="dashboard-stats">
                  <div className="stat-card">
                    <span className="stat-icon">📦</span>
                    <div>
                      <strong>{mockOrders.length}</strong>
                      <span>Total Pesanan</span>
                    </div>
                  </div>
                  <div className="stat-card">
                    <span className="stat-icon">♡</span>
                    <div>
                      <strong>{wishlistCount}</strong>
                      <span>Wishlist</span>
                    </div>
                  </div>
                  <div className="stat-card">
                    <span className="stat-icon">⭐</span>
                    <div>
                      <strong>Gold</strong>
                      <span>Member Level</span>
                    </div>
                  </div>
                </div>

                <div className="dashboard-section">
                  <div className="flex-between">
                    <h2>Pesanan Terbaru</h2>
                    <Link to="/akun/pesanan" className="btn btn-secondary btn-sm">Lihat Semua</Link>
                  </div>
                  <div className="recent-orders">
                    {mockOrders.slice(0, 2).map(order => (
                      <div key={order.id} className="order-preview-card">
                        <div className="order-preview-header">
                          <span className="order-id">{order.id}</span>
                          <span className={`badge badge-${order.status === 'delivered' ? 'success' : order.status === 'shipped' ? 'primary' : 'info'}`}>
                            {order.statusLabel}
                          </span>
                        </div>
                        <div className="order-preview-items">
                          {order.items.map((item, i) => (
                            <img key={i} src={item.image} alt={item.name} className="order-preview-img" />
                          ))}
                        </div>
                        <div className="order-preview-footer">
                          <span>{order.items.length} produk</span>
                          <strong className="price">Rp {order.total.toLocaleString('id-ID')}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Outlet />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
