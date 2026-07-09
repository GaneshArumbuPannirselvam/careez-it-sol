import servicesImg from "../assets/ProfessionalServices.jpg";

function ProfessionalServices() {
  const projectsList = [
    {
      title: "Cloud Architecture & Migrations",
      description: "Securely transition your legacy servers, files, and mailboxes into robust Microsoft 365 or Azure cloud environments."
    },
    {
      title: "Network Infrastructure Redesign",
      description: "Planning an office expansion or relocation? We design and install high-speed business networks, from physical firewall deployment to optimized Wi-Fi coverage."
    },
    {
      title: "Privileged Access Management & Security Auditing",
      description: "We identify security gaps, evaluate configuration compliance, and lock down your network access permissions to protect proprietary client data."
    },
    {
      title: "Hardware and Lifecycle Procurement",
      description: "From sourcing high-performance laptops to deploying enterprise network switches, we handle vendor management, software licensing, and device imaging out of the box."
    }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="mb-10 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          Strategic IT Consulting & Project Engineering
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Need specialized muscle for a major infrastructure overhaul? We design, deploy, and manage 
          high-impact IT projects on time and on budget—without interrupting your daily operations.
        </p>
      </div>

      {/* Main Grid Content */}
      <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
        {/* Project Specialties */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Our Project Specialties</h2>
          <div className="grid gap-4">
            {projectsList.map((project, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 text-md mb-1">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media / Contact Column */}
        <div className="flex flex-col gap-6">
          <img 
            src={servicesImg} 
            alt="IT Systems Architecture Project Planning" 
            className="w-full rounded-xl shadow-lg object-cover max-h-[350px]" 
          />
          <div className="p-6 bg-gray-900 text-white rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Have an upcoming IT deployment?</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Our engineering team ensures zero-touch transitions, clean systems logic, and minimized downtime during business hours.
            </p>
            <button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-2.5 px-4 rounded-lg text-sm transition">
              Scope Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalServices;