import { Link } from "react-router-dom";
import servicesImg from "../assets/Home.jpg";

function Home() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gradient-to-br from-green-900 to-emerald-950 text-white rounded-2xl p-8 mb-12 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Predictable, Zero-Stress IT Support
        </h1>
        <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-8 leading-relaxed">
          We secure your business endpoints, scale your cloud infrastructure, and maintain healthy networks so your team can focus on growth.
        </p>
        <Link to="/contact" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5">
          Get Your IT Assessment
        </Link>
      </div>

      {/* Quick Pitch Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Enterprise-Grade Operations. Small Business Care.</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most businesses feel stuck in an endless cycle of technical firefighting and unpredictable bills. CareEZ IT SOL breaks that loop. We monitor your endpoints actively, patch vulnerabilities immediately, and keep system configurations transparently documented.
          </p>
          <Link to="/ManagedServices" className="text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1">
            Explore our service options →
          </Link>
        </div>
        <div>
          <img src={servicesImg} alt="Managed Technical Support Services" className="w-full h-64 object-cover rounded-xl shadow-md" />
        </div>
      </div>
    </div>
  );
}

export default Home;