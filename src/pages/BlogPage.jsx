import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { getImagePath } from '../utils/imageUtils';

export default function BlogPage() {
  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (
    <div style={{ paddingBottom: 'var(--space-4xl)' }}>
      <div style={{ background: 'linear-gradient(135deg, var(--color-cream), var(--color-blush))', padding: 'var(--space-3xl) 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'var(--fs-3xl)' }}>📖 Blog & Artikel</h1>
          <p style={{ color: 'var(--color-gray-500)', marginTop: 'var(--space-sm)' }}>Tips kecantikan, panduan skincare, dan edukasi produk</p>
        </div>
      </div>

      <div className="container section">
        {/* Featured */}
        <Link to={`/blog/${featured.slug}`} className="card" data-aos="fade-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginBottom: 'var(--space-3xl)', overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ height: 350, background: 'var(--color-gray-100)', overflow: 'hidden' }}>
            <img src={getImagePath(featured.image)} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ padding: 'var(--space-2xl)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="badge badge-primary" style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-md)' }}>{featured.category}</span>
            <h2 style={{ fontSize: 'var(--fs-2xl)', marginBottom: 'var(--space-md)' }}>{featured.title}</h2>
            <p style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--space-lg)', lineHeight: 'var(--lh-relaxed)' }}>{featured.excerpt}</p>
            <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-gray-400)', display: 'flex', gap: 'var(--space-md)' }}>
              <span>Oleh {featured.author}</span>
              <span>·</span>
              <span>{featured.readTime}</span>
            </div>
          </div>
        </Link>

        {/* Rest */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)' }}>
          {rest.map((blog, idx) => (
            <Link to={`/blog/${blog.slug}`} key={blog.id} className="card" data-aos="fade-up" data-aos-delay={idx * 100} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ height: 200, background: 'var(--color-gray-100)', overflow: 'hidden' }}>
                <img src={getImagePath(blog.image)} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-slow)' }} />
              </div>
              <div className="card-body">
                <span className="badge badge-primary" style={{ marginBottom: 'var(--space-sm)' }}>{blog.category}</span>
                <h3 style={{ fontSize: 'var(--fs-md)', fontFamily: 'var(--font-body)', marginBottom: 'var(--space-sm)' }}>{blog.title}</h3>
                <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-gray-500)', marginBottom: 'var(--space-md)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {blog.excerpt}
                </p>
                <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-gray-400)', display: 'flex', gap: 'var(--space-md)' }}>
                  <span>{blog.author}</span>
                  <span>·</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
