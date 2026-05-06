import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { ToastProvider } from './contexts/ToastContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Pages
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AccountPage from './pages/AccountPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import TrackingPage from './pages/TrackingPage';
import WishlistPage from './pages/WishlistPage';
import BundlePage from './pages/BundlePage';
import TestimonialPage from './pages/TestimonialPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import { PrivacyPolicyPage, TermsPage, ShippingReturnPage } from './pages/LegalPages';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout() {
  const location = useLocation();
  const isAuthPage = ['/masuk', '/daftar'].includes(location.pathname);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  return (
    <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      {!isAuthPage && <Navbar />}
      <main style={{ flex: 1 }}>
        <Routes>
          {/* Core */}
          <Route path="/" element={<HomePage />} />
          <Route path="/kategori" element={<CategoryPage />} />
          <Route path="/kategori/:categoryId" element={<CategoryPage />} />
          <Route path="/produk/:slug" element={<ProductDetailPage />} />

          {/* Transaction */}
          <Route path="/keranjang" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/pesanan-sukses" element={<OrderSuccessPage />} />

          {/* Auth */}
          <Route path="/masuk" element={<LoginPage />} />
          <Route path="/daftar" element={<RegisterPage />} />

          {/* User Account */}
          <Route path="/akun" element={<AccountPage />}>
            <Route path="pesanan" element={<OrderHistoryPage />} />
            <Route path="tracking" element={<TrackingPage />} />
          </Route>
          <Route path="/wishlist" element={<WishlistPage />} />

          {/* Supporting */}
          <Route path="/bundle" element={<BundlePage />} />
          <Route path="/testimoni" element={<TestimonialPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />

          {/* Company */}
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />

          {/* Legal */}
          <Route path="/kebijakan-privasi" element={<PrivacyPolicyPage />} />
          <Route path="/syarat-ketentuan" element={<TermsPage />} />
          <Route path="/kebijakan-pengiriman" element={<ShippingReturnPage />} />

          {/* 404 */}
          <Route path="*" element={
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
              <h1 style={{ fontSize: 'var(--fs-4xl)', marginBottom: 'var(--space-md)' }}>404</h1>
              <p style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-xl)' }}>Halaman tidak ditemukan</p>
              <a href="/" className="btn btn-primary">Kembali ke Beranda</a>
            </div>
          } />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ToastProvider>
              <AppLayout />
            </ToastProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
