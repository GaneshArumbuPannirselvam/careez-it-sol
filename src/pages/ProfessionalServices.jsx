import React from 'react';
import { useNavigate } from 'react-router-dom';
import servicesImg from "../assets/ProfessionalServices.jpg";

function ProfessionalServices() {
  const navigate = useNavigate();
  const projectsList = [
    { title: "Cloud Migrations", desc: "Transition legacy to M365/Azure.", stack: "Azure Migrate", expert: "Tenant-to-tenant logic." },
    { title: "Network Redesign", desc: "High-speed infrastructure deployment.", stack: "Ubiquiti/Fortinet", expert: "VLAN & QoS segmentation." },
    { title: "Privileged Access Management", desc: "Audit and lock down permissions.", stack: "Entra ID (PIM)", expert: "MFA Hardening & IAM." },
    { title: "Hardware Procurement", desc: "Lifecycle and device management.", stack: "Autopilot", expert: "Zero-Touch Imaging." }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-10">Strategic IT Consulting</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {projectsList.map((p, i) => (
            <div key={i} className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
              <h3 className="font-bold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{p.desc}</p>
              <div className="pt-3 border-t text-[11px] uppercase tracking-wider font-bold text-gray-800">
                <p>Stack: {p.stack}</p>
                <p>Auth: {p.expert}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <img src={servicesImg} className="rounded-xl h-[300px] object-cover" alt="Consulting" />
          <button onClick={() => navigate('/contact')} className="bg-gray-900 text-white font-bold py-3 rounded-xl">
            Scope Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
export default ProfessionalServices;