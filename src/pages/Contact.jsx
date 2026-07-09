import { useState } from 'react';
import contactImg from "../assets/contact.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    userCount: '',
    primaryConcern: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your main corporate mailbox endpoint
    const MY_EMAIL = "info@careezitsol.com"; 
    
    const subject = encodeURIComponent(`IT Assessment Request - ${formData.companyName}`);
    
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\n` +
      `Corporate Email: ${formData.email}\n` +
      `Company: ${formData.companyName}\n` +
      `User Count: ${formData.userCount}\n` +
      `Primary Concern: ${formData.primaryConcern}\n`
    );

    // Formats and launches the local client mail system natively
    window.location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Form Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Request a Complimentary IT & Security Assessment
        </h1>
        <p className="text-md text-gray-600 max-w-2xl mx-auto">
          Let's find your network vulnerabilities and support bottlenecks before a security threat does. 
          Fill out the form below to generate your automated intake report.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* Left Side: Interactive Web Form (Spans 3 Columns) */}
        <form onSubmit={handleSubmit} className="md:col-span-3 bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100 space-y-6">
          
          {/* Row 1: Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input 
                type="text" required
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="John Doe"
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Corporate Email Address *</label>
              <input 
                type="email" required
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="jdoe@company.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          {/* Row 2: Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
            <input 
              type="text" required
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Acme Corp"
              onChange={(e) => setFormData({...formData, companyName: e.target.value})}
            />
          </div>

          {/* Row 3: User Count Radio Buttons */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Estimated User Count *</label>
            <div className="grid grid-cols-2 gap-3">
              {['1-10', '11-50', '51-100', '100+'].map((range) => (
                <label key={range} className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                  <input 
                    type="radio" name="userCount" value={range} required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    onChange={(e) => setFormData({...formData, userCount: e.target.value})}
                  />
                  <span className="ml-2 text-sm text-gray-700">{range}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Row 4: Primary Concern Radio Buttons */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">What is your primary IT concern today? *</label>
            <div className="space-y-2">
              {[
                'Our current IT support is too slow or unresponsive.',
                'We are worried about ransomware, cyberattacks, or compliance.',
                'We have a specific, upcoming one-time project (Cloud migration, office move).',
                'We want a predictable, flat-rate monthly IT budget.'
              ].map((text) => (
                <label key={text} className="flex items-start p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                  <input 
                    type="radio" name="primaryConcern" value={text} required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
                    onChange={(e) => setFormData({...formData, primaryConcern: e.target.value})}
                  />
                  <span className="ml-3 text-sm text-gray-700">{text}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Action Button */}
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-200">
            Open App to Send Email Submission
          </button>
        </form>

        {/* Right Side: Contact Info Panel (Spans 2 Columns) */}
        <div className="md:col-span-2 space-y-6">
          <img 
            src={contactImg} 
            alt="CareEZ IT Solutions Office" 
            className="w-full rounded-xl shadow-lg object-cover max-h-[250px]" 
          />
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Direct Contact Details</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We’re here to help. Whether you need immediate support, infrastructure consultation, 
              or proactive guidance on your corporate IT strategy, our engineering team is ready to respond.
            </p>
            <div className="border-t pt-4 text-sm space-y-2 text-gray-700">
              <p><strong>Location:</strong> Based in Toronto, serving clients across Ontario.</p>
              <p><strong>Email:</strong> <a href="mailto:info@careezitsol.com" className="text-blue-600 underline hover:text-blue-800">info@careezitsol.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+14165550123" className="text-blue-600 underline hover:text-blue-800">+1 (416) 555-0123</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;