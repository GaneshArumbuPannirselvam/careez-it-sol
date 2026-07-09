import React from "react";
import "../App.css";
import logo from "../assets/logo.png"; // use your uploaded logo

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="CareEZ IT SOL Logo" />
      </div>
      <nav className="nav">
        <a href="#overview">Overview</a>
        <a href="#services">Services</a>
        <a href="#vision">Vision</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
