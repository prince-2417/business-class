import './Routes.css'

const routes = [
  { from: 'New York', to: 'London', code: 'JFK → LHR', price: '$2,450', duration: '7h 10m', airline: 'British Airways', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80' },
  { from: 'Dubai', to: 'Paris', code: 'DXB → CDG', price: '$1,890', duration: '7h 30m', airline: 'Emirates', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80' },
  { from: 'Singapore', to: 'Tokyo', code: 'SIN → NRT', price: '$1,320', duration: '6h 55m', airline: 'Singapore Airlines', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80' },
  { from: 'Los Angeles', to: 'Sydney', code: 'LAX → SYD', price: '$3,100', duration: '15h 25m', airline: 'Qantas', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80' },
  { from: 'Frankfurt', to: 'New York', code: 'FRA → JFK', price: '$2,200', duration: '8h 40m', airline: 'Lufthansa', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80' },
  { from: 'Hong Kong', to: 'London', code: 'HKG → LHR', price: '$2,750', duration: '12h 50m', airline: 'Cathay Pacific', img: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&q=80' },
]

export default function Routes() {
  return (
    <section className="routes" id="routes">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">TOP DEALS</p>
          <h2>Popular Business Class Routes</h2>
          <p className="section-sub">Hand-picked deals on the world's most sought-after routes</p>
        </div>
        <div className="routes-grid">
          {routes.map(r => (
            <div className="route-card" key={r.code}>
              <div className="route-img" style={{ backgroundImage: `url(${r.img})` }}>
                <span className="route-airline">{r.airline}</span>
              </div>
              <div className="route-body">
                <div className="route-path">
                  <span className="city">{r.from}</span>
                  <span className="arrow">✈</span>
                  <span className="city">{r.to}</span>
                </div>
                <div className="route-code">{r.code} · {r.duration}</div>
                <div className="route-footer">
                  <div className="route-price">
                    <span>From</span>
                    <strong>{r.price}</strong>
                  </div>
                  <a href="#quote" className="route-btn">Book Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
