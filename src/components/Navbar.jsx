import React from "react";
import logo from "../assets/logo.png";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logo}
            alt="CareEZ IT SOL Logo"
            style={{
              width: "65px",
              height: "auto",
              marginRight: "12px",
              objectFit: "contain"
            }}
          />
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              letterSpacing: "0.5px"
            }}
          >
            CareEZ IT SOL
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="/vision">Vision</a></li>
            <li className="nav-item"><a className="nav-link" href="/careers">Careers</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
          </ul>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
