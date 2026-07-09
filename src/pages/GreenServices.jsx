import greenImg from "../assets/GreenInfrastructure.jpg";
function GreenServices() {
  const greenServicesList = [
    {
      title: "Green Data Center & Cloud Migration Optimization",
      description: "We audit your physical IT infrastructure to minimize cooling overhead and power consumption, moving heavy compute workloads to carbon-neutral cloud fabrics where applicable."
    },
    {
      title: "Electronic Waste (E-Waste) Lifecycle Management",
      description: "Implementation of strict asset disposition policies that align with LEED v4 Materials and Resources (MR) credits, ensuring secure data destruction paired with certified sustainable recycling."
    },
    {
      title: "Smart Building IT Integration",
      description: "Consulting on Internet of Things (IoT) sensor deployment, automated smart lighting, and building-automation network fabrics to help your commercial real estate project hit target LEED energy metrics."
    },
    {
      title: "LEED Project IT Documentation",
      description: "Providing specialized technical reporting, data audits, and documentation required for the indoor environmental quality and energy tracking sections of your commercial LEED certification."
    }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="mb-10 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          Bridging High-Performance Tech & High-End Sustainability
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Empowering modern businesses to lower data center energy bills, optimize electronic resource 
          lifecycles, and meet stringent LEED green building frameworks.
        </p>
      </div>

      {/* Main Grid Content */}
      <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
        {/* Project Specialties */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Sustainable IT Services</h2>
          <div className="grid gap-4">
            {greenServicesList.map((service, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 text-md mb-1">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media / Contact Column */}
        <div className="flex flex-col gap-6">
          <img 
            src={greenImg} 
            alt="Sustainable Digital Infrastructure & Green Building Practices" 
            className="w-full rounded-xl shadow-lg object-cover max-h-[350px]" 
          />
          
          {/* Custom Double Border Contact Callout */}
          <div 
            className="p-6 bg-white text-gray-900 rounded-xl"
            style={{
              border: "8px solid #003851",
              boxShadow: "inset 0 0 0 8px #FC7713"
            }}
          >
            <h3 className="text-xl font-bold text-[#003851] mb-2">
              Is your IT infrastructure ready for the next green standard?
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Digital footprint management is no longer optional for growing enterprises. Book a specialized 
              Green IT Audit to uncover power inefficiencies and align your framework with LEED certification goals.
            </p>
            <button className="w-full bg-[#FC7713] hover:bg-[#e26205] text-white font-bold py-2.5 px-4 rounded-lg text-sm transition shadow-sm">
              Schedule Your Sustainable IT Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GreenServices;