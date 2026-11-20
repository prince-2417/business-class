import './HowItWorks.css'

const steps = [
  { num: '1', icon: '🔍', title: 'Search Flights', desc: 'Enter your origin, destination, and travel dates to find available business class options.' },
  { num: '2', icon: '💺', title: 'Choose Your Seat', desc: 'Compare airlines, prices, and amenities. Pick the perfect business class experience.' },
  { num: '3', icon: '✅', title: 'Book & Fly', desc: 'Confirm your booking securely online. Receive instant confirmation and e-ticket.' },
]

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="section-header container">
        <p className="section-tag">SIMPLE PROCESS</p>
        <h2>How It Works</h2>
        <p className="section-sub">Book your business class flight in 3 easy steps</p>
      </div>
      <div className="steps">
        {steps.map(s => (
          <div className="step" key={s.num}>
            <div className="step-num">{s.num}</div>
            <div className="step-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
