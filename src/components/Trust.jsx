import './Trust.css'

const reviews = [
  { time: 'Yesterday', title: 'Fast sites is often super get kept', body: 'Fast sites is often super get kept — sheetings me nite ups it.' },
  { time: 'Yesterday', title: 'Great service and support', body: 'I tried to book international tickets for 7 family members including myself. We are traveling from 3 different cities and some of us would...' },
  { time: 'Yesterday', title: 'Amazing Outcome with Difficult Booking', body: 'I tried to book international tickets for 7 family members including myself. We are traveling from 3 different cities and some of us would...' },
]

const badges = [
  { icon: '🏆', title: 'BBB A+ Rating', desc: 'Recognized for excellence in service and integrity, our A+ BBB rating reflects our dedication to customer trust and satisfaction.' },
  { icon: '✈', title: 'ARC Accredited', desc: 'We are certified by ARC (Airlines Reporting Corporation), ensuring reliable airline ticketing and industry compliance.' },
  { icon: '🔒', title: 'PCI DSS Compliant', desc: 'Your payment information is protected. We meet all PCI DSS standards for secure credit card processing.' },
  { icon: '🌐', title: 'IATA Verified', desc: 'As an IATA certified agency, we meet global standards for professionalism and trust in travel services.' },
  { icon: '🛡', title: 'SSL Secured', desc: 'Our site uses advanced SSL encryption to protect your personal and payment information at every step.' },
  { icon: '💬', title: '24/7 Live Support', desc: 'Your journey never stops — neither do we. Reach our team any day, with phone, chat, and email coverage.' },
]

export default function Trust() {
  return (
    <section className="trust" id="trust">
      {/* Header */}
      <div className="trust-header">
        <h2><span>Trusted</span> by Thousands of Business Class Travelers Worldwide</h2>
        <p>Our service is built on trust, backed by leading security technologies</p>
      </div>

      {/* Trustpilot Bar */}
      <div className="tp-bar">
        <div className="tp-bar-left">
          <span className="tp-brand">★ Trustpilot</span>
          <div className="tp-bar-stars">★★★★★</div>
          <span className="tp-excellent">Excellent</span>
          <span className="tp-divider">|</span>
          <span className="tp-rated">Rated <strong>4.8</strong></span>
        </div>
      </div>

      {/* Review Cards */}
      <div className="review-slider">
        {reviews.map((r, i) => (
          <div className="review-slide" key={i}>
            <div className="slide-stars">★★★★★</div>
            <p className="slide-time">{r.time}</p>
            <h4>{r.title}</h4>
            <p className="slide-body">{r.body}</p>
          </div>
        ))}
      </div>

      {/* Video Testimonial */}
      <div className="video-section">
        <div className="video-left">
          <div className="video-thumb">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
              alt="Testimonial"
            />
            <div className="video-play">
              <span>▶</span>
              <p>WATCH VIDEO</p>
            </div>
          </div>
        </div>
        <div className="video-right">
          <p className="video-quote">
            "Business-class.com streamlines the journey for all kinds of travelers, especially families and kids"
          </p>
          <div className="video-author">
            <strong>Ed Westwick</strong>
            <span>Actor and Musician</span>
          </div>
        </div>
      </div>

      {/* Trust Badges Grid */}
      <div className="badges-grid">
        {badges.map(b => (
          <div className="badge-card" key={b.title}>
            <div className="badge-icon">{b.icon}</div>
            <div className="badge-info">
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
