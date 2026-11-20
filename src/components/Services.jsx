import './Services.css'

const services = [
  { icon: '✈', title: 'Private Charter', desc: 'Entire aircraft exclusively for you. Depart on your schedule from 5,000+ airports worldwide.' },
  { icon: '🛋', title: 'Business Class Seats', desc: 'Lie-flat beds, gourmet dining, and premium amenities on every commercial route.' },
  { icon: '🚗', title: 'Ground Transfer', desc: 'Seamless door-to-door luxury transfers with professional chauffeurs.' },
  { icon: '🏨', title: 'Hotel Partnerships', desc: 'Exclusive rates at 5-star properties globally, curated for business travelers.' },
  { icon: '🍾', title: 'In-Flight Catering', desc: 'Michelin-star inspired menus, fine wines, and personalized dietary preferences.' },
  { icon: '🛡', title: 'VIP Security', desc: 'Discreet, professional security services for high-profile clients worldwide.' },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-header">
        <p className="section-tag">WHAT WE OFFER</p>
        <h2>Unmatched <span>Luxury Services</span></h2>
        <p className="section-sub">Every detail crafted for the world's most demanding travelers</p>
      </div>
      <div className="services-grid">
        {services.map(s => (
          <div className="service-card" key={s.title}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <a href="#book" className="service-link">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
