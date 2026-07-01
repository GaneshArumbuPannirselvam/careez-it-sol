export default function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-md-6">
          <h1 className="fw-bold mb-3">About Careez IT Sol</h1>
          <p className="fs-5 text-muted">
            Careez IT Sol blends “Care” and “Ease” to remove friction from technology.
            We design secure, sustainable, and human‑centric solutions that let organizations
            focus on what matters most.
          </p>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="fw-semibold mb-2">What we stand for</h5>
              <ul className="mb-0 text-muted">
                <li>Security by design</li>
                <li>Sustainable, responsible IT</li>
                <li>Partnership over transactions</li>
                <li>Clarity instead of complexity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
