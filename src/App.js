import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Direct imports
import Home from "./pages/Home";
import AboutVision from "./pages/AboutVision";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import ManagedServices from "./pages/ManagedServices";
import ProfessionalServices from "./pages/ProfessionalServices";
import GreenServices from "./pages/GreenServices";
import Insights from "./pages/Insights";
import ArticleTemplate from "./pages/ArticleTemplate";
import Transparency from "./pages/Transparency";
import CommunityShoppe from "./pages/CommunityShoppe";
import ServiceDeskPlusLanding from "./pages/ServiceDeskPlusLanding";

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1, padding: "20px" }} className="bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutVision />} />
            <Route path="/vision" element={<Navigate to="/about" replace />} />
            <Route path="/ManagedServices" element={<ManagedServices />} />
            <Route path="/ProfessionalServices" element={<ProfessionalServices />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/GreenServices" element={<GreenServices />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/shoppe" element={<CommunityShoppe />} />
            <Route path="/transparency" element={<Transparency />} />

            {/* Main ServiceDesk Plus route */}
            <Route path="/servicedeskpluslanding" element={<ServiceDeskPlusLanding />} />

            {/* Redirect alias so /servicedesk-plus also works */}
            <Route path="/servicedesk-plus" element={<Navigate to="/servicedeskpluslanding" replace />} />

            {/* Single dynamic route for articles */}
            <Route path="/article/:id" element={<ArticleTemplate />} />

            {/* 404 Fallback Route (prevents blank screen on wrong URLs) */}
            <Route
              path="*"
              element={
                <div style={{ textAlign: "center", padding: "80px 20px" }}>
                  <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1F2937" }}>
                    404 - Page Not Found
                  </h1>
                  <p style={{ color: "#4B5563", marginTop: "10px" }}>
                    The path you navigated to does not exist.
                  </p>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;