import { Link } from 'react-router-dom';

const legalStyle = { maxWidth: 800, margin: '0 auto', padding: 'var(--space-2xl) 0 var(--space-4xl)' };
const sectionStyle = { marginBottom: 'var(--space-2xl)' };
const headingStyle = { fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lg)', marginBottom: 'var(--space-md)' };
const textStyle = { fontSize: 'var(--fs-sm)', color: 'var(--color-gray-700)', lineHeight: 'var(--lh-relaxed)', marginBottom: 'var(--space-md)' };

export function PrivacyPolicyPage() {
  return (
    <div className="container" style={legalStyle}>
      <div className="breadcrumb"><Link to="/">Beranda</Link><span className="separator">›</span><span>Kebijakan Privasi</span></div>
      <h1 style={{ fontSize: 'var(--fs-3xl)', margin: 'var(--space-lg) 0 var(--space-2xl)' }}>Kebijakan Privasi</h1>
      <p style={textStyle}>Terakhir diperbarui: 1 Mei 2025</p>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>1. Informasi yang Kami Kumpulkan</h2>
        <p style={textStyle}>Kami mengumpulkan informasi yang Anda berikan secara langsung, termasuk: nama lengkap, alamat email, nomor telepon, alamat pengiriman, dan informasi pembayaran saat Anda membuat akun, melakukan pembelian, atau menghubungi kami.</p>
      </div>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>2. Penggunaan Informasi</h2>
        <p style={textStyle}>Informasi yang kami kumpulkan digunakan untuk: memproses dan mengirimkan pesanan Anda, mengelola akun Anda, mengirimkan informasi tentang produk dan promosi (dengan persetujuan Anda), meningkatkan layanan dan pengalaman belanja Anda.</p>
      </div>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>3. Keamanan Data</h2>
        <p style={textStyle}>Kami menggunakan teknologi enkripsi dan langkah-langkah keamanan yang sesuai untuk melindungi informasi pribadi Anda dari akses yang tidak sah, pengungkapan, perubahan, atau penghancuran.</p>
      </div>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>4. Berbagi Informasi</h2>
        <p style={textStyle}>Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya berbagi informasi dengan penyedia layanan yang membantu kami mengoperasikan bisnis (seperti jasa pengiriman dan pembayaran).</p>
      </div>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>5. Hak Anda</h2>
        <p style={textStyle}>Anda berhak untuk mengakses, memperbarui, atau menghapus informasi pribadi Anda kapan saja melalui pengaturan akun atau menghubungi kami di privacy@glowmart.id.</p>
      </div>
    </div>
  );
}

export function TermsPage() {
  return (
    <div className="container" style={legalStyle}>
      <div className="breadcrumb"><Link to="/">Beranda</Link><span className="separator">›</span><span>Syarat & Ketentuan</span></div>
      <h1 style={{ fontSize: 'var(--fs-3xl)', margin: 'var(--space-lg) 0 var(--space-2xl)' }}>Syarat & Ketentuan</h1>
      <p style={textStyle}>Terakhir diperbarui: 1 Mei 2025</p>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>1. Ketentuan Umum</h2>
        <p style={textStyle}>Dengan mengakses dan menggunakan website GlowMart, Anda menyetujui untuk terikat dengan syarat dan ketentuan berikut. Jika Anda tidak setuju, silakan tidak menggunakan layanan kami.</p>
      </div>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>2. Akun Pengguna</h2>
        <p style={textStyle}>Anda bertanggung jawab untuk menjaga kerahasiaan informasi akun Anda. Anda harus memberikan informasi yang akurat dan lengkap saat mendaftar. GlowMart berhak menangguhkan akun yang melanggar ketentuan ini.</p>
      </div>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>3. Pemesanan dan Pembayaran</h2>
        <p style={textStyle}>Semua harga yang tercantum dalam mata uang Rupiah (IDR) dan sudah termasuk PPN. Kami berhak untuk mengubah harga kapan saja tanpa pemberitahuan sebelumnya. Pembayaran harus dilakukan sebelum pesanan diproses.</p>
      </div>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>4. Produk</h2>
        <p style={textStyle}>Kami berusaha menampilkan deskripsi dan gambar produk seakurat mungkin. Namun, warna produk mungkin sedikit berbeda tergantung pada pengaturan layar perangkat Anda.</p>
      </div>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>5. Batasan Tanggung Jawab</h2>
        <p style={textStyle}>GlowMart tidak bertanggung jawab atas kerusakan langsung, tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan produk kami diluar petunjuk penggunaan yang disarankan.</p>
      </div>
    </div>
  );
}

export function ShippingReturnPage() {
  return (
    <div className="container" style={legalStyle}>
      <div className="breadcrumb"><Link to="/">Beranda</Link><span className="separator">›</span><span>Kebijakan Pengiriman & Return</span></div>
      <h1 style={{ fontSize: 'var(--fs-3xl)', margin: 'var(--space-lg) 0 var(--space-2xl)' }}>Kebijakan Pengiriman & Return</h1>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>📦 Pengiriman</h2>
        <p style={textStyle}>Kami melayani pengiriman ke seluruh Indonesia melalui berbagai jasa ekspedisi terpercaya termasuk JNE, SiCepat, J&T, dan Anteraja.</p>
        <div style={{ background: 'var(--color-gray-100)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)', marginBottom: 'var(--space-md)' }}>
          <table style={{ width: '100%', fontSize: 'var(--fs-sm)' }}>
            <thead><tr style={{ textAlign: 'left', borderBottom: '1px solid var(--color-gray-200)' }}><th style={{ padding: 8 }}>Layanan</th><th style={{ padding: 8 }}>Estimasi</th><th style={{ padding: 8 }}>Biaya</th></tr></thead>
            <tbody>
              <tr><td style={{ padding: 8 }}>Regular</td><td style={{ padding: 8 }}>3-5 hari kerja</td><td style={{ padding: 8 }}>Rp 15.000</td></tr>
              <tr><td style={{ padding: 8 }}>Express</td><td style={{ padding: 8 }}>1-2 hari kerja</td><td style={{ padding: 8 }}>Rp 25.000</td></tr>
              <tr><td style={{ padding: 8 }}>Same Day</td><td style={{ padding: 8 }}>Hari yang sama</td><td style={{ padding: 8 }}>Rp 40.000</td></tr>
            </tbody>
          </table>
        </div>
        <p style={textStyle}>🎁 <strong>Gratis ongkir</strong> untuk pembelian di atas Rp 300.000 (layanan Regular).</p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>🔄 Kebijakan Return</h2>
        <p style={textStyle}>Anda dapat mengembalikan produk dalam 7 hari setelah diterima dengan syarat:</p>
        <ul style={{ ...textStyle, paddingLeft: 'var(--space-xl)', listStyle: 'disc' }}>
          <li>Produk belum dibuka/digunakan</li>
          <li>Kemasan masih utuh dan lengkap</li>
          <li>Menyertakan bukti pembelian (invoice/receipt)</li>
          <li>Produk yang dikembalikan bukan produk sale/promo</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>💰 Proses Refund</h2>
        <p style={textStyle}>Setelah produk yang dikembalikan diterima dan diperiksa, refund akan diproses dalam 3-5 hari kerja ke metode pembayaran asli Anda. Untuk pertanyaan lebih lanjut, hubungi tim kami di support@glowmart.id.</p>
      </div>
    </div>
  );
}
