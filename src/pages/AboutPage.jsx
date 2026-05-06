import { Link } from 'react-router-dom';
import { getImagePath } from '../utils/imageUtils';

export default function AboutPage() {
  return (
    <div style={{ paddingBottom: 'var(--space-4xl)' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, var(--color-secondary), var(--color-primary))', padding: 'var(--space-5xl) 0', textAlign: 'center', color: 'white' }}>
        <div className="container" data-aos="fade-up">
          <h1 style={{ color: 'white', fontSize: 'var(--fs-4xl)', marginBottom: 'var(--space-md)' }}>Tentang GlowMart ✦</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 600, margin: '0 auto', fontSize: 'var(--fs-md)', lineHeight: 'var(--lh-relaxed)' }}>
            Kami percaya setiap orang berhak merasakan kecantikan yang otentik dan percaya diri. GlowMart hadir untuk mewujudkannya.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="container section">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'center' }}>
          <div data-aos="fade-right">
            <h2 style={{ marginBottom: 'var(--space-lg)' }}>Cerita Kami</h2>
            <p style={{ color: 'var(--color-gray-700)', lineHeight: 'var(--lh-relaxed)', marginBottom: 'var(--space-md)' }}>
              GlowMart didirikan pada tahun 2020 dengan satu misi sederhana: membuat produk kecantikan berkualitas tinggi yang terjangkau untuk semua orang Indonesia.
            </p>
            <p style={{ color: 'var(--color-gray-700)', lineHeight: 'var(--lh-relaxed)', marginBottom: 'var(--space-md)' }}>
              Bermula dari sebuah ruangan kecil di Jakarta, kini GlowMart telah melayani lebih dari 50.000 pelanggan di seluruh Indonesia dengan lebih dari 200 produk premium pilihan.
            </p>
            <p style={{ color: 'var(--color-gray-700)', lineHeight: 'var(--lh-relaxed)' }}>
              Kami bekerja sama dengan para ahli dermatologi dan beauty formulator terbaik untuk memastikan setiap produk yang kami hadirkan aman, efektif, dan berkualitas tinggi.
            </p>
          </div>
          <div style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', height: 400, background: 'var(--color-gray-100)' }} data-aos="fade-left">
            <img src={getImagePath('/images/about-story.jpg')} alt="GlowMart Story" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      {/* Values */}
      <div style={{ background: 'var(--color-white)' }}>
        <div className="container section">
          <div className="section-header" data-aos="fade-up"><h2>Nilai-Nilai Kami</h2></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-xl)' }}>
            {[
              { icon: '🌿', title: 'Clean Beauty', desc: 'Produk kami bebas dari bahan berbahaya. Kami mengutamakan bahan alami dan aman.' },
              { icon: '🐰', title: 'Cruelty Free', desc: 'Tidak ada produk kami yang diuji pada hewan. Kami mendukung keindahan yang etis.' },
              { icon: '♻️', title: 'Sustainable', desc: 'Kami berkomitmen untuk packaging yang ramah lingkungan dan sustainable.' },
              { icon: '🤝', title: 'Inklusif', desc: 'Produk kami dirancang untuk semua jenis kulit, tone, dan usia. Kecantikan untuk semua.' }
            ].map((v, i) => (
              <div key={i} style={{ textAlign: 'center', padding: 'var(--space-2xl) var(--space-lg)' }} data-aos="fade-up" data-aos-delay={i * 100}>
                <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', marginBottom: 'var(--space-sm)' }}>{v.title}</h3>
                <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-gray-500)', lineHeight: 'var(--lh-relaxed)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-xl)', textAlign: 'center' }}>
          {[
            { num: '50K+', label: 'Pelanggan Puas' },
            { num: '200+', label: 'Produk Premium' },
            { num: '4.8', label: 'Rating Rata-rata' },
            { num: '10+', label: 'Tahun Pengalaman' }
          ].map((s, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              <div style={{ fontSize: 'var(--fs-4xl)', fontFamily: 'var(--font-heading)', color: 'var(--color-primary-dark)', marginBottom: 'var(--space-sm)' }}>{s.num}</div>
              <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-gray-500)' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
