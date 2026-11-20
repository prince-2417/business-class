import './Testimonials.css'

const reviews = [
  { name: 'James Whitfield', role: 'CEO, Whitfield Capital', text: 'Absolutely flawless experience from booking to landing. The attention to detail is unmatched. This is how business travel should always feel.', rating: 5 },
  { name: 'Sophia Laurent', role: 'Fashion Director', text: "I've used many travel services, but BusinessClass sets a completely different standard. Found an amazing deal on Emirates in minutes!", rating: 5 },
  { name: 'Raj Mehta', role: 'Founder, TechVentures', text: 'The support team handled everything perfectly. I could focus entirely on my work while they took care of every detail. Highly recommended.', rating: 5 },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">REVIEWS</p>
          <h2>What Our Travelers Say</h2>
          <p className="section-sub">Trusted by thousands of business travelers worldwide</p>
        </div>
        <div className="reviews-grid">
          {reviews.map(r => (
            <div className="review-card" key={r.name}>
              <div className="stars">{'★'.repeat(r.rating)}</div>
              <p className="review-text">"{r.text}"</p>
              <div className="reviewer">
                <div className="reviewer-avatar">{r.name[0]}</div>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
