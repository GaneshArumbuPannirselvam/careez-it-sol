import React from 'react';
import { Helmet } from "react-helmet-async";

function CommunityShoppe() {
  const products = [
    // --- 1. PHYSICAL HARDWARE SECTION (3 Items) ---
    { 
      name: "Wireless Keyboard", 
      price: "$25", 
      desc: "Comfort-focused design for long hours of typing. Includes batteries.", 
      type: "Physical Hardware",
      fulfillment: "Free Local Delivery (Toronto Only)",
      image: "https://unsplash.com",
      stripeLink: "#" 
    },
    { 
      name: "Rechargable Wireless Mouse", 
      price: "$25", 
      desc: "High-accuracy optical sensor with ergonomic grip and silent clicking.", 
      type: "Physical Hardware",
      fulfillment: "Free Local Delivery (Toronto Only)",
      image: "https://unsplash.com",
      stripeLink: "#" 
    },
    { 
      name: "Noise-Cancelling Headphone", 
      price: "$45", 
      desc: "Crystal clear audio and clear microphone transmission for business meetings.", 
      type: "Physical Hardware",
      fulfillment: "Free Local Delivery (Toronto Only)",
      image: "https://unsplash.com",
      stripeLink: "#" 
    },

    // --- 2. MANAGED IT SERVICES & SUBSCRIPTIONS (3 Items) ---
    { 
      name: "Website Care Plan", 
      price: "$49 / mo", 
      desc: "Weekly updates, daily secure cloud backups, and 24/7 uptime monitoring to keep your business online.", 
      type: "Subscription",
      fulfillment: "Email Welcome + SLA Activation",
      image: "https://unsplash.com",
      stripeLink: "#" 
    },
    { 
      name: "IT Security Audit", 
      price: "$299", 
      desc: "A complete health check for your IT systems, DNS tracing, and a custom PDF vulnerability risk assessment report.", 
      type: "One-Time Service",
      fulfillment: "Email Delivery (3–5 Business Days)",
      image: "https://unsplash.com",
      stripeLink: "#" 
    },
    { 
      name: "IT Onboarding Service", 
      price: "$150", 
      desc: "One-time professional configuration setup for user directories, secure cloud permissions, and employee devices using our custom deployment checklists.", 
      type: "One-Time Service",
      fulfillment: "Scheduled Remote Session",
      image: "https://unsplash.com",
      stripeLink: "#" 
    },

    // --- 3. DIGITAL DOWNLOADS & TEMPLATES (6 Items) ---
    { 
      name: "SMB Cyber Resilience & AI Governance Playbook", 
      price: "$35", 
      desc: "An executive blueprint detailing a 4-step Zero Trust compliance roadmap, audit readiness strategies (SOC 2, ISO 27001), and safe AI deployment frameworks.", 
      type: "Digital Download",
      fulfillment: "Instant PDF Download Link",
      image: "https://unsplash.com",
      stripeLink: "#" 
    },
    { 
      name: "Ultimate IT Onboarding & Offboarding Checklist", 
      price: "$15", 
      desc: "A structural operational guide detailing device preparation, employee standard privileges, identity assignment, and immediate account access revocation blueprints.", 
      type: "Digital Download",
      fulfillment: "Instant PDF Download Link",
      image: "https://unsplash.com",
      stripeLink: "#" 
    },
    { 
      name: "Cybersecurity Policy Template", 
      price: "$19", 
      desc: "A plug-and-play Word/PDF handbook covering strong passwords, phishing rules, and corporate MFA compliance.", 
      type: "Digital Download",
      fulfillment: "Instant PDF Download Link",
      image: "https://unsplash.com",
      stripeLink: "#" 
    },
    { 
      name: "Cloud Migration Guide", 
      price: "$19", 
      desc: "Step-by-step guidebook to transition local company files securely to Microsoft 365 or Google Workspace.", 
      type: "Digital Download",
      fulfillment: "Instant PDF Download Link",
      image: "https://unsplash.com",
      stripeLink: "#" 
    },
    { 
      name: "Digital IT Toolkit Bundle", 
      price: "$39", 
      desc: "The complete bundle: onboarding checklists, password rules, backup strategies, and website maintenance templates.", 
      type: "Digital Download",
      fulfillment: "Instant PDF/ZIP Download Link",
      image: "https://unsplash.com",
      stripeLink: "#" 
    },
    { 
      name: "GTA Commercial Utility Overcharge & Carbon Leakage Audit Checklist", 
      price: "$29", 
      desc: "An exclusive pre-audit diagnostic framework for Ontario building owners. Step-by-step scanning methodologies for 15-minute smart meter interval logs, peak demand charges, and provincial EWRB reporting alignment.", 
      type: "Digital Download",
      fulfillment: "Instant PDF Download Link",
      image: "https://unsplash.com",
      stripeLink: "#" 
    }
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto bg-gray-50 min-h-screen text-left">
      <Helmet>
        <title>Community Shoppe | IT Hardware & Digital Solutions Toronto</title>
        <meta name="description" content="Browse the CareEZ Community Shoppe for local IT hardware, business IT support plans, and instant-download sustainability or security toolkits." />
      </Helmet>

      {/* Header Info Block */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">CareEZ Community Shoppe</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Affordable hardware delivered locally to your door, alongside premium digital toolkits and service plans to safeguard your business.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
            📍 Local Toronto Hardware Delivery
          </span>
          <span className="inline-block bg-purple-100 text-purple-800 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
            🛠️ Professional IT Services
          </span>
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
            ⚡ Global Instant Digital Solutions
          </span>
        </div>
      </div>

      {/* Unified Card Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {products.map((p, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Product Card Image Banner */}
              <div className="h-48 w-full overflow-hidden bg-gray-100 relative">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" 
                />
                <span className={`absolute top-4 left-4 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full tracking-wider shadow-sm ${
                  p.type === 'Physical Hardware' 
                    ? 'bg-emerald-500 text-white' 
                    : p.type === 'Subscription' || p.type === 'One-Time Service'
                      ? 'bg-purple-600 text-white'
                      : 'bg-blue-600 text-white'
                }`}>
                  {p.type}
                </span>
              </div>
              
              {/* Card Main Info Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{p.name}</h3>
                <p className="text-xs font-semibold text-gray-400 mb-4 tracking-wide uppercase">{p.fulfillment}</p>
                <p className="text-3xl font-black text-gray-900 mb-3">{p.price}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            </div>

            {/* Functional Call To Action Buttons */}
            <div className="p-6 pt-0">
              <a 
                href={p.stripeLink}
                target={p.stripeLink === '#' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                onClick={(e) => p.stripeLink === '#' && e.preventDefault()}
                className={`w-full text-center font-bold py-3.5 px-4 rounded-xl transition-all duration-200 block tracking-wide shadow-sm ${
                  p.stripeLink === '#' 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none' 
                    : p.type === 'Physical Hardware' 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow' 
                      : p.type === 'Subscription' || p.type === 'One-Time Service'
                        ? 'bg-purple-700 hover:bg-purple-800 text-white hover:shadow'
                        : 'bg-blue-700 hover:bg-blue-800 text-white hover:shadow'
                }`}
              >
                {p.stripeLink === '#' ? 'Awaiting Stripe Links' : p.type === 'Subscription' ? 'Activate Subscription' : 'Instant Checkout'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CommunityShoppe;