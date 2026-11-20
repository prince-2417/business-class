import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <div className="logo-icon">✈</div>
        <span>BUSINESS CLASS</span>
      </div>

      {/* Right side */}
      <div className="nav-right">
        <div className="nav-currency">
          <span>USD</span>
          <span className="chevron">▾</span>
        </div>

        <a href="tel:+18556283085" className="nav-phone-btn">
          <div className="phone-btn-inner">
            <span className="phone-label">24/7 PHONE DEALS</span>
            <span className="phone-number">USA 855-628-3085</span>
          </div>
          <span className="chevron">▾</span>
        </a>

        <button className="nav-menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <ul className="nav-mobile">
          {['Home', 'Routes', 'Fleet', 'About', 'Contact'].map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a></li>
          ))}
        </ul>
      )}
    </nav>
  )
}
