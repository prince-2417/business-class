import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'What is business class and how is it different from economy?',
    a: 'Business class offers premium seating with lie-flat beds, extra legroom, gourmet meals, priority boarding, and dedicated cabin crew. It provides a significantly more comfortable experience compared to economy, especially on long-haul flights.'
  },
  {
    q: 'How much can I save on business class tickets through your platform?',
    a: 'Our clients typically save 15–60% compared to standard published fares. We have access to exclusive unpublished deals, consolidator fares, and special airline contracts that are not available on regular booking sites.'
  },
  {
    q: 'How do I book a business class flight?',
    a: 'Simply use our search form to enter your route and travel dates, or call our 24/7 travel experts at 855-628-3085. We will find the best available options and handle the entire booking process for you.'
  },
  {
    q: 'Can I earn frequent flyer miles on discounted business class tickets?',
    a: 'Yes, in most cases you can still earn frequent flyer miles on our discounted tickets. The exact mileage accrual depends on the airline and fare class. Our agents will always inform you about mileage eligibility before booking.'
  },
  {
    q: 'What is your cancellation and refund policy?',
    a: 'Cancellation and refund policies vary by airline and fare type. Our team will clearly explain all terms before you confirm your booking. We also offer flexible fare options for travelers who need more freedom to change plans.'
  },
  {
    q: 'Do you offer first class tickets as well?',
    a: 'Absolutely. In addition to business class, we offer first class tickets on all major airlines including Emirates, Qatar Airways, Singapore Airlines, Lufthansa, and many more. Contact our team for exclusive first class deals.'
  },
  {
    q: 'How quickly will I receive my booking confirmation?',
    a: 'Once your booking is confirmed and payment is processed, you will receive your e-ticket and booking confirmation via email within minutes. For complex itineraries, it may take up to 2 hours.'
  },
  {
    q: 'Is it safe to book through your platform?',
    a: 'Yes, completely. We are IATA certified, ARC accredited, BBB A+ rated, and PCI DSS compliant. All transactions are protected with 256-bit SSL encryption. Your personal and payment information is always secure.'
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">FAQ</p>
          <h2>Frequently Asked Questions</h2>
          <p className="section-sub">Everything you need to know about booking business class flights</p>
        </div>

        <div className="faq-grid">
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`faq-item ${open === i ? 'open' : ''}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="faq-question">
                  <span>{f.q}</span>
                  <div className="faq-icon">{open === i ? '−' : '+'}</div>
                </div>
                {open === i && (
                  <div className="faq-answer">
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="faq-side">
            <div className="faq-side-card">
              <div className="faq-side-icon">💬</div>
              <h3>Still have questions?</h3>
              <p>Our travel experts are available 24/7 to answer any questions and help you find the best business class deal.</p>
              <a href="tel:+18556283085" className="faq-call-btn">📞 Call 855-628-3085</a>
              <a href="#quote" className="faq-quote-btn">Get a Free Quote</a>
            </div>

            <div className="faq-stats">
              {[['98%', 'Customer Satisfaction'], ['2 hrs', 'Avg. Response Time'], ['12K+', 'Happy Travelers']].map(([n, l]) => (
                <div className="faq-stat" key={l}>
                  <strong>{n}</strong>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
