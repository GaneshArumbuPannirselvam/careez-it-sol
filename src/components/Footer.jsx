import React from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0A3F1F, #1A5A35)",
        paddingTop: "40px",
        paddingBottom: "40px",
        color: "white",
        textAlign: "center",
      }}
    >
      <img
        src={logo}
        alt="CareEZ IT SOL Logo"
        style={{
          width: "80px",
          marginBottom: "20px",
          objectFit: "contain",
        }}
      />

      <h5
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          letterSpacing: "1px",
          marginBottom: "10px",
        }}
      >
        CareEZ IT SOL
      </h5>

      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "0.95rem",
          opacity: 0.85,
          marginBottom: "30px",
        }}
      >
        Tech Solutions with a Human Touch · Powering your future responsibly
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <img
          src="https://source.unsplash.com/100x100/?technology"
          alt="Technology"
          className="rounded-circle shadow-sm"
        />
        <img
          src="https://source.unsplash.com/100x100/?network"
          alt="Network"
          className="rounded-circle shadow-sm"
        />
        <img
          src="https://source.unsplash.com/100x100/?green-energy"
          alt="Green Energy"
          className="rounded-circle shadow-sm"
        />
      </div>

      <p style={{ fontSize: "0.8rem", opacity: 0.7 }}>
        © {new Date().getFullYear()} CareEZ IT SOL · All rights reserved
      </p>
    </footer>
  );
}
