import React from 'react';

function Transparency() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-extrabold mb-8">Transparency & Compliance</h1>
      
      <div className="space-y-8 leading-relaxed">
        
        {/* Trademark & Brand Usage */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Trademark & Brand Usage</h2>
          <p className="text-sm text-gray-500 italic">
            <strong>Trademark & Brand Disclosure:</strong> All product names, logos, brands, and trademarks 
            mentioned on this site are the property of their respective owners. CareEZ IT SOL is an 
            independent technology consultancy. The use of these trademarks and brand names in our articles 
            and reviews is for identification purposes only and does not imply endorsement by, sponsorship 
            from, or affiliation with the respective trademark holders.
          </p>
        </div>

        {/* Affiliate Disclosure */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Affiliate Disclosure</h2>
          <p>
            CareEZ IT SOL is an independent technology consultancy. We believe in total honesty with our clients and readers. 
            To support our mission of providing free, high-quality technical insights to the Toronto business community, 
            some of the links on our website are "affiliate links."
          </p>
          <p className="mt-4">
            <strong>What this means:</strong> When you click on an affiliate link and complete a purchase, we may earn a small commission 
            from the provider. This comes at no additional cost to you. Our editorial integrity is our highest priority; 
            we are not influenced by affiliate partnerships.
          </p>
        </div>

        {/* Privacy Policy */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Privacy Policy</h2>
          <p>
            Your data privacy is a priority. We collect minimal information to improve your experience and provide relevant 
            services. We never sell your personal information to third parties. We use standard analytical tools to help 
            us understand how our community interacts with our content so we can serve you better.
          </p>
        </div>

        {/* Cookie Policy */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Cookie Policy</h2>
          <p>
            Our website uses cookies to keep our site running smoothly and to personalize your experience. By continuing 
            to browse, you agree to the use of these cookies as outlined in our site standards.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Transparency;