import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import "../App.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LEFT — LOGO & BRAND WORDMARK */}
      <div className="logo-container">
        <img src={logo} alt="CareEZ IT SOL Logo" className="logo-icon" />
        {/* FIXED: Split brand name into separate components to apply Style 3 structural typography */}
        <span className="logo-text">
          <span className="brand-light">Care</span>
          <span className="brand-bold">EZ</span>
        </span>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* RIGHT — NAV LINKS */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>Company</Link>
        <Link to="/ManagedServices" onClick={() => setOpen(false)}>Managed Services</Link>
        <Link to="/ProfessionalServices" onClick={() => setOpen(false)}>Professional Services</Link>
        <Link to="/GreenServices" onClick={() => setOpen(false)}>Green IT & LEED</Link>
        {/* FIXED: Darkened the color from #059669 to #047857 to satisfy the Lighthouse 4.5:1 contrast audit */}
        <Link to="/shoppe" onClick={() => setOpen(false)} style={{ color: '#047857', fontWeight: 'bold' }}>Community Shoppe</Link>
        <Link to="/insights" onClick={() => setOpen(false)}>Insights</Link>
        <Link to="/careers" onClick={() => setOpen(false)}>Careers</Link>
        <Link to="/contact" onClick={() => setOpen(false)} className="cta-button">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;