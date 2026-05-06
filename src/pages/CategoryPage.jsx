import { useParams, Link, useSearchParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import ProductCard from '../components/product/ProductCard';
import { products } from '../data/products';
import { categories, getCategoryById } from '../data/categories';
import './CategoryPage.css';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState('all');

  const category = categoryId ? getCategoryById(categoryId) : null;

  const filteredProducts = useMemo(() => {
    let filtered = categoryId
      ? products.filter(p => p.category === categoryId)
      : [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        p.subcategory.toLowerCase().includes(query)
      );
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && (max ? p.price <= max : true));
    }

    switch (sortBy) {
      case 'price-low': return filtered.sort((a, b) => a.price - b.price);
      case 'price-high': return filtered.sort((a, b) => b.price - a.price);
      case 'newest': return filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      case 'rating': return filtered.sort((a, b) => b.rating - a.rating);
      default: return filtered.sort((a, b) => b.sold - a.sold);
    }
  }, [categoryId, sortBy, priceRange]);

  return (
    <div className="category-page">
      {/* Header */}
      <div className="category-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Beranda</Link>
            <span className="separator">›</span>
            <Link to="/kategori">Kategori</Link>
            {category && (
              <>
                <span className="separator">›</span>
                <span>{category.name}</span>
              </>
            )}
          </div>
          <h1>{category ? `${category.icon} ${category.name}` : '🛍️ Semua Produk'}</h1>
          {category && <p className="category-desc">{category.description}</p>}
        </div>
      </div>

      <div className="container">
        <div className="category-layout">
          {/* Sidebar */}
          <aside className="category-sidebar">
            <div className="filter-section">
              <h3>Kategori</h3>
              <ul className="filter-list">
                <li>
                  <Link to="/kategori" className={!categoryId ? 'active' : ''}>
                    Semua Produk
                  </Link>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <Link
                      to={`/kategori/${cat.id}`}
                      className={categoryId === cat.id ? 'active' : ''}
                    >
                      {cat.icon} {cat.name}
                      <span className="filter-count">{cat.productCount}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="filter-section">
              <h3>Harga</h3>
              <ul className="filter-list">
                {[
                  { value: 'all', label: 'Semua Harga' },
                  { value: '0-100000', label: 'Di bawah Rp 100.000' },
                  { value: '100000-200000', label: 'Rp 100.000 - 200.000' },
                  { value: '200000-300000', label: 'Rp 200.000 - 300.000' },
                  { value: '300000-500000', label: 'Rp 300.000 - 500.000' },
                  { value: '500000-', label: 'Di atas Rp 500.000' }
                ].map(opt => (
                  <li key={opt.value}>
                    <button
                      className={priceRange === opt.value ? 'active' : ''}
                      onClick={() => setPriceRange(opt.value)}
                    >
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Products */}
          <div className="category-main">
            <div className="category-toolbar">
              <span className="results-count">{filteredProducts.length} produk ditemukan</span>
              <select
                className="form-select sort-select"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
              >
                <option value="popular">Terpopuler</option>
                <option value="newest">Terbaru</option>
                <option value="price-low">Harga: Rendah ke Tinggi</option>
                <option value="price-high">Harga: Tinggi ke Rendah</option>
                <option value="rating">Rating Tertinggi</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="products-grid category-products">
                {filteredProducts.map((product, idx) => (
                  <ProductCard key={product.id} product={product} aosDelay={(idx % 4) * 100} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <span className="empty-icon">🔍</span>
                <h3>Tidak ada produk ditemukan</h3>
                <p>Coba ubah filter atau kategori untuk menemukan produk yang kamu cari.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
