import React from 'react';
import { useNavigate } from 'react-router-dom';
import servicesImg from "../assets/ManagedServices.jpg";
// 1. Correct import position for the Helmet tool
import { Helmet } from "react-helmet-async";

function ManagedServices() {
  const navigate = useNavigate();
  
  // Kept your exact data matrix intact, while refining terms for B2B compliance checks
  const servicesList = [
    { 
      title: "24/7/365 Proactive Monitoring & Patch Management", 
      desc: "Stop performance bottlenecks and enforce automated software updates before they disrupt staff.", 
      stack: "NinjaOne, ConnectWise", 
      expert: "Baseline tuning, automated patch management & self-healing scripts." 
    },
    { 
      title: "Endpoint Management & Active Directory (Entra ID)", 
      desc: "Automated device enrollment, remote configuration compliance, and cloud identity access management.", 
      stack: "MS Intune, Microsoft Entra ID", 
      expert: "Zero Trust, Active Directory (Entra ID) & Configuration Profiles." 
    },
    { 
      title: "Automated Backup & Disaster Recovery", 
      desc: "Local and cloud-secure data redundancy with immutable storage protections.", 
      stack: "Veeam, Azure Backup", 
      expert: "RPO/RTO & Immutable storage parameters." 
    },
    { 
      title: "Helpdesk Ticketing Automation & Support", 
      desc: "Certified Tier-2 support infrastructure managing user roadblocks through advanced automation queues.", 
      stack: "HaloPSA, RMM Core", 
      expert: "ITIL incident workflows & helpdesk ticketing automation SLA profiles." 
    }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* 2. Metadata tags verified for Toronto local search queries */}
      <Helmet>
        <title>Managed IT Services & 24/7 Helpdesk | CareEZ IT Sol Toronto</title>
        <meta name="description" content="Secure your endpoints and scale your business infrastructure with CareEZ IT Sol. We provide proactive 24/7 network monitoring, Microsoft Intune management, and business disaster recovery in Toronto." />
      </Helmet>

      <h1 className="text-4xl font-extrabold mb-10 text-gray-900">Managed IT Services Toronto</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Main layout mapping layer remains completely identical to your original blueprint */}
        <div className="space-y-4">
          {servicesList.map((s, i) => (
            <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
              <div className="pt-3 border-t text-[11px] uppercase tracking-wider font-bold text-blue-800">
                <p>Stack: {s.stack}</p>
                <p>Auth: {s.expert}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col gap-6">
          <img src={servicesImg} className="rounded-xl h-[300px] object-cover shadow-md" alt="Managed IT Infrastructure Operations" />
          <button onClick={() => navigate('/contact')} className="bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
            Get an Operational Assessment
          </button>
        </div>
      </div>
    </section>
  );
}

export default ManagedServices;
