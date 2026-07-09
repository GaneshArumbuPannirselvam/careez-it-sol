import visionImg from "../assets/vision.jpg";

function Vision() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img src={visionImg} alt="Our Sustainable Green IT Architectural Vision" className="w-full rounded-2xl shadow-xl object-cover max-h-[450px]" />
        </div>
        <div className="order-1 md:order-2">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">Our Vision for Green IT</h1>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            The next generation of infrastructure engineering must balance high-availability cloud capacity with environmental accountability. At CareEZ IT SOL, our design framework actively integrates technical efficiency with eco-conscious standards.
          </p>
          
          <div className="space-y-4 mt-6">
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <strong className="block text-emerald-950 font-bold mb-1">Sustainable Lifecycle Optimization</strong>
              <p className="text-emerald-800 text-sm leading-relaxed">
                We design hardware deployment configurations that maximize individual asset lifetimes. Through strict configuration controls and automated hardware profiling, we help eliminate unnecessary local e-waste.
              </p>
            </div>
            
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <strong className="block text-emerald-950 font-bold mb-1">Eco-Efficient Infrastructure Standards</strong>
              <p className="text-emerald-800 text-sm leading-relaxed">
                We align modern network environments with efficient local server constraints and optimized low-power endpoint configurations to meet localized green building benchmarks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;