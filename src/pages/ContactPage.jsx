import { useState } from 'react';
import { useToast } from '../contexts/ToastContext';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Pesan berhasil dikirim! Kami akan menghubungi kamu segera.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ paddingBottom: 'var(--space-4xl)' }}>
      <div style={{ background: 'linear-gradient(135deg, var(--color-cream), var(--color-blush))', padding: 'var(--space-3xl) 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'var(--fs-3xl)' }}>📞 Hubungi Kami</h1>
          <p style={{ color: 'var(--color-gray-500)', marginTop: 'var(--space-sm)' }}>Kami siap membantu! Hubungi kami melalui form atau kontak di bawah</p>
        </div>
      </div>

      <div className="container section">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3xl)', maxWidth: 1000, margin: '0 auto' }}>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <h2 style={{ fontSize: 'var(--fs-xl)', marginBottom: 'var(--space-xl)' }}>Kirim Pesan</h2>
            <div className="form-group">
              <label className="form-label">Nama</label>
              <input className="form-input" value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} required placeholder="Nama lengkap" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} required placeholder="email@example.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Subjek</label>
              <input className="form-input" value={form.subject} onChange={e => setForm(p => ({...p, subject: e.target.value}))} required placeholder="Subjek pesan" />
            </div>
            <div className="form-group">
              <label className="form-label">Pesan</label>
              <textarea className="form-input" rows="5" value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} required placeholder="Tulis pesan kamu di sini..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Kirim Pesan</button>
          </form>

          {/* Info */}
          <div>
            <h2 style={{ fontSize: 'var(--fs-xl)', marginBottom: 'var(--space-xl)' }}>Informasi Kontak</h2>
            {[
              { icon: '📍', title: 'Alamat', desc: 'Jl. Sudirman No. 123, Jakarta Selatan, DKI Jakarta 12190' },
              { icon: '📧', title: 'Email', desc: 'hello@glowmart.id' },
              { icon: '📱', title: 'Telepon', desc: '+62 812-3456-7890' },
              { icon: '🕐', title: 'Jam Operasional', desc: 'Senin - Sabtu: 09:00 - 21:00 WIB' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)', alignItems: 'flex-start' }}>
                <span style={{ fontSize: 'var(--fs-2xl)', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <strong style={{ display: 'block', marginBottom: 4 }}>{item.title}</strong>
                  <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-gray-500)' }}>{item.desc}</span>
                </div>
              </div>
            ))}

            <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', marginBottom: 'var(--space-md)', marginTop: 'var(--space-2xl)' }}>Ikuti Kami</h3>
            <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
              {['📷 Instagram', '🎵 TikTok', '💬 WhatsApp'].map(s => (
                <a key={s} href="#" style={{ padding: '8px 16px', background: 'var(--color-gray-100)', borderRadius: 'var(--radius-md)', fontSize: 'var(--fs-sm)', color: 'var(--color-gray-700)' }}>{s}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
