import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '', email: '', companyName: '', userCount: '', primaryConcern: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const MY_EMAIL = "info@careezitsol.com"; 
    const subject = encodeURIComponent(`IT Assessment Request - ${formData.companyName}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.companyName}\n` +
      `Users: ${formData.userCount}\n` +
      `Concern: ${formData.primaryConcern}\n`
    );
    window.location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Request Your IT Assessment</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Identify vulnerabilities and optimize your infrastructure. 
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* FORM */}
        <form onSubmit={handleSubmit} className="md:col-span-3 bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6">
          {/* ... (Keep your existing form fields here) ... */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Full Name *</label>
              <input type="text" required className="w-full p-3 border rounded-lg" onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Corporate Email *</label>
              <input type="email" required className="w-full p-3 border rounded-lg" onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Company Name *</label>
            <input type="text" required className="w-full p-3 border rounded-lg" onChange={(e) => setFormData({...formData, companyName: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Estimated User Count *</label>
            <div className="grid grid-cols-2 gap-3">
              {['1-10', '11-50', '51-100', '100+'].map((range) => (
                <label key={range} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="userCount" value={range} required className="mr-2" onChange={(e) => setFormData({...formData, userCount: e.target.value})} />
                  <span className="text-sm">{range}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Primary IT Concern *</label>
            <div className="space-y-2">
              {['Slow Support', 'Security/Compliance', 'Project-Based', 'Budgeting'].map((text) => (
                <label key={text} className="flex items-start p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="primaryConcern" value={text} required className="mt-1 mr-3" onChange={(e) => setFormData({...formData, primaryConcern: e.target.value})} />
                  <span className="text-sm">{text}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-lg transition">
            Request Assessment
          </button>
        </form>

        {/* SIDEBAR */}
        <div className="md:col-span-2 space-y-6">
          <div className="p-6 bg-gray-900 text-white rounded-xl">
            <h3 className="text-lg font-bold mb-4">Engineering Standards</h3>
            <ul className="space-y-4 text-sm">
              <li>✓ <strong>Infrastructure:</strong> ITIL-aligned processes.</li>
              <li>✓ <strong>Security:</strong> Zero-Trust architecture.</li>
              <li>✓ <strong>Compliance:</strong> PIPEDA compliant.</li>
            </ul>
          </div>
          
          <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
            <h3 className="font-bold text-blue-900">Direct Intake</h3>
            <p className="text-sm text-blue-700 mb-2">Need a faster response?</p>
            <a href="tel:+14165550123" className="font-bold text-blue-900 underline">+1 (416) 555-0123</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;