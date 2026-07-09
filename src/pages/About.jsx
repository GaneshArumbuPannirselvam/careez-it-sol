import aboutImg from "../assets/about.jpg";

function About() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">Our Core Story</h1>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            CareEZ IT SOL was built with a clear purpose: to bridge the critical gap between complex, enterprise-grade systems engineering and small-to-medium enterprise operations. We remove technical gatekeeping by keeping your IT assets meticulously mapped, clear, and visible to you at all times.
          </p>
          
          <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">The Operational Promise</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <strong className="text-gray-900">Proactive Auditing:</strong> We target hardware faults and logical vulnerabilities before they impact your office production lines.
            </li>
            <li>
              <strong className="text-gray-900">Agile Tracking:</strong> Utilizing structured operational frameworks to track issues transparently with rapid ticket closure and zero hidden fees.
            </li>
            <li>
              <strong className="text-gray-900">Total Transparency:</strong> Your configurations, admin accounts, and setup parameters belong entirely to your business—never locked away by your vendor.
            </li>
          </ul>
        </div>
        <div>
          <img src={aboutImg} alt="About CareEZ IT SOL Infrastructure Teams" className="w-full rounded-2xl shadow-xl object-cover max-h-[450px]" />
        </div>
      </div>
    </section>
  );
}

export default About;