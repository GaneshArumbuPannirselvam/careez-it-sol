import React from 'react';
import { useNavigate } from 'react-router-dom';
import greenImg from "../assets/GreenInfrastructure.jpg";
import { Helmet } from "react-helmet-async";

function GreenServices() {
  const navigate = useNavigate();

  const greenServicesList = [
    { 
      category: "Energy Auditing & Verification",
      title: "Commercial Utility Cost & Carbon Data Audits", 
      action: "We analyze historical smart-meter power records, water consumption files, and natural gas tracking data to isolate billing anomalies, peak-load penalties, and carbon overhead metrics.", 
      tools: "Smart-Meter Interval Logs, Utility Billing Portals, Excel Data Models", 
      standards: "Energy Star Portfolio Manager, ASHRAE Level 1 Audits, Toronto Green Standard (TGS)"
    },
    { 
      category: "Compliance & Reporting",
      title: "Corporate ESG Data Reporting & Documentation", 
      action: "We act as your independent compliance officer to gather raw energy profiles, calculate your firm's annual greenhouse gas footprints, and format clean, investor-grade reporting frameworks.", 
      tools: "GHG Protocol Calculators, Compliance Tracking Sheets, ESG Data Matrixing", 
      standards: "GRI Framework, ISSB/TCFD Disclosures, Ontario Environmental Protection Act"
    },
    { 
      category: "Building Certifications",
      title: "LEED & Green Building Certification Handling", 
      action: "We manage the administrative submission pipeline for properties. Our consultancy compiles design blueprints, electrical schematics, and equipment procurement invoices to clear point thresholds.", 
      tools: "LEED Online Dashboard, Project Credit Calculators, Equipment Submittal Files", 
      standards: "USGBC/CaGBC LEED v4.1 (BD+C / O+M), WELL Building Standards"
    },
    { 
      category: "Operations & Procurement",
      title: "Smart Building Procurement & Hardware Advisory", 
      action: "We evaluate third-party technology vendor proposals, audit software automation contracts, and manage Request for Proposal (RFP) documentation for automated building infrastructure.", 
      tools: "RFP Evaluation Frameworks, Contract SLA Matrices, Vendor Assessment Tools", 
      standards: "BACnet Interoperability Protocols, ISO 50001 (Energy Management)"
    }
  ];

  const highlights = [
    { label: "LEED Frameworks", sub: "Building Certifications" },
    { label: "ESG Data Analysis", sub: "Corporate Governance" },
    { label: "Ontario Eco-Codes", sub: "Statutory Regulations" },
    { label: "Utility Cost Audits", sub: "Financial Optimization" }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto text-left">
      <Helmet>
        <title>Green Infrastructure & Energy Data Compliance | CareEZ IT Sol Toronto</title>
        <meta name="description" content="Independent commercial sustainability consulting in Toronto. Specializing in utility data audits, LEED project documentation, and Ontario environmental compliance reporting." />
      </Helmet>

      {/* Corporate Positioning Header */}
      <div className="mb-12 max-w-4xl">
        <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
          Independent Infrastructure Consulting
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 mt-3 tracking-tight">
          Sustainable Energy Data Management & Compliance
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We bridge technical real estate operations with sustainability regulations. Our independent data auditing, 
          compliance tracking, and contract verification ensure your property systematically lowers utility overhead, 
          recovers hidden billing losses, and satisfies municipal Ontario eco-codes.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        
        {/* Service Matrix: Scan & Verify Configuration */}
        <div className="lg:col-span-2 space-y-6">
          {greenServicesList.map((s, i) => (
            <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-xs hover:border-emerald-200 hover:shadow-md transition-all">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                {s.category}
              </span>
              <h3 className="font-extrabold text-xl text-gray-900 mb-3 mt-2">{s.title}</h3>
              
              <div className="space-y-2.5 text-sm border-l-2 border-emerald-500 pl-4">
                <p className="text-gray-700"><strong>Our Action:</strong> {s.action}</p>
                <p className="text-gray-600 text-xs"><strong>Operational Tools:</strong> <span className="text-emerald-900 font-mono bg-gray-50 px-1 py-0.5 rounded">{s.tools}</span></p>
                <p className="text-gray-600 text-xs"><strong>Compliance Standards:</strong> <span className="text-gray-900 font-semibold">{s.standards}</span></p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Column */}
        <div className="space-y-6">
          <img src={greenImg} className="rounded-2xl h-[280px] w-full object-cover shadow-md" alt="Green Facility Infrastructure" />
          
          <div className="p-8 bg-gradient-to-br from-emerald-950 to-green-900 text-white rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Optimize Property Overhead</h3>
            <p className="text-emerald-100 text-sm mb-6 leading-relaxed">
              Uncover baseline utility billing errors, eliminate asset energy waste, and clear municipal environmental documentation requirements with a lean, specialized workflow.
            </p>
            <button onClick={() => navigate('/contact')} className="w-full bg-[#FC7713] hover:bg-[#e26205] text-white font-bold py-3.5 rounded-xl transition shadow-md">
              Request Energy Data Review
            </button>
          </div>
        </div>

      </div>

      {/* Core Competencies Quick Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {highlights.map((p, i) => (
          <div key={i} className="p-4 bg-white rounded-xl border border-gray-100 shadow-xs text-center">
            <p className="font-bold text-gray-900 text-sm">{p.label}</p>
            <p className="text-[10px] uppercase text-emerald-700 font-bold tracking-wider">{p.sub}</p>
          </div>
        ))}
      </div>

      {/* Retainer Engagement Layer */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">GTA Commercial Asset Reviews</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">Audit Your Property Energy Profiles</h3>
            <p className="text-gray-600 text-sm mt-1 max-w-xl">
              We leverage your historical electricity interval data, gas billing registers, and utility logs to construct a clear efficiency and compliance report.
            </p>
          </div>
          <div>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm py-3.5 px-6 rounded-xl transition-colors shadow-xs whitespace-nowrap"
            >
              Get Entry-Level Baseline Audit <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default GreenServices;
