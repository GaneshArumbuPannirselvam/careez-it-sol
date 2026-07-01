import banner from "../assets/banner.png";

export default function Hero() {
  return (
    <header
      className="text-center"
      style={{
        background: "radial-gradient(circle, #fdfdfd 0%, #e9e9e9 100%)",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <img
        src={banner}
        alt="CareEZ IT SOL Banner"
        style={{
          width: "70%",
          maxWidth: "650px",
          marginBottom: "25px",
          objectFit: "contain",
        }}
      />

      <h1
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "2.4rem",
          fontWeight: 600,
          color: "#0A3F1F",
          marginBottom: "10px",
          letterSpacing: "0.5px",
        }}
      >
        Tech Solutions with a Human Touch
      </h1>

      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "1rem",
          fontWeight: 500,
          color: "#0A3F1F",
          letterSpacing: "0.25rem",
          marginBottom: "0",
          textTransform: "uppercase",
        }}
      >
        Sales | IT Services | Network Solutions | Green Consulting
      </p>
    </header>
  );
}
