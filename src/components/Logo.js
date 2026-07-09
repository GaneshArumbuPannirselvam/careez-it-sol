import logo from "../assets/logo.png";

function Logo() {
  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <img
        src={logo}
        alt="CareEZ IT SOL Logo"
        style={{ width: "120px", marginBottom: "10px" }}
      />

      <h1 className="logo-heading">CareEZ IT SOL</h1>


      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
          fontSize: "1rem",
          color: "#0A3F1F",
          letterSpacing: "0.15em"
        }}
      >
        SALES | IT SERVICES | NETWORK SOLUTIONS | GREEN CONSULTING
      </p>
    </div>
  );
}

export default Logo;
