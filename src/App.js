import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutVision from "./pages/AboutVision"; // Merged Page
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import ManagedServices from "./pages/ManagedServices";
import ProfessionalServices from "./pages/ProfessionalServices";
import GreenServices from "./pages/GreenServices";
import Insights from "./pages/Insights";
import ArticleTemplate from "./pages/ArticleTemplate";
import Transparency from "./pages/Transparency";

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />

        <main style={{ flex: 1, padding: "20px" }} className="bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Merged About & Vision Route */}
            <Route path="/about" element={<AboutVision />} />
            
            {/* Redirect old vision path to the new merged page */}
            <Route path="/vision" element={<Navigate to="/about" replace />} />
            
            <Route path="/ManagedServices" element={<ManagedServices />} />
            <Route path="/ProfessionalServices" element={<ProfessionalServices />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/GreenServices" element={<GreenServices />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/transparency" element={<Transparency />} />
            
            {/* Article Routes */}
            <Route path="/article/data-silos" element={<ArticleTemplate />} />
            <Route path="/article/data-security" element={<ArticleTemplate />} />
            <Route path="/article/sales-automation" element={<ArticleTemplate />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;