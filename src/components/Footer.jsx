import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-icon">✈</div>
            Business<span>Class</span>
          </div>
          <p>The world's leading business class flight comparison and booking platform. Trusted by 12,000+ travelers globally.</p>
          <div className="footer-socials">
            {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map(s => (
              <a key={s} href="#">{s}</a>
            ))}
          </div>
        </div>
        <div className="footer-links">
          {[
            { title: 'Quick Links', links: ['Search Flights', 'Popular Routes', 'Our Fleet', 'Special Deals'] },
            { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Blog'] },
            { title: 'Support', links: ['Contact Us', 'FAQ', 'Privacy Policy', 'Terms of Service'] },
          ].map(col => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              <ul>{col.links.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 BusinessClass. All rights reserved.</p>
        <p>Crafted with excellence ✦</p>
      </div>
    </footer>
  )
}
