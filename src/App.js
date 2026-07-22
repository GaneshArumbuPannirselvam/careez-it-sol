import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ OPTIMIZED: Lazy loading all page views splits your heavy JavaScript bundle into tiny chunks
const Home = lazy(() => import("./pages/Home"));
const AboutVision = lazy(() => import("./pages/AboutVision"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const ManagedServices = lazy(() => import("./pages/ManagedServices"));
const ProfessionalServices = lazy(() => import("./pages/ProfessionalServices"));
const GreenServices = lazy(() => import("./pages/GreenServices"));
const Insights = lazy(() => import("./pages/Insights"));
const ArticleTemplate = lazy(() => import("./pages/ArticleTemplate"));
const Transparency = lazy(() => import("./pages/Transparency"));
const CommunityShoppe = lazy(() => import("./pages/CommunityShoppe"));
const ServiceDeskPlusLanding = lazy(() => import("./pages/ServiceDeskPlusLanding"));

// Standard loading placeholder component rendered while lazy chunks pull from Azure pools
const LoadingScreen = () => (
  <div className="flex items-center justify-center p-12 text-gray-500 font-semibold text-center bg-gray-50" style={{ flex: 1 }}>
    Loading Secure CareEZ Node...
  </div>
);

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        {/* Note: Kept your original bg-gray-50 layout styles perfectly intact */}
        <main style={{ flex: 1, padding: "20px", display: "flex", flexDirection: "column" }} className="bg-gray-50">
          {/* ✅ CRUCIAL: Suspense catches async route loads and ensures zero rendering layout shifts */}
          <Suspense fallback={<LoadingScreen />}>
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

              {/* 2. Added the dedicated, clean route for your affiliate application check */}
              <Route path="/servicedesk-plus" element={<ServiceDeskPlusLanding />} />

              {/* Single dynamic route handles ALL articles automatically */}
              <Route path="/article/:id" element={<ArticleTemplate />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
