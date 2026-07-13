import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{
      marginTop: "auto",
      padding: "20px 0",
      textAlign: "center",
      fontSize: "14px",
      borderTop: "1px solid #ccc",
      color: "#0A3F1F"
    }}>
      © 2026 CareEZ IT SOL — All Rights Reserved
      <Link to="/transparency" className="text-sm hover:underline">
        Transparency & Compliance
      </Link>
    </footer>
  );
}

export default Footer;
