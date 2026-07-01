import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Vision from "./pages/Vision";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import { BsCheckCircleFill } from "react-icons/bs"; // <--- 1. Paste your icon import here!
import React, { useState } from 'react';
import './App.css';
import myLogo from './assets/logo.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo-container">
          <img src={myLogo} alt="CareEZ IT SOL Logo" className="logo-icon" />
          <span className="logo-text">CareEZ IT SOL</span>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
        <button className="menu-btn" onClick={toggleMenu} aria-label="Menu">☰</button>
      </nav>

      <header id="home" className="hero-section">
        <img src={myLogo} alt="Logo" className="logo-icon-large" />
        <h1 className="main-heading">CareEZ IT SOL</h1>
        <p className="tagline">SALES | IT SERVICES | NETWORK SOLUTIONS | GREEN CONSULTING</p>
        <a href="#contact" className="cta-button">Get a Free Consultation</a>
      </header>

      <section id="about" className="content-section bg-light">
        <div className="about-container">
          <h2>Welcome to Careez IT Sol</h2>
          <p>Where we redefine the technology experience by blending "Care" with "Ease." Our mission is to take the complexity out of the digital landscape, providing seamless, high-performance IT solutions that allow you to focus on growing your business. We don’t just fix systems; we build partnerships rooted in trust, security, and sustainability.</p>
        </div>
      </section>

      <section id="services" className="content-section">
        <div className="section-header"><h2>Our Core Expertise</h2></div>
        <div className="services-grid">
          {[
            { title: "Managed IT Services", desc: "Proactive support and 24/7 monitoring for peak efficiency." },
            { title: "Cybersecurity", desc: "Multi-layered protocols to safeguard your data and digital assets." },
            { title: "Network Solutions", desc: "Scalable, high-speed infrastructure tailored to modern business." },
            { title: "Green IT & LEED", desc: "Sustainable innovation focusing on energy efficiency and eco-friendly data management." },
            { title: "Strategic Sales", desc: "Trusted procurement of premium hardware and software at the right value." }
          ].map((s, i) => (
            <div key={i} className="service-card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="content-section bg-green text-white">
        <div className="section-header text-white"><h2>Ready to Optimize Your IT?</h2></div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="How can we help you?" rows="5"></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      <footer className="footer-section">
        <p>© 2026 CareEZ IT SOL · Powering your future, responsibly and with ease.</p>
      </footer>
    </div>
  );
}

export default App;