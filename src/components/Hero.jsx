import { useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [tripType, setTripType] = useState('Round-Trip')
  const [cabinType, setCabinType] = useState('Business')
  const [travelers, setTravelers] = useState(1)

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">

        {/* LEFT — Search Form */}
        <div className="hero-form-card">
          {/* Trip type + Cabin selectors */}
          <div className="form-selectors">
            <div className="selector-pill">
              <select value={tripType} onChange={e => setTripType(e.target.value)}>
                <option>Round-Trip</option>
                <option>One Way</option>
                <option>Multi-City</option>
              </select>
              <span className="pill-arrow">▾</span>
            </div>
            <div className="selector-pill">
              <select value={cabinType} onChange={e => setCabinType(e.target.value)}>
                <option>Business</option>
                <option>First Class</option>
                <option>Premium Economy</option>
              </select>
              <span className="pill-arrow">▾</span>
            </div>
            <div className="selector-pill travelers-pill">
              <span>{travelers} Traveler{travelers > 1 ? 's' : ''}</span>
              <div className="traveler-btns">
                <button onClick={() => setTravelers(Math.max(1, travelers - 1))}>−</button>
                <button onClick={() => setTravelers(Math.min(9, travelers + 1))}>+</button>
              </div>
            </div>
          </div>

          {/* From / To */}
          <div className="form-inputs">
            <input type="text" placeholder="Going from, airport or city" className="form-input" />
            <div className="input-divider" />
            <input type="text" placeholder="Going to, airport or city" className="form-input" />
          </div>

          {/* Dates */}
          <div className="form-dates">
            <div className="date-field">
              <label>Departure</label>
              <input type="date" />
            </div>
            <div className="date-divider" />
            <div className="date-field">
              <label>Return</label>
              <input type="date" />
            </div>
          </div>

          {/* CTA Button */}
          <button className="check-price-btn">Check Your Price &nbsp;›</button>

          {/* OR divider */}
          <div className="form-or">
            <span className="or-line" /><span>or</span><span className="or-line" />
          </div>

          {/* Call CTA */}
          <a href="tel:+18556283085" className="call-cta">
            <div className="call-avatar">
              <span>👩</span>
            </div>
            <div className="call-text">
              <strong>Call us 855-628-3085</strong>
              <span>Phone-exclusive savings</span>
            </div>
            <div className="call-icon">📞</div>
          </a>
        </div>

        {/* RIGHT — Headline + Trust */}
        <div className="hero-right">
          <h1>
            Experience<br />
            Business Class<br />
            <em>Luxury for Less</em>
          </h1>
          <div className="hero-divider" />
          <p className="hero-tagline">
            <strong>Save 15–60% on Business and First class fares.</strong><br />
            Access exclusive, unpublished premium flight deals.
          </p>

          {/* Trustpilot */}
          <div className="trustpilot">
            <div className="tp-stars">★★★★★</div>
            <span className="tp-count">16,385 reviews on</span>
            <div className="tp-logo">✦ Trustpilot</div>
          </div>

          {/* Trust Badges */}
          <div className="trust-badges">
            {['IATA', 'ARC', 'BBB A+', 'ASTA'].map(b => (
              <div key={b} className="badge">{b}</div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
