import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import ManagedServices from "./pages/ManagedServices";
import ProfessionalServices from "./pages/ProfessionalServices";
import GreenServices from "./pages/GreenServices";

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />

        <main style={{ flex: 1, padding: "20px" }} className="bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ManagedServices" element={<ManagedServices />} />
            <Route path="/ProfessionalServices" element={<ProfessionalServices />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/GreenServices" element={<GreenServices />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;