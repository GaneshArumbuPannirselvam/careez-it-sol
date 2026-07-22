import React from 'react';
import { Link } from 'react-router-dom';
import servicesImg from '../assets/Home.webp';
// 1. Correct import position for the Helmet tool
import { Helmet } from "react-helmet-async";

function Home() {
  const trustPoints = [
    { label: "Microsoft 365 Specialists", sub: "Cloud & Security" },
    { label: "Canadian Compliance", sub: "PIPEDA Aligned" },
    { label: "24/7 Monitoring", sub: "Proactive Security" },
    { label: "Green IT Certified", sub: "LEED Frameworks" }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 text-left">
      {/* 2. Correct metadata insertion point inside the parent container */}
      <Helmet>
        <title>CareEZ IT Sol | Managed IT & Cybersecurity for Toronto SMBs</title>
        <meta name="description" content="Managed IT support, cybersecurity, and green IT consulting built for Toronto small businesses." />
      </Helmet>

      {/* Hero Section */}
      <div className="text-center py-16 bg-gradient-to-br from-green-900 to-emerald-950 text-white rounded-2xl p-8 mb-12 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Predictable, Zero-Stress IT Support
        </h1>
        <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-8 leading-relaxed">
          We secure your business endpoints, scale your cloud infrastructure, and maintain healthy networks so your team can focus on growth.
        </p>
        {/* FIXED: Darkened the background utility classes to emerald-700 / emerald-800 to resolve the Lighthouse color contrast audit failure */}
        <Link to="/contact" className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5">
          Get Your IT Assessment
        </Link>
      </div>

      {/* Trust Grid (The "Verify" layer) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {trustPoints.map((p, i) => (
          <div key={i} className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm text-center">
            <p className="font-bold text-gray-900 text-sm">{p.label}</p>
            <p className="text-[10px] uppercase text-emerald-700 font-bold tracking-wider">{p.sub}</p>
          </div>
        ))}
      </div>

      {/* Quick Pitch Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Enterprise-Grade Operations. Small Business Care.</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most businesses feel stuck in an endless cycle of technical firefighting. CareEZ IT SOL breaks that loop. We monitor endpoints actively, patch vulnerabilities immediately, and keep configurations transparently documented.
          </p>
          <Link to="/ManagedServices" className="text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1">
            Explore our service options →
          </Link>
        </div>
        <div>
          <img src={servicesImg} alt="Managed Technical Support Services" className="w-full h-64 object-cover rounded-xl shadow-md" />
        </div>
      </div>

      {/* ITSM Callout Block */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-left">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Enterprise Tools</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">Still Running Support Out of a Shared Inbox?</h3>
            <p className="text-gray-600 text-sm mt-1 max-w-xl">
              We took a hands-on look at ManageEngine ServiceDesk Plus — what it does well, where it's clunky,
              and whether it's actually worth it for a growing Toronto business.
            </p>
          </div>
          <div>
            <Link
              to="/servicedesk-plus"
              className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm py-3.5 px-6 rounded-xl transition-colors shadow-xs cursor-pointer whitespace-nowrap"
            >
              Read the Full Review <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Home;