import { testimonials } from '../data/reviews';
import { reviews } from '../data/reviews';

export default function TestimonialPage() {
  const renderStars = (r) => '★'.repeat(r) + '☆'.repeat(5 - r);

  return (
    <div style={{ paddingBottom: 'var(--space-4xl)' }}>
      <div style={{ background: 'linear-gradient(135deg, var(--color-cream), var(--color-blush))', padding: 'var(--space-3xl) 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'var(--fs-3xl)' }}>⭐ Testimoni Pelanggan</h1>
          <p style={{ color: 'var(--color-gray-500)', marginTop: 'var(--space-sm)' }}>Lihat apa kata pelanggan kami tentang produk GlowMart</p>
        </div>
      </div>

      <div className="container section">
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-xl)', marginBottom: 'var(--space-3xl)', textAlign: 'center' }} data-aos="fade-up">
          <div className="card" style={{ padding: 'var(--space-xl)' }}>
            <div style={{ fontSize: 'var(--fs-3xl)', fontFamily: 'var(--font-heading)', color: 'var(--color-primary-dark)' }}>4.8</div>
            <div style={{ color: 'var(--color-accent)', fontSize: 'var(--fs-md)', marginBottom: 4 }}>★★★★★</div>
            <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-gray-500)' }}>Rating Rata-rata</span>
          </div>
          <div className="card" style={{ padding: 'var(--space-xl)' }}>
            <div style={{ fontSize: 'var(--fs-3xl)', fontFamily: 'var(--font-heading)', color: 'var(--color-primary-dark)' }}>1,200+</div>
            <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-gray-500)' }}>Ulasan Pelanggan</span>
          </div>
          <div className="card" style={{ padding: 'var(--space-xl)' }}>
            <div style={{ fontSize: 'var(--fs-3xl)', fontFamily: 'var(--font-heading)', color: 'var(--color-primary-dark)' }}>98%</div>
            <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-gray-500)' }}>Pelanggan Puas</span>
          </div>
        </div>

        {/* Expert Testimonials */}
        <div className="section-header" data-aos="fade-up"><h2>Rekomendasi Para Ahli</h2></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-xl)', marginBottom: 'var(--space-3xl)' }}>
          {testimonials.map((t, idx) => (
            <div key={t.id} className="testimonial-card" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="testimonial-stars">{renderStars(t.rating)}</div>
              <p className="testimonial-text">"{t.content}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                <div><strong>{t.name}</strong><span>{t.role}</span></div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Reviews */}
        <div className="section-header" data-aos="fade-up"><h2>Ulasan Pelanggan</h2></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          {reviews.map((r, idx) => (
            <div key={r.id} className="card" style={{ padding: 'var(--space-xl)' }} data-aos="fade-up" data-aos-delay={(idx % 3) * 100}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                <div className="testimonial-avatar">{r.userName.charAt(0)}</div>
                <div>
                  <strong style={{ display: 'block', fontSize: 'var(--fs-sm)' }}>{r.userName}</strong>
                  <span style={{ color: 'var(--color-accent)', fontSize: 'var(--fs-sm)' }}>{renderStars(r.rating)}</span>
                </div>
                {r.verified && <span className="badge badge-success" style={{ marginLeft: 'auto' }}>Terverifikasi</span>}
              </div>
              <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-base)', marginBottom: 'var(--space-sm)' }}>{r.title}</h4>
              <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-gray-700)', lineHeight: 'var(--lh-relaxed)' }}>{r.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
