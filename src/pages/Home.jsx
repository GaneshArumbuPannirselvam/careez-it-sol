import React from 'react';
import { Link } from 'react-router-dom';
import servicesImg from '../assets/Home.webp';
import { Helmet } from "react-helmet-async";
import HomePromotions from './HomePromotions';

function Home() {
  const trustPoints = [
    { label: "Microsoft 365 Specialists", sub: "Cloud & Security", link: null },
    { label: "Canadian Compliance", sub: "PIPEDA Aligned", link: null },
    { label: "24/7 RMM Monitoring", sub: "Proactive Security", link: null },
    { label: "Green IT Certified", sub: "LEED Frameworks", link: null },
    { label: "ManageEngine Affiliate", sub: "ITSM Solutions", link: "https://zurl.to/mE5c" }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 text-left">
      <Helmet>
        <title>CareEZ IT Sol | Managed IT, PIPEDA Compliance & Green IT for Toronto SMBs</title>
        <meta name="description" content="Managed IT support, PIPEDA-aligned cybersecurity, 24/7 proactive monitoring, LEED-aligned Green IT consulting, and ManageEngine ITSM solutions for Toronto small businesses." />
      </Helmet>

      {/* Hero Section */}
      <div className="text-center py-16 bg-gradient-to-br from-green-900 to-emerald-950 text-white rounded-2xl p-8 mb-12 shadow-xl">
        <div className="inline-block bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-emerald-700/50">
          🇨🇦 Toronto-Based • PIPEDA Aligned • Green IT Focused
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Predictable, Zero-Stress IT Support
        </h1>
        <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-8 leading-relaxed">
          We secure your business endpoints, ensure Canadian privacy compliance, monitor systems 24/7, and optimize infrastructure using sustainable Green IT principles.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
        >
          Get Your IT Assessment
        </Link>
      </div>

      {/* Trust Grid (5 Pillars) */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
        {trustPoints.map((p, i) => (
          p.link ? (
            <a 
              key={i} 
              href={p.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 bg-white rounded-xl border border-gray-100 shadow-xs text-center flex flex-col justify-center hover:border-emerald-300 hover:shadow-md transition-all group"
            >
              <p className="font-bold text-gray-900 text-sm group-hover:text-emerald-800 transition-colors">{p.label}</p>
              <p className="text-[10px] uppercase text-emerald-700 font-bold tracking-wider mt-1">{p.sub}</p>
            </a>
          ) : (
            <div key={i} className="p-4 bg-white rounded-xl border border-gray-100 shadow-xs text-center flex flex-col justify-center">
              <p className="font-bold text-gray-900 text-sm">{p.label}</p>
              <p className="text-[10px] uppercase text-emerald-700 font-bold tracking-wider mt-1">{p.sub}</p>
            </div>
          )
        ))}
      </div>

      {/* Quick Pitch Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-xs border border-gray-100 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Enterprise-Grade Operations. Small Business Care.</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most businesses feel stuck in an endless cycle of technical firefighting. CareEZ IT Sol breaks that loop. We monitor endpoints 24/7, patch vulnerabilities immediately, and keep IT workflows transparently managed.
          </p>
          <Link to="/ManagedServices" className="text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1">
            Explore our service options →
          </Link>
        </div>
        <div>
          <img src={servicesImg} alt="Managed Technical Support Services" className="w-full h-64 object-cover rounded-xl shadow-md" />
        </div>
      </div>

      {/* Dual Highlights: Canadian Privacy & Green IT */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        
        {/* Canadian Privacy & Compliance */}
        <div className="bg-emerald-50/50 border border-emerald-100 p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Canadian Data Governance</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-3">PIPEDA & Local Privacy Standards</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              For small and mid-sized businesses across Ontario, protecting customer data isn't optional. We structure cloud environments, access controls, and device policies to align directly with <strong>PIPEDA requirements</strong>.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-2 text-xs text-gray-700 font-medium pt-2 border-t border-emerald-100">
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-700 font-bold">✓</span> Canadian Data Residency
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-700 font-bold">✓</span> M365 Access Security
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-700 font-bold">✓</span> Endpoint Audit Readiness
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-700 font-bold">✓</span> Transparent Privacy Controls
            </li>
          </ul>
        </div>

        {/* Green IT & Sustainability Frameworks */}
        <div className="bg-emerald-50/50 border border-emerald-100 p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Sustainable Technology</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-3">Green IT & LEED Frameworks</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Lower your operational footprint and energy costs. We design cloud migrations, server consolidation, and hardware lifecycle strategies aligned with <strong>LEED energy and waste reduction principles</strong>.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-2 text-xs text-gray-700 font-medium pt-2 border-t border-emerald-100">
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-700 font-bold">✓</span> Cloud Energy Optimization
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-700 font-bold">✓</span> E-Waste Lifecycle Planning
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-700 font-bold">✓</span> LEED Alignment Strategies
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-emerald-700 font-bold">✓</span> Power-Efficient Endpoints
            </li>
          </ul>
        </div>

      </div>

      {/* ITSM Callout Block */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-left mb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <a 
              href="https://zurl.to/mE5c" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-bold text-emerald-700 uppercase tracking-wider hover:underline inline-block"
            >
              ManageEngine Affiliate Partner
            </a>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">Still Running Support Out of a Shared Inbox?</h3>
            <p className="text-gray-600 text-sm mt-1 max-w-xl">
              Check out our hands-on review and configuration guide for ManageEngine ServiceDesk Plus — built for growing Toronto teams scaling off email support.
            </p>
          </div>
          <div>
            <Link
              to="/servicedeskpluslanding"
              className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm py-3.5 px-6 rounded-xl transition-colors shadow-xs cursor-pointer whitespace-nowrap"
            >
              Read the Review & Guide <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ManageEngine Banners & PDF Resources Section */}
      <HomePromotions />

    </div>
  );
}

export default Home;