export default function Contact() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Contact Us</h1>
      <p className="fs-5">Reach out and let’s build your future together.</p>

      <form className="mt-4">
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Your Name" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Your Email" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button className="btn btn-primary btn-lg">Send Message</button>
      </form>
    </div>
  );
}
