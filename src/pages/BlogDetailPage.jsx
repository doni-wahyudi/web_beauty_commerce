import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug, blogs } from '../data/blogs';
import { getImagePath } from '../utils/imageUtils';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}><h2>Artikel tidak ditemukan</h2><Link to="/blog" className="btn btn-primary" style={{ marginTop: 16 }}>Kembali ke Blog</Link></div>;
  }

  const related = blogs.filter(b => b.id !== blog.id).slice(0, 2);

  return (
    <div style={{ paddingBottom: 'var(--space-4xl)' }}>
      <div className="container">
        <div className="breadcrumb" style={{ paddingTop: 'var(--space-md)' }}>
          <Link to="/">Beranda</Link><span className="separator">›</span><Link to="/blog">Blog</Link><span className="separator">›</span><span>{blog.title}</span>
        </div>

        <article style={{ maxWidth: 800, margin: '0 auto', padding: 'var(--space-2xl) 0' }}>
          <span className="badge badge-primary" style={{ marginBottom: 'var(--space-md)' }}>{blog.category}</span>
          <h1 style={{ fontSize: 'var(--fs-3xl)', marginBottom: 'var(--space-md)' }}>{blog.title}</h1>
          <div style={{ display: 'flex', gap: 'var(--space-lg)', fontSize: 'var(--fs-sm)', color: 'var(--color-gray-500)', marginBottom: 'var(--space-2xl)' }}>
            <span>Oleh <strong>{blog.author}</strong></span>
            <span>{new Date(blog.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>⏱️ {blog.readTime}</span>
          </div>

          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', marginBottom: 'var(--space-2xl)', height: 400, background: 'var(--color-gray-100)' }}>
            <img src={getImagePath(blog.image)} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div className="blog-content" style={{ fontSize: 'var(--fs-md)', lineHeight: 'var(--lh-relaxed)', color: 'var(--color-gray-700)' }} dangerouslySetInnerHTML={{ __html: blog.content }}></div>

          <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', marginTop: 'var(--space-2xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid var(--color-gray-200)' }}>
            {blog.tags.map(tag => (
              <span key={tag} className="badge badge-primary">{tag}</span>
            ))}
          </div>
        </article>

        {related.length > 0 && (
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'var(--fs-xl)', marginBottom: 'var(--space-lg)' }}>Artikel Terkait</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)' }}>
              {related.map(b => (
                <Link to={`/blog/${b.slug}`} key={b.id} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ height: 180, background: 'var(--color-gray-100)', overflow: 'hidden' }}>
                    <img src={getImagePath(b.image)} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontSize: 'var(--fs-sm)', fontFamily: 'var(--font-body)' }}>{b.title}</h3>
                    <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-gray-400)' }}>{b.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
