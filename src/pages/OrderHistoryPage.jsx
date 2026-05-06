import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockOrders, getStatusColor } from '../data/orders';
import { formatPrice } from '../data/products';

export default function OrderHistoryPage() {
  const [filter, setFilter] = useState('all');
  const orders = filter === 'all' ? mockOrders : mockOrders.filter(o => o.status === filter);

  return (
    <div className="animate-fade-in">
      <h1 style={{ fontSize: 'var(--fs-2xl)', marginBottom: 'var(--space-xl)' }}>Riwayat Pesanan</h1>
      
      <div style={{ display: 'flex', gap: '8px', marginBottom: 'var(--space-xl)', flexWrap: 'wrap' }}>
        {[
          { value: 'all', label: 'Semua' },
          { value: 'processing', label: 'Diproses' },
          { value: 'shipped', label: 'Dikirim' },
          { value: 'delivered', label: 'Selesai' }
        ].map(f => (
          <button key={f.value} className={`btn ${filter === f.value ? 'btn-primary' : 'btn-secondary'} btn-sm`} onClick={() => setFilter(f.value)}>
            {f.label}
          </button>
        ))}
      </div>

      {orders.length === 0 ? (
        <div className="empty-state"><span className="empty-icon">📦</span><h3>Tidak ada pesanan</h3></div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          {orders.map(order => (
            <div key={order.id} className="order-preview-card">
              <div className="order-preview-header">
                <div>
                  <span className="order-id">{order.id}</span>
                  <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-gray-400)', marginLeft: 12 }}>{new Date(order.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <span className={`badge badge-${getStatusColor(order.status)}`}>{order.statusLabel}</span>
              </div>
              {order.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', padding: '8px 0' }}>
                  <img src={item.image} alt={item.name} style={{ width: 60, height: 60, borderRadius: 8, objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, fontSize: 'var(--fs-sm)' }}>{item.name}</p>
                    <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-gray-500)' }}>{item.quantity}x {formatPrice(item.price)}</span>
                  </div>
                </div>
              ))}
              <div className="order-preview-footer">
                <span>Total: <strong className="price">{formatPrice(order.total)}</strong></span>
                <Link to={`/akun/tracking?order=${order.id}`} className="btn btn-secondary btn-sm">Lacak Pesanan</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
