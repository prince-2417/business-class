import './Fleet.css'

const fleet = [
  {
    name: 'Gulfstream G700',
    type: 'Ultra Long Range',
    range: '7,500 nm',
    seats: '19 Passengers',
    speed: 'Mach 0.90',
    img: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80',
  },
  {
    name: 'Bombardier Global 7500',
    type: 'Long Range',
    range: '7,700 nm',
    seats: '14 Passengers',
    speed: 'Mach 0.925',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
  },
  {
    name: 'Dassault Falcon 10X',
    type: 'Business Jet',
    range: '7,500 nm',
    seats: '16 Passengers',
    speed: 'Mach 0.925',
    img: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80',
  },
]

export default function Fleet() {
  return (
    <section className="fleet" id="fleet">
      <div className="section-header">
        <p className="section-tag">OUR AIRCRAFT</p>
        <h2>World-Class <span>Fleet</span></h2>
        <p className="section-sub">The finest private jets, maintained to the highest standards</p>
      </div>
      <div className="fleet-grid">
        {fleet.map(f => (
          <div className="fleet-card" key={f.name}>
            <div className="fleet-img" style={{ backgroundImage: `url(${f.img})` }}>
              <span className="fleet-type">{f.type}</span>
            </div>
            <div className="fleet-info">
              <h3>{f.name}</h3>
              <div className="fleet-specs">
                {[['Range', f.range], ['Capacity', f.seats], ['Speed', f.speed]].map(([k, v]) => (
                  <div key={k} className="spec">
                    <span>{k}</span>
                    <strong>{v}</strong>
                  </div>
                ))}
              </div>
              <a href="#book" className="btn-primary">Charter Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
