import './Features.css'

const features = [
  { icon: '💺', title: 'Premium Seats', desc: 'Lie-flat beds, extra legroom, and luxury amenities on every flight.' },
  { icon: '💰', title: 'Best Price Guarantee', desc: 'We match any lower price you find. No hidden fees, ever.' },
  { icon: '🕐', title: '24/7 Support', desc: 'Our travel experts are available around the clock to assist you.' },
  { icon: '🌍', title: '500+ Destinations', desc: 'Fly to any corner of the world with our global airline partners.' },
]

export default function Features() {
  return (
    <section className="features" id="about">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">WHY CHOOSE US</p>
          <h2>The Business Class Experience You Deserve</h2>
          <p className="section-sub">Every detail crafted for the world's most demanding travelers</p>
        </div>
        <div className="features-grid">
          {features.map(f => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
