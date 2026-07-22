import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ FIXED: Using direct imports instead of lazy loading bypasses Azure's asynchronous block completely
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
import CommunityShoppe from './pages/CommunityShoppe';
import ServiceDeskPlusLanding from "./pages/ServiceDeskPlusLanding";

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        {/* Your original layout styles are perfectly intact */}
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

            {/* Dedicated route for your affiliate application check */}
            <Route path="/servicedesk-plus" element={<ServiceDeskPlusLanding />} />

            {/* Single dynamic route handles ALL articles automatically */}
            <Route path="/article/:id" element={<ArticleTemplate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
