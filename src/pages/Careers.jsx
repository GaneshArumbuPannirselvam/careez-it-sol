import React from 'react';

function Careers() {
  const focusAreas = [
    { 
      title: "Systems Engineering", 
      desc: "Architecting automated deployments and secure endpoint management.", 
      stack: "Intune, Autopilot, PowerShell" 
    },
    { 
      title: "Operations & Compliance", 
      desc: "Managing high-priority escalations and maintaining ITIL-aligned compliance.", 
      stack: "HaloPSA, NinjaOne, RMM" 
    }
  ];

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Engineering the Future of MSP</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At CareEZ IT SOL, we don't just "fix" IT. We engineer sustainable, transparent infrastructure. We are always interested in connecting with builders who share our standards.
        </p>
      </div>

      <div className="space-y-6">
        {focusAreas.map((area, i) => (
          <div key={i} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{area.desc}</p>
            
            <div className="pt-4 border-t border-gray-100">
              <div className="text-[11px] uppercase font-bold text-blue-800">
                Core Stack: {area.stack}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-gray-900 text-white rounded-2xl text-center">
        <h3 className="text-xl font-bold mb-4">Interested in the future of CareEZ?</h3>
        <p className="text-gray-400 text-sm max-w-lg mx-auto mb-6">
          While we are not actively hiring at this moment, we are always open to networking with skilled systems engineers. If you align with our technical vision, feel free to drop a line to our engineering lead.
        </p>
        <a 
          href="mailto:info@careezitsol.com?subject=Inquiry: Engineering Opportunities" 
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-lg transition"
        >
          Connect with Us
        </a>
      </div>
    </section>
  );
}

export default Careers;