import React from 'react';
// 1. Correct import position for the Helmet tool
import { Helmet } from "react-helmet-async";

function CommunityShoppe() {
  // Neutralized structural link placeholder - no external data collection active
  const neutralizedFormLink = "#";

  // Re-architected into a non-priced technical proposal framework array
  const products = [
    { name: "Wireless Keyboard", status: "Concept Phase Only", desc: "Technical blueprint placeholder for comfort-focused peripheral hardware optimization profiles." },
    { name: "Rechargeable Wireless Mouse", status: "Concept Phase Only", desc: "Technical blueprint placeholder for high-accuracy optical consumer peripheral integration." },
    { name: "Noise-Cancelling Headphone", status: "Concept Phase Only", desc: "Technical blueprint placeholder for clear acoustic communication meeting infrastructure modules." }
  ];

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      {/* 2. Optimized metadata for an Inactive Structural Software Proposal */}
      <Helmet>
        <title>Community Shoppe Prototype | Careez IT Solutions Development Roadmap</title>
        <meta name="description" content="Technical concept space and feature presentation portal showcasing the upcoming Community Shoppe infrastructure proposal by Careez IT Solutions." />
      </Helmet>

      {/* Main Conceptual Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">CareEZ Community Shoppe</h1>
        <p className="text-sm font-bold tracking-widest text-amber-700 uppercase mb-3">[ TECHNICAL CONCEPT & PROPOSAL MODULE ]</p>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          This platform functions exclusively as a live technical presentation layer and localized community proposal model. 
          This domain is not open for commercial trading, does not process transactions, and does not collect consumer order details.
        </p>
        <div className="inline-block bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-bold text-sm border border-gray-300">
          ⚙️ Non-Active Development Environment
        </div>
      </div>

      {/* Non-Priced Structural Catalog Matrix */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {products.map((p, i) => (
          <div key={i} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm relative overflow-hidden">
            <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
            <p className="text-sm font-extrabold text-amber-700 my-2 bg-amber-50 inline-block px-3 py-1 rounded border border-amber-200">{p.status}</p>
            <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Neutralized Form Action Block */}
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-400">Transaction Engine Locked</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">
          Commercial paths, automated order distribution configurations, and localized Ontario sales tax invoicing layers 
          remain locked. Features will instantiate upon complete corporate onboarding execution.
        </p>
        <a 
          href={neutralizedFormLink} 
          onClick={(e) => e.preventDefault()}
          className="bg-gray-400 text-gray-200 font-bold px-8 py-4 rounded-xl cursor-not-allowed shadow-none inline-block pointer-events-none"
        >
          Order Module Disabled
        </a>
      </div>
    </section>
  );
}

export default CommunityShoppe;
