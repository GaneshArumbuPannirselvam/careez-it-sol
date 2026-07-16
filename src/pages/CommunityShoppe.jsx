import React from 'react';
// 1. Correct import position for the Helmet tool
import { Helmet } from "react-helmet-async";

function CommunityShoppe() {
  // PASTE YOUR LINK BELOW INSIDE THE QUOTES
  const tallyFormLink = "https://share-na3.hsforms.com/14OdDp8sKTJqM1X_XHeonwA5oh1jc";

  const products = [
    { name: "Wireless Keyboard", price: "$15", desc: "Comfort-focused design for long hours." },
    { name: "Rechargable Wireless Mouse", price: "$10", desc: "High-accuracy optical sensor." },
    { name: "Noise-Cancelling Headphone", price: "$20", desc: "Crystal clear audio for meetings." }
  ];

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      {/* 2. Correct metadata insertion point inside the parent section container */}
      <Helmet>
        <title>Community Shoppe | Affordable Local IT Hardware in Toronto</title>
        <meta name="description" content="Browse the CareEZ Community Shoppe for affordable wireless keyboards, mice, and noise-cancelling headphones. Free local delivery in Toronto and senior citizen discounts." />
      </Helmet>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">CareEZ Community Shoppe</h1>
        <p className="text-lg text-gray-600 mb-6">Affordable hardware, delivered to your door. Free delivery for local residents, with an extra 10% discount for our senior citizens.</p>
        <div className="inline-block bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full font-bold text-sm">
          📍 Serving Toronto Local Community
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {products.map((p, i) => (
          <div key={i} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
            <p className="text-2xl font-extrabold text-emerald-700 my-2">{p.price}</p>
            <p className="text-sm text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* The Order Form Button */}
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Order?</h2>
        <p className="text-gray-600 mb-6">Select your item using the form below. We will contact you to confirm delivery.</p>
        <a 
          href={tallyFormLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl shadow-md transition inline-block"
        >
          Open Order Form
        </a>
      </div>
    </section>
  );
}

export default CommunityShoppe;
