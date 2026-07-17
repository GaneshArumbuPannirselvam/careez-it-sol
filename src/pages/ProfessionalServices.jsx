import React from 'react';
import { useNavigate } from 'react-router-dom';
import servicesImg from "../assets/ProfessionalServices.jpg";
// 1. Correct import position for the Helmet tool
import { Helmet } from "react-helmet-async";

function ProfessionalServices() {
  const navigate = useNavigate();
  
  // Kept your exact data loop structure while optimizing copy for compliance audits
  const projectsList = [
    { 
      title: "Cloud Migrations & Active Directory (Entra ID)", 
      desc: "Transition legacy structures directly into secure M365 and Azure environments.", 
      stack: "Azure Migrate, Active Directory (Entra ID)", 
      expert: "Tenant-to-tenant authentication logic & identity mapping." 
    },
    { 
      title: "Network Redesign & Lifecycle Patch Management", 
      desc: "High-speed network deployments hardened with centralized firmware patch management.", 
      stack: "Ubiquiti/Fortinet, Patch Engines", 
      expert: "VLAN configurations, QoS segmentation & vulnerability hardening." 
    },
    { 
      title: "Privileged Access Management & Helpdesk Integrations", 
      desc: "Audit permissions and hook access levels natively into helpdesk ticketing automation platforms.", 
      stack: "Entra ID (PIM), Service Desks", 
      expert: "MFA Hardening, IAM governance & automated ticketing validation." 
    },
    { 
      title: "Hardware Procurement & Endpoint Imaging", 
      desc: "Full device lifecycle management tied to compliance patch management systems.", 
      stack: "Autopilot, Intune Profiles", 
      expert: "Zero-Touch corporate configuration imaging." 
    }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* 2. Structural metadata tag injection point */}
      <Helmet>
        <title>Professional IT Consulting & Project Management | CareEZ IT Sol Toronto</title>
        <meta name="description" content="Accelerate your technology infrastructure with strategic IT consulting from CareEZ IT Sol. We handle cloud migrations, corporate network redesigns, access management, and hardware procurement in Toronto." />
      </Helmet>

      <h1 className="text-4xl font-extrabold mb-10 text-gray-900">Strategic IT Consulting GTA</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Component map boundaries left fully unchanged to match your local design layout */}
        <div className="space-y-4">
          {projectsList.map((p, i) => (
            <div key={i} className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
              <h3 className="font-bold text-lg text-gray-900">{p.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{p.desc}</p>
              <div className="pt-3 border-t text-[11px] uppercase tracking-wider font-bold text-gray-800">
                <p>Stack: {p.stack}</p>
                <p>Auth: {p.expert}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col gap-6">
          <img src={servicesImg} className="rounded-xl h-[300px] object-cover shadow-md" alt="Strategic Technical Consulting Services" />
          <button onClick={() => navigate('/contact')} className="bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-black transition-colors shadow-sm">
            Scope Your Project
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalServices;
