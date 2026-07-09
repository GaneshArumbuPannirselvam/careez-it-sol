import servicesImg from "../assets/ManagedServices.jpg";

function ManagedServices() {
  const servicesList = [
    {
      title: "24/7/365 Proactive Monitoring",
      description: "We keep an eye on your endpoints, network traffic, and firewalls to stop performance bottlenecks before they disrupt your staff."
    },
    {
      title: "Advanced Endpoint Protection (EDR)",
      description: "Replacing weak, traditional antivirus with next-generation threat detection that stops modern ransomware in its tracks."
    },
    {
      title: "Automated Backup & Disaster Recovery",
      description: "Your data is backed up locally and securely to the cloud. If disaster strikes, we can spin your infrastructure back up in minutes, not days."
    },
    {
      title: "Unlimited Remote & On-Site Helpdesk",
      description: "Your team gets direct access to certified tier-2 support agents to resolve day-to-day software and hardware roadblocks instantly."
    }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="mb-10 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          Fully Managed IT & Cybersecurity
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Focus on running your business. We will run the technology behind it. Our fully outsourced 
          IT model provides complete infrastructure monitoring, rapid desk support, and comprehensive 
          security operations tailored for growing organizations.
        </p>
      </div>

      {/* Main Grid Content */}
      <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
        {/* Service Breakdown */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">The Service Breakdown</h2>
          <ul className="space-y-4">
            {servicesList.map((service, index) => (
              <li key={index} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <strong className="block text-gray-900 text-lg mb-1">{service.title}</strong>
                <span className="text-gray-600 text-sm leading-relaxed">{service.description}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Media / Context Panel */}
        <div className="space-y-6">
          <img 
            src={servicesImg} 
            alt="Managed IT Services Support Operations" 
            className="w-full rounded-xl shadow-lg object-cover max-h-[350px]" 
          />
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 text-center">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Predictable flat monthly pricing</h3>
            <p className="text-blue-800 text-sm mb-4">
              Get an entire certified technical team protecting your environment for less than the cost of a single internal hire.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg text-sm shadow transition">
              Get an Operational Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManagedServices;