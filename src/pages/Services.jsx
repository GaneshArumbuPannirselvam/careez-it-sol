export default function Services() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4 text-center">Our Core Expertise</h1>
      <p className="text-center text-muted mb-5">
        End‑to‑end IT solutions designed for security, performance, and sustainability.
      </p>

      <div className="row g-4">
        {[
          {
            title: "Managed IT Services",
            text: "Proactive monitoring, patching, and support to keep your business always‑on.",
          },
          {
            title: "Cybersecurity & Protection",
            text: "Defense‑in‑depth strategies to protect identities, data, and infrastructure.",
          },
          {
            title: "Network & Cloud Solutions",
            text: "Scalable, resilient architectures built for modern workloads.",
          },
          {
            title: "Green IT & LEED Consulting",
            text: "Energy‑efficient solutions aligned with global sustainability standards.",
          },
          {
            title: "Strategic Sales & Procurement",
            text: "Vendor‑neutral guidance for hardware, software, and licensing.",
          },
        ].map((card, i) => (
          <div className="col-md-4" key={i}>
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-semibold">{card.title}</h5>
                <p className="card-text text-muted">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
