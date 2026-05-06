import { useSearchParams } from 'react-router-dom';
import { mockOrders, getOrderById } from '../data/orders';
import './TrackingPage.css';

export default function TrackingPage() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order') || mockOrders[0]?.id;
  const order = getOrderById(orderId);

  if (!order) {
    return <div className="empty-state"><span className="empty-icon">🔍</span><h3>Pesanan tidak ditemukan</h3></div>;
  }

  const tracking = order.tracking;

  return (
    <div className="tracking-page animate-fade-in">
      <h1 style={{ fontSize: 'var(--fs-2xl)', marginBottom: 'var(--space-xl)' }}>Lacak Pesanan</h1>

      <div className="tracking-card">
        <div className="tracking-header">
          <div>
            <h3>{order.id}</h3>
            <span className={`badge badge-${order.status === 'delivered' ? 'success' : order.status === 'shipped' ? 'primary' : 'info'}`}>
              {order.statusLabel}
            </span>
          </div>
          <div className="tracking-courier">
            <span>Kurir: <strong>{tracking.courier}</strong></span>
            {tracking.trackingNumber && <span>Resi: <strong>{tracking.trackingNumber}</strong></span>}
          </div>
        </div>

        <div className="tracking-timeline">
          {[...tracking.history].reverse().map((item, idx) => (
            <div key={idx} className={`timeline-item ${idx === 0 ? 'active' : ''}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <strong>{item.status}</strong>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="tracking-info">
          <h4>Detail Pengiriman</h4>
          <div className="tracking-detail-grid">
            <div>
              <span>Penerima</span>
              <strong>{order.shippingAddress.name}</strong>
            </div>
            <div>
              <span>Alamat</span>
              <strong>{order.shippingAddress.address}, {order.shippingAddress.city}</strong>
            </div>
            <div>
              <span>Estimasi Tiba</span>
              <strong>{new Date(tracking.estimatedDelivery).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
