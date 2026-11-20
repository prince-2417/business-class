import './CTA.css'

export default function CTA() {
  return (
    <section className="cta" id="quote">
      <div className="cta-container">

        {/* LEFT — Info */}
        <div className="cta-left">
          <p className="cta-tag">✦ READY TO FLY?</p>
          <h2>Get Your<br /><em>Personalized</em><br />Business Class Quote</h2>
          <p className="cta-desc">Our travel experts respond within 2 hours with the best available deals. No commitment required.</p>

          <div className="cta-perks">
            {[
              ['⚡', 'Response in 2 hours'],
              ['💰', 'Best price guaranteed'],
              ['🎯', 'Exclusive unpublished deals'],
              ['🔒', '100% secure & confidential'],
            ].map(([icon, text]) => (
              <div className="cta-perk" key={text}>
                <span className="perk-icon">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="cta-phone">
            <div className="phone-ring">📞</div>
            <div>
              <p>Prefer to call?</p>
              <a href="tel:+18556283085">855-628-3085</a>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="cta-right">
          <div className="cta-form-card">
            <h3>Request a Free Quote</h3>
            <p>Fill in your details and we'll get back to you shortly</p>
            <form onSubmit={e => e.preventDefault()}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Smith" />
              </div>
              <div className="form-row-2">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+1 (000) 000-0000" />
                </div>
              </div>
              <div className="form-row-2">
                <div className="form-group">
                  <label>Flying From</label>
                  <input type="text" placeholder="New York" />
                </div>
                <div className="form-group">
                  <label>Flying To</label>
                  <input type="text" placeholder="London" />
                </div>
              </div>
              <div className="form-group">
                <label>Travel Date</label>
                <input type="date" />
              </div>
              <button type="submit" className="cta-submit">
                Get My Free Quote →
              </button>
              <p className="form-note">🔒 No spam. No commitment. 100% free.</p>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}
