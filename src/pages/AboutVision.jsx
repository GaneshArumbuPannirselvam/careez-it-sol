import React from 'react';
import aboutImg from "../assets/about.jpg"; 
import visionImg from "../assets/vision.jpg"; 

function AboutVision() {
  const promises = [
    { title: "Proactive Auditing", stack: "RMM/Log Analytics", expert: "Predictive failure analysis & vulnerability scanning." },
    { title: "Agile Tracking", stack: "HaloPSA/ITIL", expert: "Structured issue lifecycle & SLA performance." },
    { title: "Total Transparency", stack: "Entra ID/M365", expert: "Full client ownership of identity & configuration." }
  ];

  const greenVision = [
    { title: "Sustainable Lifecycle", stack: "Hardware Profiling", expert: "Asset longevity & e-waste reduction." },
    { title: "Eco-Efficient Standards", stack: "Low-Power Configs", expert: "Energy-star benchmarking & footprint reduction." }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto space-y-20">
      {/* SECTION 1: ABOUT */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Our Core Story</h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            CareEZ IT SOL bridges the gap between enterprise-grade systems engineering and small-to-medium enterprise operations. We remove technical gatekeeping by keeping your IT assets meticulously mapped, clear, and visible to you at all times.
          </p>
          <div className="grid gap-4">
            {promises.map((p, i) => (
              <div key={i} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-blue-200 transition-colors">
                <h4 className="font-bold text-gray-900">{p.title}</h4>
                <div className="text-[11px] uppercase text-blue-800 font-bold mt-1">
                  Stack: {p.stack} | Auth: {p.expert}
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src={aboutImg} alt="About Us" className="w-full rounded-2xl shadow-xl object-cover h-[450px]" />
      </div>

      {/* SECTION 2: VISION */}
      <div className="bg-emerald-900 text-white p-8 md:p-12 rounded-3xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src={visionImg} 
              alt="Our Vision for Green IT" 
              className="w-[400px] h-[400px] object-cover rounded-2xl border-4 border-emerald-700 shadow-2xl" 
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold mb-6">Vision for Green IT</h2>
            <p className="text-emerald-100 leading-relaxed mb-8">
              The next generation of infrastructure engineering must balance high-availability cloud capacity with environmental accountability. Our design framework integrates technical efficiency with eco-conscious standards.
            </p>
            <div className="space-y-4">
              {greenVision.map((g, i) => (
                <div key={i} className="p-5 bg-emerald-800/50 border border-emerald-700 rounded-xl">
                  <h4 className="font-bold">{g.title}</h4>
                  <div className="text-[11px] uppercase text-emerald-300 font-bold mt-1">
                    Stack: {g.stack} | Auth: {g.expert}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutVision;