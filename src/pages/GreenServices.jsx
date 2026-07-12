import React from 'react';
import { useNavigate } from 'react-router-dom';
import greenImg from "../assets/GreenInfrastructure.jpg";

function GreenServices() {
  const navigate = useNavigate();
  const greenServicesList = [
    { 
      title: "Green Data Center & Cloud Optimization", 
      desc: "Audit infrastructure to minimize cooling and power overhead.", 
      stack: "PUE/CUE Monitoring, Cloud Fabrics", 
      expert: "LEED Energy & Atmosphere (EA) Credit Optimization." 
    },
    { 
      title: "E-Waste Lifecycle Management", 
      desc: "Secure asset disposition aligned with sustainable recycling.", 
      stack: "Certified R2/e-Stewards", 
      expert: "LEED Materials & Resources (MR) Documentation." 
    },
    { 
      title: "Smart Building IT Integration", 
      desc: "IoT deployment for building-automation networks.", 
      stack: "BACnet, IoT Sensors, Zigbee", 
      expert: "LEED Indoor Environmental Quality (EQ) Standards." 
    },
    { 
      title: "LEED Project Documentation", 
      desc: "Technical reporting for energy and environmental metrics.", 
      stack: "DCIM Dashboards, Energy Audits", 
      expert: "ASHRAE/LEED Performance Verification." 
    }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="mb-10 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Bridging Tech & Sustainability</h1>
        <p className="text-lg text-gray-600">Optimizing electronic lifecycles and building energy footprints to meet LEED frameworks.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {greenServicesList.map((s, i) => (
            <div key={i} className="p-5 bg-white border border-emerald-100 rounded-xl shadow-sm hover:border-emerald-300 transition-colors">
              <h3 className="font-bold text-lg text-emerald-900">{s.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
              <div className="pt-3 border-t border-emerald-50 text-[11px] uppercase tracking-wider font-bold text-emerald-800">
                <p>Tools: {s.stack}</p>
                <p>LEED Alignment: {s.expert}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <img src={greenImg} className="rounded-xl h-[300px] object-cover" alt="Green IT" />
          <div className="p-8 bg-emerald-900 text-white rounded-xl">
            <h3 className="text-xl font-bold mb-3">Ready for the Green Standard?</h3>
            <p className="text-emerald-100 text-sm mb-6">Uncover power inefficiencies and align your IT framework with LEED certification goals.</p>
            <button onClick={() => navigate('/contact')} className="w-full bg-[#FC7713] hover:bg-[#e26205] text-white font-bold py-3 rounded-lg transition shadow-md">
              Schedule Sustainable IT Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GreenServices;