import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { products, getBestSellers, getNewProducts, getDiscountedProducts, formatPrice } from '../data/products';
import { categories } from '../data/categories';
import { testimonials, reviews } from '../data/reviews';
import './HomePage.css';

export default function HomePage() {
  const bestSellers = getBestSellers();
  const newProducts = getNewProducts();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  const featuredReviews = reviews.slice(0, 4);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth > 1024) setVisibleItems(4);
      else if (window.innerWidth > 768) setVisibleItems(2);
      else setVisibleItems(1);
    };
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  const maxIndex = testimonials.length - visibleItems;

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <div className="home-page">
      {/* ... Hero Section ... */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-pattern"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text" data-aos="fade-right">
            <span className="hero-badge">✨ Koleksi Terbaru 2025</span>
            <h1>Temukan <span className="text-gradient">Kecantikan</span> Terbaik untuk Kulitmu</h1>
            <p>Produk perawatan kulit & kecantikan premium dengan bahan alami terbaik. Dapatkan kulit sehat, cerah, dan bercahaya setiap hari.</p>
            <div className="hero-actions">
              <Link to="/kategori" className="btn btn-primary btn-lg">Belanja Sekarang</Link>
              <Link to="/bundle" className="btn btn-secondary btn-lg">Lihat Paket Hemat</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>50K+</strong>
                <span>Pelanggan Puas</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <strong>200+</strong>
                <span>Produk Premium</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <strong>4.9★</strong>
                <span>Rating Rata-rata</span>
              </div>
            </div>
          </div>
          <div className="hero-visual" data-aos="fade-left" data-aos-delay="200">
            <div className="hero-image-container">
              <img src="/images/hero-main.jpg" alt="GlowMart Beauty Products" className="hero-image" />
              <div className="hero-floating-card card-1 animate-float">
                <span className="floating-emoji">🧴</span>
                <div>
                  <strong>Best Seller</strong>
                  <small>Radiant Glow Serum</small>
                </div>
              </div>
              <div className="hero-floating-card card-2 animate-float" style={{animationDelay: '1s'}}>
                <span className="floating-emoji">⭐</span>
                <div>
                  <strong>4.9/5</strong>
                  <small>1000+ ulasan</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Jelajahi Kategori</h2>
            <p>Temukan produk yang tepat sesuai kebutuhanmu</p>
          </div>
          <div className="categories-grid">
            {categories.map((cat, idx) => (
              <Link
                to={`/kategori/${cat.id}`}
                key={cat.id}
                className="category-card" data-aos="fade-up" data-aos-delay={idx * 100}
              >
                <div className="category-card-icon">{cat.icon}</div>
                <h3>{cat.name}</h3>
                <p>{cat.productCount} Produk</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section bestseller-section">
        <div className="container">
          <div className="section-header">
            <h2>Produk Terlaris</h2>
            <p>Pilihan favorit ribuan pelanggan kami</p>
          </div>
          <div className="products-grid" data-aos="fade-up" data-aos-delay="100">
            {bestSellers.map((product, idx) => (
              <ProductCard key={product.id} product={product} aosDelay={idx * 100} />
            ))}
          </div>
          <div className="text-center" style={{marginTop: 'var(--space-2xl)'}}>
            <Link to="/kategori" className="btn btn-secondary">Lihat Semua Produk</Link>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="promo-banner-section">
        <div className="container">
          <div className="promo-banner">
            <div className="promo-banner-content" data-aos="fade-right">
              <span className="promo-tag">🔥 Penawaran Spesial</span>
              <h2>Diskon Hingga 25%</h2>
              <p>Untuk semua paket bundling produk. Hemat lebih banyak dengan membeli paket!</p>
              <Link to="/bundle" className="btn btn-dark btn-lg">Lihat Paket</Link>
            </div>
            <div className="promo-banner-visual" data-aos="fade-left" data-aos-delay="200">
              <img src="/images/promo-banner.jpg" alt="Promo GlowMart" />
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Produk Terbaru</h2>
            <p>Koleksi terbaru yang wajib kamu coba</p>
          </div>
          <div className="products-grid" data-aos="fade-up" data-aos-delay="100">
            {newProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} aosDelay={idx * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-us-section">
        <div className="container">
          <div className="section-header">
            <h2>Kenapa Pilih GlowMart?</h2>
            <p>Komitmen kami untuk kecantikan dan kepuasan pelanggan</p>
          </div>
          <div className="why-us-grid">
            <div className="why-us-card" data-aos="fade-up" data-aos-delay="0">
              <div className="why-us-icon">🌿</div>
              <h3>Bahan Alami</h3>
              <p>Produk kami diformulasi dengan bahan alami berkualitas tinggi yang aman untuk semua jenis kulit.</p>
            </div>
            <div className="why-us-card" data-aos="fade-up" data-aos-delay="100">
              <div className="why-us-icon">🔬</div>
              <h3>Teruji Klinis</h3>
              <p>Setiap produk telah melalui uji dermatologi dan klinis untuk memastikan keamanan dan efektivitas.</p>
            </div>
            <div className="why-us-card" data-aos="fade-up" data-aos-delay="200">
              <div className="why-us-icon">🚚</div>
              <h3>Pengiriman Cepat</h3>
              <p>Gratis ongkir untuk pembelian di atas Rp 300.000. Pengiriman cepat ke seluruh Indonesia.</p>
            </div>
            <div className="why-us-card" data-aos="fade-up" data-aos-delay="300">
              <div className="why-us-icon">💯</div>
              <h3>100% Original</h3>
              <p>Kami menjamin semua produk yang dijual adalah 100% original dan resmi dari brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Apa Kata Mereka?</h2>
            <p>Testimoni dari para ahli dan pelanggan setia GlowMart</p>
          </div>
          
          <div className="testimonials-carousel-wrapper">
            <button className="carousel-nav prev" onClick={prevTestimonial} aria-label="Previous testimonial" style={{ left: '-22px' }}>❮</button>
            
            <div className="testimonials-carousel">
              <div 
                className="testimonials-track" 
                style={{ 
                  display: 'flex',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  width: `${(testimonials.length / visibleItems) * 100}%`,
                  transform: `translateX(-${(currentTestimonial / testimonials.length) * 100}%)`
                }}
              >
                {testimonials.map((t) => (
                  <div 
                    key={t.id} 
                    className="testimonial-slide-multi"
                    style={{ width: `${(1 / testimonials.length) * 100}%` }}
                  >
                    <div className="testimonial-card">
                      <div className="testimonial-stars">
                        {'★'.repeat(t.rating)}
                      </div>
                      <p className="testimonial-text">"{t.content}"</p>
                      <div className="testimonial-author">
                        <div className="testimonial-avatar">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <strong>{t.name}</strong>
                          <span>{t.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="carousel-nav next" onClick={nextTestimonial} aria-label="Next testimonial" style={{ right: '-22px' }}>❯</button>
          </div>

          <div className="carousel-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button 
                key={idx} 
                className={`dot ${currentTestimonial === idx ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(idx)}
              />
            ))}
          </div>

          <div className="text-center" style={{marginTop: 'var(--space-2xl)'}}>
            <Link to="/testimoni" className="btn btn-secondary">Lihat Semua Testimoni</Link>
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="section reviews-section" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Ulasan Pelanggan</h2>
            <p>Apa kata mereka yang sudah mencoba produk kami</p>
          </div>
          <div className="reviews-grid">
            {featuredReviews.map((r, idx) => (
              <div key={r.id} className="review-card" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="review-header">
                  <div className="review-avatar">{r.userName.charAt(0)}</div>
                  <div className="review-meta">
                    <strong>{r.userName}</strong>
                    <div className="stars">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
                  </div>
                </div>
                <h4 className="review-title">{r.title}</h4>
                <p className="review-content">"{r.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <h2>Mulai Perjalanan Kecantikanmu</h2>
            <p>Bergabung dengan 50.000+ pelanggan yang sudah merasakan manfaat produk GlowMart</p>
            <Link to="/daftar" className="btn btn-primary btn-lg">Daftar Sekarang — Gratis!</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
