import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../App.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LEFT — LOGO */}
      <div className="logo-container">
        <img src={logo} alt="CareEZ IT SOL Logo" className="logo-icon" />
        <span className="logo-text">CareEZ IT SOL</span>
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
        <Link to="/insights" onClick={() => setOpen(false)}>Insights</Link>
        <Link to="/careers" onClick={() => setOpen(false)}>Careers</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;