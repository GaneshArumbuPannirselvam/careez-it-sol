import React from 'react';
import { useNavigate } from 'react-router-dom';
import servicesImg from "../assets/ManagedServices.jpg";

function ManagedServices() {
  const navigate = useNavigate();
  const servicesList = [
    { title: "24/7/365 Proactive Monitoring", desc: "Stop performance bottlenecks before they disrupt staff.", stack: "NinjaOne, ConnectWise", expert: "Baseline tuning & self-healing scripts." },
    { title: "Endpoint Management (Intune)", desc: "Automated enrollment and remote compliance management.", stack: "MS Intune, Autopilot", expert: "Zero Trust & Configuration Profiles." },
    { title: "Automated Backup & Disaster Recovery", desc: "Local and cloud-secure data redundancy.", stack: "Veeam, Azure Backup", expert: "RPO/RTO & Immutable storage." },
    { title: "Unlimited Helpdesk Support", desc: "Certified Tier-2 support for daily roadblocks.", stack: "HaloPSA, RMM", expert: "ITIL incident & SLA management." }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-10">Managed IT Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {servicesList.map((s, i) => (
            <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg">{s.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
              <div className="pt-3 border-t text-[11px] uppercase tracking-wider font-bold text-blue-800">
                <p>Stack: {s.stack}</p>
                <p>Auth: {s.expert}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <img src={servicesImg} className="rounded-xl h-[300px] object-cover" alt="Managed IT" />
          <button onClick={() => navigate('/contact')} className="bg-blue-600 text-white font-bold py-3 rounded-xl">
            Get an Operational Assessment
          </button>
        </div>
      </div>
    </section>
  );
}
export default ManagedServices;