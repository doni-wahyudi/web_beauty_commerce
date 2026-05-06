import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import './AuthPage.css';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      toast.error('Password tidak cocok!');
      return;
    }
    if (form.password.length < 6) {
      toast.error('Password minimal 6 karakter');
      return;
    }
    setLoading(true);
    try {
      await register({ name: form.name, email: form.email, phone: form.phone, password: form.password });
      toast.success('Akun berhasil dibuat! Selamat datang ✨');
      navigate('/akun');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-visual">
          <div className="auth-visual-content">
            <h2>Bergabung dengan GlowMart ✦</h2>
            <p>Daftar sekarang dan nikmati berbagai keuntungan eksklusif.</p>
            <div className="auth-features">
              <div className="auth-feature">🎁 Diskon 10% untuk pembelian pertama</div>
              <div className="auth-feature">💌 Akses ke promo eksklusif member</div>
              <div className="auth-feature">📦 Lacak pesanan dengan mudah</div>
            </div>
          </div>
        </div>

        <div className="auth-form-section">
          <div className="auth-form-wrapper">
            <Link to="/" className="auth-logo">✦ GlowMart</Link>
            <h1>Buat Akun Baru</h1>
            <p className="auth-subtitle">Isi data di bawah untuk memulai</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Nama Lengkap *</label>
                <input name="name" className="form-input" placeholder="Nama lengkap" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input name="email" type="email" className="form-input" placeholder="email@example.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">No. Telepon</label>
                <input name="phone" className="form-input" placeholder="08xxxxxxxxxx" value={form.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Password *</label>
                <div className="password-input">
                  <input name="password" type={showPass ? 'text' : 'password'} className="form-input" placeholder="Min. 6 karakter" value={form.password} onChange={handleChange} required />
                  <button type="button" className="password-toggle" onClick={() => setShowPass(!showPass)}>{showPass ? '🙈' : '👁️'}</button>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Konfirmasi Password *</label>
                <input name="confirmPassword" type="password" className="form-input" placeholder="Ulangi password" value={form.confirmPassword} onChange={handleChange} required />
              </div>

              <label className="checkbox-label" style={{ marginBottom: 'var(--space-lg)' }}>
                <input type="checkbox" required /> <span>Saya setuju dengan <Link to="/syarat-ketentuan">Syarat & Ketentuan</Link> dan <Link to="/kebijakan-privasi">Kebijakan Privasi</Link></span>
              </label>

              <button type="submit" className="btn btn-primary btn-lg auth-submit" disabled={loading}>
                {loading ? 'Memproses...' : 'Daftar Sekarang'}
              </button>
            </form>

            <p className="auth-footer">
              Sudah punya akun? <Link to="/masuk">Masuk</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
