import React from 'react';
import { Link } from 'react-router-dom';
// 1. Imports your verified social icon component
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <footer style={{
      marginTop: "auto",
      padding: "15px 5%", // Clean side spacing
      fontSize: "14px",
      color: "#0A3F1F",
      /* Reduced the borderTop line thickness down to a very clean look */
      borderTop: "0.5px solid #ccc",
      background: "#ffffff",
      
      /* Flexbox row alignment rules */
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "15px"
    }}>
      
      {/* LEFT SIDE: Keeps your precise text elements grouped horizontally */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
        <span>© 2026 CareEZ IT SOL — All Rights Reserved</span>
        <Link to="/transparency" className="text-sm hover:underline" style={{ color: "#0A3F1F", textDecoration: "none" }}>
          Transparency & Compliance
        </Link>
      </div>

      {/* RIGHT SIDE: Places your social media icons cleanly inline on the right */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <SocialLinks />
      </div>

    </footer>
  );
}

export default Footer;
