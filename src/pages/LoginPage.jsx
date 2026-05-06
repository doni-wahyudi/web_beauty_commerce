import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import './AuthPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success('Berhasil masuk! Selamat datang kembali ✨');
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
            <h2>Selamat Datang di GlowMart ✦</h2>
            <p>Temukan produk kecantikan terbaik untuk kulit sehat dan bercahaya.</p>
            <div className="auth-features">
              <div className="auth-feature">✅ 50.000+ pelanggan puas</div>
              <div className="auth-feature">✅ 200+ produk premium</div>
              <div className="auth-feature">✅ Gratis ongkir & return mudah</div>
            </div>
          </div>
        </div>

        <div className="auth-form-section">
          <div className="auth-form-wrapper">
            <Link to="/" className="auth-logo">✦ GlowMart</Link>
            <h1>Masuk ke Akunmu</h1>
            <p className="auth-subtitle">Masukkan email dan password untuk melanjutkan</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" placeholder="email@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="password-input">
                  <input type={showPass ? 'text' : 'password'} className="form-input" placeholder="Masukkan password" value={password} onChange={e => setPassword(e.target.value)} required />
                  <button type="button" className="password-toggle" onClick={() => setShowPass(!showPass)}>
                    {showPass ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              <div className="form-row">
                <label className="checkbox-label">
                  <input type="checkbox" /> <span>Ingat saya</span>
                </label>
                <a href="#" className="forgot-link">Lupa password?</a>
              </div>

              <button type="submit" className="btn btn-primary btn-lg auth-submit" disabled={loading}>
                {loading ? 'Memproses...' : 'Masuk'}
              </button>

              <button 
                type="button" 
                className="btn btn-secondary" 
                style={{ width: '100%', marginTop: 'var(--space-md)', fontSize: 'var(--fs-sm)' }}
                onClick={() => {
                  setEmail('admin@glowmart.id');
                  setPassword('password123');
                  toast.success('Akun uji coba berhasil diisi! ✨');
                }}
              >
                Gunakan Akun Uji Coba
              </button>
            </form>

            <div className="auth-divider"><span>atau masuk dengan</span></div>

            <div className="social-logins">
              <button className="social-btn"><span>G</span> Google</button>
              <button className="social-btn"><span>f</span> Facebook</button>
            </div>

            <p className="auth-footer">
              Belum punya akun? <Link to="/daftar">Daftar Sekarang</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
