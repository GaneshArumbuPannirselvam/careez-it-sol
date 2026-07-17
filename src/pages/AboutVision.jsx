import React from 'react';
import aboutImg from "../assets/about.jpg"; 
import visionImg from "../assets/vision.jpg"; 
// 1. Correct import position for the Helmet tool
import { Helmet } from "react-helmet-async";

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
      {/* 2. Embedded structural SEO configuration matrix */}
      <Helmet>
        <title>About Our Vision | Green IT & Managed Engineering in Toronto</title>
        <meta name="description" content="Discover CareEZ IT Sol's core story and commitment to sustainable technical frameworks. We combine top-tier cybersecurity with energy-efficient Green IT models." />
      </Helmet>

      {/* SECTION 1: ABOUT */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            Bridging Managed IT Services & Systems Engineering
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            CareEZ IT SOL removes the technical friction from small-to-medium enterprise operations. We eliminate 
            complex technical gatekeeping across the Greater Toronto Area by keeping your local infrastructure layout, 
            network maps, and endpoint parameters meticulously documented and visible to you at all times.
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
        <img src={aboutImg} alt="Toronto IT Engineering Support Operations" className="w-full rounded-2xl shadow-xl object-cover h-[450px]" />
      </div>

      {/* SECTION 2: VISION */}
      <div className="bg-emerald-900 text-white p-8 md:p-12 rounded-3xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src={visionImg} 
              alt="Sustainable B2B Green IT Engineering Architecture" 
              className="w-[400px] h-[400px] object-cover rounded-2xl border-4 border-emerald-700 shadow-2xl" 
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold mb-6">Sustainable Vision for Canadian IT</h2>
            <p className="text-emerald-100 leading-relaxed mb-8">
              The next generation of corporate infrastructure deployment must balance high-availability cloud computing 
              capacity with strict Canadian environmental accountability standards. Our core systems framework integrates 
              modern data security parameters cleanly with energy-efficient <strong>LEED green IT frameworks</strong>.
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
