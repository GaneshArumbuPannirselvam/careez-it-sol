import careersImg from "../assets/careers.jpg";

function Careers() {
  const perks = [
    {
      title: "The Anti-Burnout Promise",
      desc: "We maintain healthy engineer-to-endpoint ratios. No unrealistic ticket quotas or endless firefighting loops."
    },
    {
      title: "The Certification Ladder",
      desc: "We invest directly in your professional growth. We pay for your enterprise certification vouchers (Microsoft, CompTIA, Cisco, security credentials) and allocate dedicated weekly study hours."
    },
    {
      title: "Hands-On Tech Diversity",
      desc: "You will work across modern tech stacks—managing cloud environments, scripting automations, hardening networks, and solving real architectural challenges."
    }
  ];

  const values = [
    { name: "Extreme Ownership", text: "We don't hand off a complex problem. We see it through to absolute resolution." },
    { name: "Continuous Learning", text: "The threat landscape changes every single week; we stay sharp by learning together." },
    { name: "Transparent Collaboration", text: "No gatekeeping technical knowledge. We grow by sharing documentation and teaching our peers." }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="mb-10 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          Build Your Tech Career With Us
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          As CareEZ IT SOL expands, we welcome people who appreciate collaboration, creativity, and customer-focused service. 
          We provide a nurturing environment where individuals may grow professionally, provide important work, and establish 
          a long-term career in contemporary IT. We are assembling a group of ethical, inquisitive, and environmentally 
          conscious technologists. If you have a strong interest in IT, security, and sustainability, we would be delighted 
          to speak with you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
        {/* Why Join Us Column */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Why Technicians Love Working Here</h2>
          <div className="space-y-4">
            {perks.map((perk, i) => (
              <div key={i} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <strong className="block text-gray-900 text-base mb-1">{perk.title}</strong>
                <p className="text-gray-600 text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 pt-4">Our Core Values</h2>
          <ul className="space-y-3">
            {values.map((v, i) => (
              <li key={i} className="text-sm text-gray-600">
                <strong className="text-gray-900">{v.name}:</strong> {v.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Image & CTA Column */}
        <div className="space-y-6">
          <img 
            src={careersImg} 
            alt="CareEZ IT SOL Growth and Culture" 
            className="w-full rounded-xl shadow-lg object-cover max-h-[350px]" 
          />
          <div className="p-6 bg-green-50 rounded-xl border border-green-100 text-center">
            <h3 className="text-lg font-bold text-green-900 mb-2">Ready to grow with us?</h3>
            <p className="text-green-800 text-sm mb-4">
              Submit your credentials directly to our team to find out where your skills align with our upcoming client deployments.
            </p>
            <p className="text-base font-semibold text-gray-900">
              Email your resume to: <a href="mailto:careers@careezitsol.com" className="text-blue-600 underline hover:text-blue-800">careers@careezitsol.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Careers;